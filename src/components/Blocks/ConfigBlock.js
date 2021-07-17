import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Link, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { setConfigurations } from "../../store/actions/settings.actions";
import DefaultDialog from "../Dialog/Default";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#F2F2F2',
		borderTop: 'solid 8px #999999'
	},
	textFields: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	formControl: {    
    minWidth: 120,
		width: '100%',
		marginBottom: theme.spacing(2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))


const ConfigBlock = props => {
	const {
		settings,
		updateConfigurations,
		supportedCurrencies
	} = props
	const classes = useStyles();

	const defaultConfig = {
		walletAddress: null,
		apiKey: null,
		localCurrency: 'PHP',
		farmingCurrency: 'SKILL',
		capitalCurrency: 'PHP'
	}

	const [config, setConfig] = useState(defaultConfig)
	const [apiKeyInfoOpen, setApiKeyInfoOpen] = useState(false)
	const [walletInfoOpen, setWalletInfoOpen] = useState(false)
	useEffect(()=>{
		if(settings && !settings.userConfig) {			
			updateConfigurations(config)
		}else{
			setConfig(settings.userConfig)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {		
		
		updateConfigurations(config)
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config, updateConfigurations ])

  return (
		<div className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>Configuration</Typography>
			<Typography variant={'caption'} component={'div'} align={'left'} gutterBottom>
				Why the app needs your wallet address? <Link href={'#'} onClick={(e)=> {
					e.preventDefault();
					setWalletInfoOpen(true)
				}}>Expand Details</Link>
			</Typography>
			<TextField 
				label={'Wallet Address'}
				variant={'outlined'}
				placeholder={'0xaBcd123...'}
				size={'small'}
				className={classes.textFields}
				error={!config.walletAddress}
				helperText={!config.walletAddress ? 'Wallet Address required.' : ''}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, walletAddress: value}})
				}}
				value={config && config.walletAddress ? config.walletAddress : ''}
			/>
			<Typography variant={'caption'} component={'div'} align={'left'} gutterBottom>What is API Key and why do the app need it? <Link href={'#'} onClick={(e)=> {
				e.preventDefault();
				setApiKeyInfoOpen(true)
			}}>Expand Details</Link>
			</Typography>
			<TextField 
				label={'API Key'}
				variant={'outlined'}				
				size={'small'}
				className={classes.textFields}
				error={!config.apiKey}
				helperText={!config.apiKey ? 'API Key is required.' : ''}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, apiKey: value}})
				}}
				value={config && config.apiKey ? config.apiKey : ''}
			/>
			{supportedCurrencies && Object.keys(supportedCurrencies).length > 0 &&
				<FormControl className={classes.formControl} variant={'outlined'} size={'small'}>
					<InputLabel shrink id="capital-currency-selector-label">Local Currency</InputLabel>
					<Select
						labelId="local-currency-selector-label"
						id="local-currency-selector"
						value={settings && settings.userConfig && settings.userConfig.localCurrency || 'USD'}
						onChange={(e)=> {
							const value = e.target.value;
							setConfig((prevState) => { return {...prevState, localCurrency: value}})
						}}
						className={classes.selectEmpty}
					>
						{
							Object.keys(supportedCurrencies).map((i) => {
								return (
									<MenuItem value={supportedCurrencies[i].toUpperCase()} key={i}>{supportedCurrencies[i].toUpperCase()}</MenuItem>
								)
							})
						}
				
					</Select>        
				</FormControl>
			}
			{settings.userCurrencies && Object.keys(settings.userCurrencies).length > 0 && 
			<Fragment>
				<FormControl className={classes.formControl} variant={'outlined'} size={'small'}>
								<InputLabel shrink id="capital-currency-selector-label">Currency Used for Capital</InputLabel>
								<Select
									labelId="capital-currency-selector-label"
									id="capital-currency-selector"
									value={settings.userConfig.capitalCurrency || ''}
									onChange={(e)=> {
							const value = e.target.value;
							setConfig((prevState) => { return {...prevState, capitalCurrency: value}})
						}}
									className={classes.selectEmpty}
								>
						{
							settings.userCurrencies && Object.keys(settings.userCurrencies).map((currency) => {
								return (
									<MenuItem value={currency} key={currency}>{currency}</MenuItem>
								)
							})
						}
				
					</Select>        
				</FormControl>
				<FormControl className={classes.formControl} variant={'outlined'} size={'small'}>
					<InputLabel shrink id="farming-currency-selector-label">Currency You are Farming</InputLabel>
					<Select
						labelId="farming-currency-selector-label"
						id="farming-currency-selector"
						value={settings.userConfig.farmingCurrency || ''}
						onChange={(e)=> {
							const value = e.target.value;
							setConfig((prevState) => { return {...prevState, farmingCurrency: value}})
						}}
						className={classes.selectEmpty}
					>
						{
							settings.userCurrencies && Object.keys(settings.userCurrencies).map((currency) => {
								return (
									<MenuItem value={currency} key={currency}>{currency}</MenuItem>
								)
							})
						}
					</Select>        
				</FormControl>
			</Fragment>
			}
			<DefaultDialog open={apiKeyInfoOpen} closeCallback={() => setApiKeyInfoOpen(false) }
				title={'What is API Key and why do the app need it?'}
			>
				<ol style={{padding: '0 20px 20px 10px'}}>
					<li>
						<Typography variant={'body1'} gutterBottom>
							We are using Binance Smart Chain Developer API to fetch community data from their server using your wallet address. 
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom>
							Your wallet information and data we use on this app is also publicly accessible from the <Link href={'https://bscscan.com/'} color={'primary'} target="_blank" rel="noopener">BSCChain Website</Link>. We are only accessing it through API so we can have a more customized view of the data we need.
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom>
							This API Key has nothing to do with anything private on your wallet. If you still don't trust the use of this app, please feel free to leave. 
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom>
							To create your personal API Key, please create an account on <Link href={'https://bscscan.com/register'} target={'_blank'} rel="noopener">BSCScan here</Link> and create an API Key here <Link href={'https://bscscan.com/myapikey'} color={'primary'} target="_blank" rel="noopener">ClientPortal-&gt;MyApiKey</Link> area of BSCScan. 
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom style={{color:'red'}}>
							<strong>Important Note:</strong> This key has nothing to do with your wallet security keys. Never use your Wallet security key on this field as this field never hides the API Key field since this is a public data viewer only.  <br/><br/>
							<strong>This app will neither require nor ask your seed phrase or any security details of your wallet. Please keep your security details private. </strong>
						</Typography>
					</li>
				</ol>
			</DefaultDialog>
			<DefaultDialog open={walletInfoOpen} closeCallback={() => setWalletInfoOpen(false) }
				title={'Why the app needs your wallet address?'}
			>
				<ol style={{padding: '0 20px 20px 10px'}}>
					<li>
						<Typography variant={'body1'} gutterBottom>
							We are using Binance Smart Chain Developer API to fetch community data from their server using your wallet address. 
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom>
							Your wallet information and data we use on this app is also publicly accessible from the <Link href={'https://bscscan.com/'} color={'primary'} target="_blank" rel="noopener">BSCChain Website</Link>. We are only accessing it through API so we can have a more customized view of the data we need.
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom>
							If you still don't trust the use of this app, please feel free to leave. 
						</Typography>
					</li>
					<li>
						<Typography variant={'body1'} gutterBottom style={{color:'red'}}>
							<strong>Important Note:</strong> This field has nothing to do with your wallet security keys. Never use your Wallet security key on this field as this field never hides the value since this is a public data viewer only.  <br/><br/>
							<strong>This app will neither require nor ask your seed phrase or any security details of your wallet. Please keep your security details private. </strong>
						</Typography>
					</li>
				</ol>
			</DefaultDialog>
    </div>
  );
};


const mapStateToProps = state => {
  return {
		settings: state.settings 
  };
};

const mapDispatchToProps = dispatch => {
  return {
		updateConfigurations: (params) => dispatch(setConfigurations(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfigBlock);
