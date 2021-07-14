import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#FFF2CC',
		borderTop: 'solid 8px #8E7118'
	},
}))


const BNBBalance = props => {
	const classes = useStyles();
  return (
		<div {...props} className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>Your BNB Balance</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: '#8E7118', fontWeight: 500}} gutterBottom>0.033</Typography>
    </div>
  );
};

export default BNBBalance
