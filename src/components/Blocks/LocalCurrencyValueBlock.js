import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#FFF2CC',
		borderTop: 'solid 8px #E69138',		
	},
}))


const LocalCurrencyValueBlock = props => {
	const classes = useStyles();
  return (
		<div {...props} className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>SKILL in PHP</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: '#B45F06', fontWeight: 500}} gutterBottom>₱ 268.00</Typography>
    </div>
  );
};

export default LocalCurrencyValueBlock
