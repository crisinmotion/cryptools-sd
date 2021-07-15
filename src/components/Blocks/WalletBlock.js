import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from "@material-ui/core";
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
	}
}))


const WalletBlock = props => {
	const {
		settings,
		updateConfigurations
	} = props
	const classes = useStyles();

	const defaultConfig = {
		walletAddress: null,
		apiKey: null,
		localCurrency: 'php'
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
)(WalletBlock);
