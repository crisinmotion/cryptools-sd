import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, InputAdornment, TextField, Typography } from "@material-ui/core";
import moment from "moment";
import { setUserMatches } from "../../store/actions/settings.actions";

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


const MatchCounterBlock = props => {
	const {
		settings,
		title,		
		style,
		color,
		updateUserMatches
	} = props
	const classes = useStyles();
	const theme = useTheme();

	const defaultConfig = {
		userMatches: {

		},
		todayMatches: {

		}
	}

	const defaultMatch = {
		win: 0, 
		loss: 0, 
		match:28,
		remaining:0,
		rewardGained:0,
		dateTime: null,		
	}

	const [config, setConfig] = useState(defaultConfig)
	useEffect(()=>{
		const getFormattedDay = moment().format("MMM DD YYYY") ;		
		if(settings && Object.keys(settings.todayMatches).length === 0)		{
			setConfig((prevState) => {return {...prevState, todayMatches: defaultMatch }})	
		}else{
			setConfig((prevState) => {return {...prevState, todayMatches: settings.todayMatches }})	
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	const [remainingMatches, setRemainingMatches] = useState(0)

	useEffect(() => {
		
		if(config && Object.keys(config.todayMatches).length > 0) {
			 const params = {
				 target: 'todaysMatches',
				 todayMatches: config.todayMatches
			 }

			 updateUserMatches(params)

			 setRemainingMatches(parseInt((config.todayMatches.match || 0) - ((config.todayMatches.win || 0) + (config.todayMatches.loss || 0))))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config])



  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			{ Object.keys(config.todayMatches).length > 0 && settings && Object.keys(settings.todayMatches).length > 0 &&
				<Grid container spacing={2}>
					<Grid item xs={6}>
						
							<TextField 				
								variant={'outlined'}				
								size={'small'}
								className={classes.textFields}
								onChange={(e)=> {
									const value = parseInt(e.target.value);
									setConfig((prevState) => { return {...prevState, todayMatches: { ...prevState.todayMatches, win: value }}})									
								}}
								value={config && config.todayMatches && config.todayMatches.win ? config.todayMatches.win : '' }				
								placeholder={'Wins'}	
								InputProps={{				
									className: classes.inputField,	
									style:{color: color},
									type:'number',									
								}}				
							/>
						
						<TextField 				
							variant={'outlined'}				
							size={'small'}
							className={classes.textFields}
							onChange={(e)=> {
								const value = parseInt(e.target.value);
								setConfig((prevState) => { return {...prevState, todayMatches: { ...prevState.todayMatches, loss: value }}})
							}}
							value={config && config.todayMatches && config.todayMatches.loss ? config.todayMatches.loss : '' }	
							style={{marginBottom:0}}
							placeholder={'Losses'}				
							InputProps={{				
								className: classes.inputField,	
								style:{color: color},
								type:'number',								
							}}				
						/>
					</Grid>
					<Grid item xs={6}>
							<TextField 				
								variant={'outlined'}				
								size={'small'}
								className={classes.textFields}												
								value={remainingMatches > 0 ? remainingMatches : 0}								
								label={'Remaining Matches'}
								InputProps={{				
									className: classes.inputField,									
								}}
								disabled		
							/>
							<TextField 				
								variant={'outlined'}				
								size={'small'}
								className={classes.textFields}								
								onChange={(e)=> {
									const value = parseInt(e.target.value);
									setConfig((prevState) => { return {...prevState, todayMatches: { ...prevState.todayMatches, match: value }}})
								}}
								value={config && config.todayMatches && config.todayMatches.match ? config.todayMatches.match : '' }									
								InputProps={{				
									className: classes.inputField,	
									style:{color: color},
									type:'number',
									startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>M</InputAdornment>,
								}}				
							/>
							
							
					</Grid>
				</Grid>
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
		updateUserMatches: params => dispatch(setUserMatches(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchCounterBlock);
