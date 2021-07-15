import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, Typography } from "@material-ui/core";
import { setUserCurrencies } from "../../store/actions/settings.actions";
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
			fontSize: '3rem'
		} 
	},
	inputField: {		
		fontSize: '3rem',
		fontWeight: 500,
		'& input': {
			textAlign: 'center',			
		}
	},
}))


const InputBlock = props => {
	const {
		settings,
		title,
		updateUserCurrencies,
		currency,
		currencyId,
		style,
		color
	} = props
	const classes = useStyles();

	const defaultConfig = {}

	const [config, setConfig] = useState(defaultConfig)
	useEffect(()=>{
		if(settings && !settings.userCurrencies) {
			if(config.length === 0 && config[currency]) {
				setConfig((prevState) => {return {...prevState, [currency]: {...prevState[currency], value: '', id: currencyId }}})				
			}else{
				setConfig((prevState) => {return {...prevState, [currency]: {...prevState[currency], value: '', id: currencyId}}})				
			}
			updateUserCurrencies(config)			
		}else{
			setConfig(settings.userCurrencies)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {		
		
		updateUserCurrencies(config)
		console.log(config)
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config, updateUserCurrencies ])



  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			<TextField 				
				// variant={'outlined'}				
				size={'small'}
				className={classes.textFields}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, [currency]: { ...prevState[currency], value: value, id: currencyId }}})
				}}
				value={config && config[currency] && config[currency].value ? config[currency].value : ''}				
				//placeholder={0}				
				InputProps={{				
					className: classes.inputField,	
					style:{color: color},
					type:'number',
					endAdornment: <InputAdornment position="end" className={classes.inputAdornment}>{`${currency}`}</InputAdornment>
				}}				
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
		updateUserCurrencies: (params) => dispatch(setUserCurrencies(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBlock);
