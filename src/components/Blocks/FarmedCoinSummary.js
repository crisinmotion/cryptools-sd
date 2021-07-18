import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@material-ui/core";
import { setUserCurrencies, setUserEarnings } from "../../store/actions/settings.actions";
import { SaveRounded } from "@material-ui/icons";
import numeral from "numeral";

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
		textAlign: 'center',
		'& p': {
			fontSize: '1.2rem'
		} 
	},
	inputField: {		
		fontSize: '1.5rem',
		fontWeight: 500,
		'& input': {
			textAlign: 'center',			
		}
	},
}))


const FarmedCoinSummary = props => {
	const {
		settings,
		title,		
		style,
		color,
		exchangeRate,
		updateUserEarnings,
		updateUserCurrencies,
		currencyId
	} = props
	const classes = useStyles();
	const theme = useTheme();

	const defaultConfig = {
		earnings: {

		},
	}

	const defaultData = {
		rewards_to_claim: 0,
		wallet_balance: 0,
		staked: 0,
		ingame_only:0,
		total: 0,
	}

	const [config, setConfig] = useState(defaultConfig)
	const [confirmSave, setConfirmSave] = useState(false)
	const [convertedRate, setConvertedRate] = useState(0)	
	
	useEffect(()=>{
		const currencyObj = settings.userCurrencies[settings.userConfig && settings.userConfig.farmingCurrency]
		if((settings && settings.earnings === undefined) || (settings.earnings && Object.keys(settings.earnings).length === 0))		{			
			setConfig((prevState) => {return {...prevState, earnings: {...defaultData, total: settings.userCurrencies && currencyObj && currencyObj.value} }})	
		}else{			
			setConfig((prevState) => {return {...prevState, earnings: settings.earnings }})	
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {
		if(settings && settings.earnings && exchangeRate) {
			setConvertedRate(exchangeRate * ((settings.earnings && numeral(settings.earnings.total)) || 0))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [exchangeRate, settings.earnings])

	useEffect(() => {
		
		if(config && config.earnings && Object.keys(config.earnings).length > 0) {
			 
			 const reward = config.earnings && numeral(config.earnings.rewards_to_claim) 
			 const staked = config.earnings && numeral(config.earnings.staked)
			 const wallet = config.earnings && numeral(config.earnings.wallet_balance)
			 const ingame = config.earnings && numeral(config.earnings.ingame_only)
			 const params = {				 
					earnings: {
						...config.earnings,
						total: reward + staked + wallet + ingame
					}
			 }
			 updateUserEarnings(params)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config])



	const handleSaveEarnings = () => {
		const farmingCurrency = settings.userConfig && settings.userConfig.farmingCurrency;
		const userFarmingCurrenciesData = settings.userCurrencies && settings.userCurrencies[farmingCurrency]
		const params = {
			[farmingCurrency] : {
				...userFarmingCurrenciesData,
				id: (userFarmingCurrenciesData && userFarmingCurrenciesData.id) || currencyId,
				value: settings.earnings.total
			}
		}

		updateUserCurrencies(params)
		setConfirmSave(!confirmSave)
	}

  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom style={{marginBottom: theme.spacing(3)}}>{title}</Typography>
			{ config.earnings && Object.keys(config.earnings).length > 0 && settings && settings.earnings && Object.keys(settings.earnings).length > 0 &&
				<Grid container spacing={2}>
					<Grid item xs={6}>
						
							<TextField
								label={'Rewards to Claim'}
								variant={'outlined'}											
								size={'small'}
								className={classes.textFields}
								onChange={(e)=> {
									const value = e.target.value;
									setConfig((prevState) => { return {...prevState, earnings: { ...prevState.earnings, rewards_to_claim: value }}})									
								}}
								value={config && config.earnings && config.earnings.rewards_to_claim ? config.earnings.rewards_to_claim : '' }				
								placeholder={'0'}	
								InputProps={{				
									className: classes.inputField,	
									style:{color: color},
									type: 'number'															
								}}				
							/>
						
						<TextField
							label={'Wallet Balance'}
							variant={'outlined'}				
							size={'small'}
							className={classes.textFields}
							onChange={(e)=> {
								const value = e.target.value;
								setConfig((prevState) => { return {...prevState, earnings: { ...prevState.earnings, wallet_balance: value }}})
							}}
							value={config && config.earnings && config.earnings.wallet_balance ? config.earnings.wallet_balance : '' }								
							placeholder={'0'}				
							InputProps={{				
								className: classes.inputField,	
								style:{color: color},	
								type: 'number'													
							}}				
						/>
					</Grid>
					<Grid item xs={6}>
							<TextField
								label={'Staked'}
								variant={'outlined'}				
								size={'small'}
								className={classes.textFields}												
								onChange={(e)=> {
									const value = e.target.value;
									setConfig((prevState) => { return {...prevState, earnings: { ...prevState.earnings, staked: value }}})
								}}
								value={config && config.earnings && config.earnings.staked ? config.earnings.staked : '' }									
								placeholder={'0'}				
								InputProps={{				
									className: classes.inputField,	
									style:{color: color},			
									type: 'number'														
								}}				
							/>
							<TextField
								label={'In-Game Only'}
								variant={'outlined'}				
								size={'small'}
								className={classes.textFields}												
								onChange={(e)=> {
									const value = e.target.value;
									setConfig((prevState) => { return {...prevState, earnings: { ...prevState.earnings, ingame_only: value }}})
								}}
								value={config && config.earnings && config.earnings.ingame_only ? config.earnings.ingame_only : '' }									
								placeholder={'0'}				
								InputProps={{				
									className: classes.inputField,	
									style:{color: color},
									type: 'number'
								}}				
							/>
							
					</Grid>
				</Grid>
			}
			<Container style={{display: 'flex', justifyContent: 'space-between', padding: 0, alignItems:'center'}}>
				<Button variant={'contained'} disableElevation onClick={()=>{
					setConfig((prevState) => {return {...prevState, earnings: defaultData }})	
				}}>Reset</Button>
				<div>
					<Typography variant={'caption'}>{settings && settings.userConfig && settings.userConfig.farmingCurrency + ' '}Consolidated Earnings</Typography>
					<Typography variant={'h4'}>{numeral((settings.earnings && settings.earnings.total) || 0).format("0,0.0000")}</Typography>
					{settings && settings.userConfig && <Typography variant={'caption'} component={'span'}>&#8776; {settings.userConfig.localCurrency} {numeral(convertedRate || 0).format("0,0.00")} <span style={{color: 'transparent'}}>l</span></Typography>}
					{settings && settings.userConfig && <Typography variant={'caption'} component={'strong'}>@ {settings.userConfig.localCurrency} {numeral(exchangeRate || 0).format("0,0.00")}/{settings.userConfig.farmingCurrency} <span style={{color: 'transparent'}}>l</span></Typography>}
				</div>
				<Button variant={'contained'} color={'primary'} disableElevation onClick={()=> setConfirmSave(!confirmSave)}><SaveRounded/></Button>
			</Container>
			
			<Dialog
        open={confirmSave}
        onClose={()=> setConfirmSave(!confirmSave)}
        aria-labelledby="confirm-save"
        aria-describedby="confirm-save-match"
      >
        <DialogTitle id="confirm-save">{"Save"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-save-match">
            {"Confirm save of the total farmed value? This will update all the calculations related to this data on the dashboard."}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{display:'flex', justifyContent: 'space-between', padding: theme.spacing(2)}} >
          <Button onClick={()=> setConfirmSave(!confirmSave)} color="default">
            Cancel
          </Button>
          <Button onClick={handleSaveEarnings} variant={'contained'} color="primary" disableElevation disableFocusRipple>
						<SaveRounded/>
          </Button>
        </DialogActions>
      </Dialog>
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
		updateUserEarnings: params => dispatch(setUserEarnings(params)),
		updateUserCurrencies: params => dispatch(setUserCurrencies(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FarmedCoinSummary);
