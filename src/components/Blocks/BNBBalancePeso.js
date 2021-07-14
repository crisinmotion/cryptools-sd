import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#D9EAD3',
		borderTop: 'solid 8px #6AA84F'
	},
}))


const BNBBalancePeso = props => {
	const classes = useStyles();
  return (
		<div {...props} className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>BNB Balance in PHP</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: '#6AA84F', fontWeight: 500}} gutterBottom>₱ 628.25</Typography>
    </div>
  );
};

export default BNBBalancePeso
