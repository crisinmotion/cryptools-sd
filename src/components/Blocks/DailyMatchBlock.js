import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputAdornment, TextField, Typography } from "@material-ui/core";
import moment from "moment";
import { setUserMatches } from "../../store/actions/settings.actions";
import { AddCircle, SaveRounded } from "@material-ui/icons";
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


const MatchCounterBlock = props => {
	const {
		settings,
		title,		
		style,
		color,
		exchangeRate,
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
		rewardsGained:0,
		dateTime: null,		
	}

	const [config, setConfig] = useState(defaultConfig)
	const [confirmSave, setConfirmSave] = useState(false)
	const [convertedRate, setConvertedRate] = useState(0)
	const getFormattedDay = moment().format("MMM DD YYYY") ;
	
	useEffect(()=>{
				
		if(settings && settings.todayMatches && Object.keys(settings.todayMatches).length === 0)		{
			setConfig((prevState) => {return {...prevState, todayMatches: defaultMatch }})	
		}else{
			setConfig((prevState) => {return {...prevState, todayMatches: settings.todayMatches }})	
		}

		console.log(exchangeRate, 'Rate')

		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	useEffect(() => {
		if(settings && settings.todayMatches && exchangeRate) {
			setConvertedRate(exchangeRate * ((settings.todayMatches && settings.todayMatches.rewardsGained) || 0))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [exchangeRate])

	const [remainingMatches, setRemainingMatches] = useState(0)
	const [matchReward, setMatchReward] = useState(0)

	useEffect(() => {
		
		if(config && config.todayMatches && Object.keys(config.todayMatches).length > 0) {
			 const params = {
				 target: 'todaysMatches',
				 todayMatches: config.todayMatches
			 }

			 updateUserMatches(params)

			 setRemainingMatches(parseInt((config.todayMatches.match || 0) - ((config.todayMatches.win || 0) + (config.todayMatches.loss || 0))))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [config])

	useEffect(()=>{
		setConfig((prevState) => {return {...prevState, todayMatches: {...prevState.todayMatches, remaining: remainingMatches} }})	
	},[remainingMatches])

	const handleSaveTodayMatches = () => {
		const params = {
			target: 'userMatches',
			userMatches: {
				[getFormattedDay]: {...config.todayMatches, dateTime: Date.now() }
			}
		}

		updateUserMatches(params)
		setConfirmSave(!confirmSave)
	}



  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			{ config.todayMatches && Object.keys(config.todayMatches).length > 0 && settings && settings.todayMatches && Object.keys(settings.todayMatches).length > 0 &&
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
								readOnly		
							/>
							<TextField 				
								variant={'outlined'}				
								size={'small'}
								className={classes.textFields}
								label={'Win Reward'}						
								onChange={(e)=> {
									const value = e.target.value;
									setMatchReward(value)
								}}
								value={ matchReward }									
								InputProps={{				
									className: classes.inputField,	
									style:{color: color},
									// type:'number',
									endAdornment: <InputAdornment position="end" className={classes.inputAdornment}										
									><IconButton
										onClick={()=> {											
											if(matchReward > 0){
												setConfig((prevState) => { return {...prevState, todayMatches: { ...prevState.todayMatches, rewardsGained: parseFloat(numeral(settings.todayMatches.rewardsGained) + (numeral(matchReward) || 0)) }}})
												setMatchReward(0)
											}
										}}
									><AddCircle/></IconButton></InputAdornment>,
								}}				
							/>
							
							
					</Grid>
				</Grid>
			}
			<Container style={{display: 'flex', justifyContent: 'space-between', padding: 0, alignItems:'center'}}>
				<Button variant={'contained'} disableElevation onClick={()=>{
					setConfig((prevState) => {return {...prevState, todayMatches: defaultMatch }})	
				}}>Reset</Button>
				<div>
					<Typography variant={'caption'}>{settings && settings.userConfig && settings.userConfig.farmingCurrency + ' '}Gained Today</Typography>
					<Typography variant={'h4'}>{numeral((config.todayMatches && config.todayMatches.rewardsGained) || 0).format("0,0.0000")}</Typography>
					{settings && settings.userConfig && <Typography variant={'caption'} component={'span'}>&#8776; {settings.userConfig.localCurrency} {numeral(convertedRate || 0).format("0,0.00")} <span style={{color: 'transparent'}}>l</span></Typography>}
				</div>
				<Button variant={'contained'} color={'primary'} disableElevation onClick={()=> setConfirmSave(!confirmSave)}><SaveRounded/></Button>
			</Container>
			
			<Dialog
        open={confirmSave}
        onClose={()=> setConfirmSave(!confirmSave)}
        aria-labelledby="confirm-save"
        aria-describedby="confirm-save-match"
      >
        <DialogTitle id="confirm-save">{"Yey! You are done for the day!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-save-match">
            {"This will save your today's match and you can view it later in your match history (Coming Soon Feature). You can still edit and save multiple times today. Past records will no longer be editable to keep the integrity of the matches. "}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{display:'flex', justifyContent: 'space-between', padding: theme.spacing(2)}} >
          <Button onClick={()=> setConfirmSave(!confirmSave)} color="default">
            Cancel
          </Button>
          <Button onClick={handleSaveTodayMatches} variant={'contained'} color="primary" disableElevation disableFocusRipple>
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
		updateUserMatches: params => dispatch(setUserMatches(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchCounterBlock);
