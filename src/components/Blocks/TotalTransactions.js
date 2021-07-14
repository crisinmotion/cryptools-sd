import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#EAD1DC',
		borderTop: 'solid 8px #A64D79'
	},
}))


const TotalTransactions = props => {
	const classes = useStyles();
  return (
		<div {...props} className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>Total CB Gas Fees (last 1000 transactions)</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: '#A64D79', fontWeight: 500}} gutterBottom>BNB 0.18</Typography>
    </div>
  );
};

export default TotalTransactions
