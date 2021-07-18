import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd';
import DefaultColumn from "../components/Columns/Default";
import DefaultWrapper from "../components/Wrappers/Default";
import { Grid, Snackbar } from "@material-ui/core";
import { setBlocks, updateColumnBlocks } from "../store/actions/boards.actions";
import ConfigBlock from "../components/Blocks/ConfigBlock";
import DefaultColoredBlock from "../components/Blocks/DefaultColoredBlock";
import InputBlock from "../components/Blocks/InputBlock";
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import numeral from 'numeral';
import _ from 'lodash';
import DailyMatchBlock from "../components/Blocks/DailyMatchBlock";
import MatchHistory from "../components/Blocks/MatchHistory";
import FarmedCoinSummary from "../components/Blocks/FarmedCoinSummary";
import LastTransactionsSummary from "../components/Blocks/LastTransactionsSummary";

const  Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Portal = props => {
	const { 
		boards,
		updateBlocks,
		userConfig,
		updateColumnBlocks,
		userCurrencies,
		userMatches
	 } = props

	 const DEFAULT_USERDATA = {
			currencies: {},
			userWalletTransactions: {},
			userBinanceBalance: {},
			supportedCurrencies: []

		}

	 	const [userData, setUserData] = useState(DEFAULT_USERDATA)
		 const [notifications, setNotifications] = useState(null)
		const [isLoading, setIsLoading] = useState(false)

		useEffect(() => {
			if(!isLoading && userConfig && userConfig.walletAddress && userConfig.apiKey && userConfig.farmingCurrency && userConfig.localCurrency && userCurrencies && Object.keys(userCurrencies).length > 0) {
				let selectedCurrency = userConfig.localCurrency || 'PHP'
				let CURRENCIES_DATA = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency='+ selectedCurrency +'&ids=binancecoin,' + (userCurrencies[userConfig.farmingCurrency] && userCurrencies[userConfig.farmingCurrency].id) + ''				
				let BINANCE_WALLET_DATA = 'https://api.bscscan.com/api?module=account&action=txlist&address='+ userConfig.walletAddress +'&startblock=1&endblock=99999999&sort=desc&apikey=' + userConfig.apiKey + ''
				let BINANCE_WALLET_BALANCE = 'https://api.bscscan.com/api?module=account&action=balance&address='+ userConfig.walletAddress +'&tag=latest&apikey=' + userConfig.apiKey + ''
				let SUPPORTED_CURRENCIES = 'https://api.coingecko.com/api/v3/simple/supported_vs_currencies'
				
				const req_currency_data = axios.get(CURRENCIES_DATA)
				const req_wallet_data = axios.get(BINANCE_WALLET_DATA)
				const req_balance_data = axios.get(BINANCE_WALLET_BALANCE)
				const req_supported_currencies = axios.get(SUPPORTED_CURRENCIES)
				setIsLoading(true)
				axios
					.all([req_currency_data, req_wallet_data, req_balance_data, req_supported_currencies])
					.then(
						axios.spread((...responses) => {
							const respCurrencyData = responses[0];
							const respWalletData = responses[1];
							const respBalanceData = responses[2];
							const respSupportedCurrencies = responses[3]

							// use/access the results
							setUserData((prevState) => {return {
								currencies: {
									...respCurrencyData.data
								},
								userWalletTransactions: {
									...respWalletData.data
								},
								userBinanceBalance: {
									...respBalanceData.data
								},
								supportedCurrencies: {
									...respSupportedCurrencies.data
								}
							}})
							setIsLoading(false)
						})
					)
					.catch((errors, response) => {
						// react on errors.						
						setNotifications({options: {severity: 'error', duration: 6000 , text: `API ${errors.name}: ${errors.response.data.error}` }})						
						setIsLoading(false)
					});
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [userConfig, userCurrencies])

			let BLOCK_OBJECT = {}
			const capitalCurrency = userConfig && userCurrencies && userCurrencies[userConfig.capitalCurrency] ? userCurrencies[userConfig.capitalCurrency] : 'PHP'

		
			const totalTransactionsList = _.filter(userData.userWalletTransactions && userData.userWalletTransactions.result, function(o) { return  o.isError === '0' && o.to === '0x39bea96e13453ed52a734b6aceed4c41f57b2271' });						
			const totalTransactions = (5000000000 * (totalTransactionsList.reduce((total, obj) => (parseInt(obj.gasUsed)) + total,0)))/1000000000000000000

			const currencyExchangeValue = userData.currencies[1] && userData.currencies[1].current_price
			const userBNBBalance = userData.userBinanceBalance.result/1000000000000000000
			const BNBCurrentPRice = userData.currencies[0] && userData.currencies[0].current_price
			const userBNBBalanceExchange = (userData.currencies[0] && userData.currencies[0].current_price) * userBNBBalance
			const currencyEarningExchange = (userConfig && userCurrencies[userConfig.farmingCurrency] && userCurrencies[userConfig.farmingCurrency].value) * currencyExchangeValue
			const totalTransactionsInExchange = BNBCurrentPRice * totalTransactions
			const ROIGasVSCapitalAndSumTxns = currencyEarningExchange - (capitalCurrency && parseInt(capitalCurrency.value) + totalTransactionsInExchange)
			const ROICalcGasFee = currencyEarningExchange - totalTransactionsInExchange
			const TotalInitialInvestmentPeso = (parseInt(capitalCurrency.value)) + totalTransactionsInExchange



			const blockData = {
				currencyExchangeValue: numeral(currencyExchangeValue || 0).format("0,0.00"),
				userBNBBalance: numeral(userBNBBalance || 0).format("0,0.0000"),
				userBNBBalanceExchange: numeral(userBNBBalanceExchange || 0).format("0,0.00"),
				currencyEarningExchange: numeral(currencyEarningExchange || 0).format("0,0.00"),
				totalTransactions: numeral(totalTransactions || 0).format('0,0.000'),
				totalTransactionsInExchange: numeral(totalTransactionsInExchange || 0).format('0,0.00'),
				ROIGasVSCapitalAndSumTxns: numeral(ROIGasVSCapitalAndSumTxns || 0).format("0,0.00"),
				ROICalcGasFee: numeral(ROICalcGasFee || 0).format('0,0.00'),
				TotalInitialInvestmentPeso: numeral(TotalInitialInvestmentPeso || 0).format("0,0.00")
			}

			// console.log(userConfig, 'USER CONFIG')
			const localCurrency = (userConfig && userConfig.localCurrency) || 'PHP'
			BLOCK_OBJECT = {
				blocks: {
					'ConfigBlock': {id: 'ConfigBlock', content: <ConfigBlock supportedCurrencies={userData && userData.supportedCurrencies} setNotifications={setNotifications}/>},
					'FarmedCoinSummary': {id: 'FarmedCoinSummary', content: <FarmedCoinSummary title={'Skill Earnings Summary'} currency={'SKILL'} currencyId={'cryptoblades'} color={'#674EA7'} style={{borderColor: '#674EA7', backgroundColor: '#D9D2E9'}} setNotifications={setNotifications} exchangeRate={currencyExchangeValue || 0}/>},
					'DailyMatches' : {id: 'DailyMatches', content: <DailyMatchBlock title={'Daily Matches'} exchangeRate={currencyExchangeValue || 0} color={'#480032'} style={{borderColor: '#FF449F', backgroundColor: '#DFEEEA'}} setNotifications={setNotifications}/>},					
					'MatchHistory' : {id: 'MatchHistory', content: <MatchHistory title={'Match History'} dataSet={userMatches} color={'#480032'} style={{borderColor: '#362222', backgroundColor: '#F9F9F9'}} setNotifications={setNotifications}/>},					
					'ROICalcGasFee': {id: 'ROICalcGasFee', content: <DefaultColoredBlock title={'ROI vs Gas Fees'} value={`${userConfig && userConfig.localCurrency.toUpperCase()} ${blockData.ROICalcGasFee}`} color={ ROICalcGasFee > 0 ? '#6AA84F' : '#E06666'} style={{borderColor: '#E06666', backgroundColor: '#FFF6F4'}} setNotifications={setNotifications}/>},					
					'SkillEarningsPeso': {id: 'SkillEarningsPeso', disabled: true,  content: <DefaultColoredBlock title={'Skill Earnings in ' + localCurrency} value={`${userConfig && userConfig.localCurrency.toUpperCase()} ${blockData.currencyEarningExchange}`} color={'#674EA7'} style={{borderColor: '#674EA7', backgroundColor: '#D9D2E9'}} setNotifications={setNotifications}/>},
					'SkillPhp': {id: 'SkillPhp', disabled: true, content: <DefaultColoredBlock title={'SKILL in ' + localCurrency} value={`${userConfig && localCurrency} ${blockData.currencyExchangeValue}`} color={'#B45F06'} style={{borderColor: '#B45F06', backgroundColor: '#FFF2CC'}} setNotifications={setNotifications}/>},
					'BNBBalance': {id: 'BNBBalance', content: <DefaultColoredBlock title={'BNB Balance'} value={blockData.userBNBBalance} color={'#8E7118'} style={{borderColor: '#8E7118', backgroundColor: '#FFF2CC'}} setNotifications={setNotifications}/>},
					'BNBBalancePHP': {id: 'BNBBalancePHP', content: <DefaultColoredBlock title={'BNB Balance in ' + localCurrency} value={`${userConfig && userConfig.localCurrency.toUpperCase()} ${blockData.userBNBBalanceExchange}`} color={'#6AA84F'} style={{borderColor: '#6AA84F', backgroundColor: '#D9EAD3'}} setNotifications={setNotifications}/>},
					'LastTransactionsSummary': {id: 'LastTransactionsSummary', content: <LastTransactionsSummary title={'Gas Fees (Last 10k Transactions)'} data={
						{
							total: `${(userData.currencies[0] && userData.currencies[0].symbol.toUpperCase()) || ''} ${blockData.totalTransactions}`,
							converted: `${userConfig && localCurrency} ${blockData.totalTransactionsInExchange}`,
							localCurrency: localCurrency
						}
					} color={'#A64D79'} style={{borderColor: '#A64D79', backgroundColor: '#EAD1DC'}} setNotifications={setNotifications}/>},
					'GasFeesTxns': {id: 'GasFeesTxns', disabled: true, content: <DefaultColoredBlock title={'Total CB Gas Fees (Last 1k Txns)'} value={`${(userData.currencies[0] && userData.currencies[0].symbol.toUpperCase()) || ''} ${blockData.totalTransactions}`} color={'#A64D79'} style={{borderColor: '#A64D79', backgroundColor: '#EAD1DC'}} setNotifications={setNotifications}/>},
					'GasFeesTxnsPeso': {id: 'GasFeesTxnsPeso', disabled: true, content: <DefaultColoredBlock title={'Total CB Gas Fees in ' + localCurrency} value={`${userConfig && localCurrency} ${blockData.totalTransactionsInExchange}`} color={'#A64D79'} style={{borderColor: '#A64D79', backgroundColor: '#EAD1DC'}} setNotifications={setNotifications}/>},
					'ROIGasVSCapitalAndSumTxns': {id: 'ROIGasVSCapitalAndSumTxns', content: <DefaultColoredBlock title={'ROI vs Capital and Total Txns'} value={`${userConfig && userConfig.localCurrency.toUpperCase()} ${blockData.ROIGasVSCapitalAndSumTxns}`} color={ROIGasVSCapitalAndSumTxns > 0 ? '#6AA84F' : '#E06666'} style={{borderColor: '#1155CC', backgroundColor: '#FFF6F4'}} setNotifications={setNotifications}/>},
					'TotalInitialInvestmentPeso': {id: 'TotalInitialInvestmentPeso', content: <DefaultColoredBlock title={'Total Initial Investment in ' + (userConfig && userConfig.capitalCurrency) } value={`${userConfig && userConfig.capitalCurrency} ${blockData.TotalInitialInvestmentPeso}`} color={'#4285F4'} style={{borderColor: '#4285F4', backgroundColor: '#FFFFFF'}} setNotifications={setNotifications}/>},					
					'SkillEarnings': {id: 'SkillEarnings', disabled:true, content: <InputBlock title={'Skill Earnings'} currency={'SKILL'} currencyId={'cryptoblades'} color={'#674EA7'} style={{borderColor: '#674EA7', backgroundColor: '#D9D2E9'}} setNotifications={setNotifications}/>},
					'CapitalInvestment': {id: 'CapitalInvestment', content: <InputBlock title={'Capital Invested in ' + localCurrency} currency={localCurrency} currencyId={localCurrency} color={'#4285F4'} style={{borderColor: '#38761D', backgroundColor: '#f2f2f2'}} setNotifications={setNotifications}/>}
				},		 
			}
		

		useEffect(()=>{
			const col = boards.columns['column-1']
			const listAllBlocks = Object.keys(BLOCK_OBJECT.blocks);
			
			if(boards && boards.columns) {
				let boardBucket = []
				Object.keys(boards.columns).map((col) => { boardBucket =  [...boardBucket,...boards.columns[col].blockIds]; return false})
				if(boardBucket.length !== listAllBlocks.length) {
					Object.keys(boards.columns).map((itemcol) => { 
						requestSetBlock({
							...col,
							id:itemcol, 
							blockIds: []
						})
						return false
					})
					requestSetBlock({
						...col, 
						blockIds: listAllBlocks
					})
				}
			}
			if(boards && boards.columns && !boards.columns['column-1'].blockIds.length ) {				
				requestSetBlock({
					...col, 
					blockIds: listAllBlocks
				})
			}
			
			// eslint-disable-next-line react-hooks/exhaustive-deps
		},[])

	const handleDragEnd = result => {
		const { destination, source } = result

		if(!destination) {
			return
		}

		if(
			destination.droppableId === source.droppableId && 
			destination.index === source.index
		){
			return
		}

		const start = boards.columns[source.droppableId]
		const finish = boards.columns[destination.droppableId]
		

		if(start === finish) {
			const newBlockIds = Array.from(start.blockIds)
			let plucked = newBlockIds.splice(source.index, 1)[0]; // cut the element at index 'from'
			newBlockIds.splice(destination.index, 0, plucked); 
			
			const newColumn = {
				...start,
				blockIds: newBlockIds
			}
			requestSetBlock(newColumn)
			return
		}

		//? If dropping to a different column
		const startBlockIds = Array.from(start.blockIds)
		let pluckedStart = startBlockIds.splice(source.index, 1)[0];
		 
		const newStartColumn = {
			...start,
			blockIds: startBlockIds
		}

		const finishBlockIds = Array.from(finish.blockIds)
		finishBlockIds.splice(destination.index,0, pluckedStart)
		
		const newFinishColumn = {
			...finish,
			blockIds: finishBlockIds
		}

		const updatedColumns = {
			[newStartColumn.id] : newStartColumn,
			[newFinishColumn.id] : newFinishColumn
		}

		requestUpdateColumnBlocks(updatedColumns)		
	}

	const requestSetBlock = (params) => {
		updateBlocks(params)
	}
	
	const requestUpdateColumnBlocks = (params) => {
		updateColumnBlocks(params)
	}
	
	const closeNotification = (event, reason)=>{
		if (reason === 'clickaway') {
      return;
    }
		setNotifications(null)
	}
  return (
		<div>
			{ notifications && notifications.options && Object.keys(notifications.options).length > 0 &&
			<Snackbar open={notifications && notifications.options && Object.keys(notifications.options).length > 0 } autoHideDuration={notifications.options.duration} onClose={closeNotification}
				message={notifications.options.text}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			>
				<Alert severity={notifications.options.severity} onClose={closeNotification} style={{textTransform: 'capitalize'}}>
					{notifications && notifications.options && notifications.options.text}
				</Alert>
			</Snackbar>
			}
			<DragDropContext onDragEnd={handleDragEnd}>
				<DefaultWrapper>
					<Grid container spacing={1}>
					{
						boards && boards.columnOrder && boards.columnOrder.map((columnId) => {
							const column = boards.columns[columnId]
							const blocks = column.blockIds.map(blockId => BLOCK_OBJECT.blocks[blockId])
							return <Grid item xs={12} md={6} lg={4} key={column.id}><DefaultColumn column={column} blocks={blocks}/></Grid>
						})
					}
					</Grid>
			
				</DefaultWrapper>
			</DragDropContext>
		</div>
  );
};

const mapStateToProps = state => {
  return {
		boards: state.boards,
		userConfig: state.settings.userConfig,
		userCurrencies: state.settings.userCurrencies,
		userMatches: state.settings.userMatches
  };
};

const mapDispatchToProps = dispatch => {
  return {
		updateBlocks: (params) => dispatch(setBlocks(params)),
		updateColumnBlocks: (params) => dispatch(updateColumnBlocks(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal);
