import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from "@material-ui/core";
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
	const classes = useStyles();

	const defaultConfig = {
		walletAddress: null,
		apiKey: null,
		confirmed: false
	}

	const [config, setConfig] = useState(defaultConfig)



  return (
		<div {...props} className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>Configuration</Typography>
			<TextField 
				label={'Wallet Address'}
				variant={'outlined'}
				placeholder={'0xaBcd123...'}
				size={'small'}
				className={classes.textFields}
				error={!config.walletAddress}
				helperText={!config.walletAddress ? 'Wallet Address is required for API calls on BSCScan.' : ''}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, walletAddress: value}})
				}}
				value={config.walletAddress}
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
				value={config.apiKey}
			/>

			<Button variant="contained" color="primary" disabled={!config.walletAddress && !config.apiKey || config.confirmed === true}
				onClick={()=>{
					setConfig((prevState) => {return {...prevState, confirmed: true}})
				}}
			>
				Confirm
			</Button>
			
    </div>
  );
};

export default WalletBlock
