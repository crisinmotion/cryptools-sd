import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField, Typography } from "@material-ui/core";
import { setUserCrypto } from "../../store/actions/settings.actions";
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
		updateUserCrypto,
		cryptoCoin,
		cryptoId,
		style,
		color
	} = props
	const classes = useStyles();

	const defaultConfig = {}

	const [config, setConfig] = useState(defaultConfig)
	useEffect(()=>{
		if(settings && !settings.userCrypto) {
			if(config.length === 0 && config[cryptoCoin]) {
				setConfig((prevState) => {return {...prevState, [cryptoCoin]: { value: '' }}})
			}
			updateUserCrypto(config)			
		}else{
			setConfig(settings.userCrypto)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {		
		
		updateUserCrypto(config)
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config, updateUserCrypto ])



  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			<TextField 				
				// variant={'outlined'}				
				size={'small'}
				className={classes.textFields}
				onChange={(e)=> {
					const value = e.target.value;
					setConfig((prevState) => { return {...prevState, [cryptoCoin]: { value: value}}})
				}}
				value={config && config[cryptoCoin] && config[cryptoCoin].value ? config[cryptoCoin].value : ''}
				defaultValue={0}
				placeholder={0}				
				InputProps={{				
					className: classes.inputField,	
					style:{color: color},
					type:'number',
					endAdornment: <InputAdornment position="end" className={classes.inputAdornment}>{`${cryptoCoin}`}</InputAdornment>
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
		updateUserCrypto: (params) => dispatch(setUserCrypto(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBlock);
