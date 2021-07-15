import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { setConfigurations } from "../../store/actions/settings.actions";
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
		updateConfigurations
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
			<TextField 
				label={'Wallet Address'}
				variant={'outlined'}
				placeholder={'0xaBcd123...'}
				size={'small'}
				className={classes.textFields}
				error={!config.walletAddress}
				helperText={!config.walletAddress ? 'Wallet Address is required to pull your public records on BSCScan.' : ''}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, walletAddress: value}})
				}}
				value={config && config.walletAddress ? config.walletAddress : ''}
			/>
			<TextField 
				label={'API Key'}
				variant={'outlined'}				
				size={'small'}
				className={classes.textFields}
				error={!config.apiKey}
				helperText={!config.apiKey ? 'BSCScan API Key is required to access information from their endpoints.' : ''}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, apiKey: value}})
				}}
				value={config && config.apiKey ? config.apiKey : ''}
			/>
			<TextField 
				label={'Local Currency ID'}
				variant={'outlined'}				
				size={'small'}
				className={classes.textFields}
				error={!config.localCurrency}
				helperText={!config.localCurrency ? 'Currency for Localized currency display' : ''}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, localCurrency: value}})
				}}
				value={config && config.localCurrency ? config.localCurrency : ''}
				placeholder={'PHP'}
			/>
			{Object.keys(settings.userCurrencies).length > 0 && 
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
							Object.keys(settings.userCurrencies).map((currency) => {
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
							Object.keys(settings.userCurrencies).map((currency) => {
								return (
									<MenuItem value={currency} key={currency}>{currency}</MenuItem>
								)
							})
						}
					</Select>        
				</FormControl>
			</Fragment>
			}
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
