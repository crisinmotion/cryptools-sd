import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#E2E3E3',
		borderTop: 'solid 8px #999999'
	},
}))


const BNBBalance = props => {
	const {
		title='Block Title',
		data,
		color,
		style={}
	} = props

	const classes = useStyles();
  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: color || '#999999', fontWeight: 500}} gutterBottom>{(data && data.balance) || 0}</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: color || '#999999', fontWeight: 500}} gutterBottom>&#8776;&nbsp;{(data && data.converted) || 0}</Typography>
    </div>
  );
};

export default BNBBalance
