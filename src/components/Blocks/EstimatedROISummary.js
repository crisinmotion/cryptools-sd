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


const EstimatedROISummary = props => {
	const {
		title='Block Title',
		title2='',
		data,
		color,
		style={}
	} = props

	const classes = useStyles();
  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: data.roigasfee > 0 ? "#6AA84F" : color || '#999999', fontWeight: 500}} gutterBottom>{(data && data.roigasformatted) || 0}</Typography>
			<Typography variant={'button'} display={'block'} gutterBottom>{title2}</Typography>
			<Typography variant={'h3'} display={'block'} style={{color: data.roigascapsum > 0 ? "#6AA84F" : color || '#999999', fontWeight: 500}} gutterBottom>{(data && data.roigascapsumformatted) || 0}</Typography>
    </div>
  );
};

export default EstimatedROISummary
