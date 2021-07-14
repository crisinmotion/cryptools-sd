import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	root: {
    display: 'flex',
		padding: theme.spacing(1)
	},
}))

const DefaultWrapper = props => {
	const classes = useStyles();
	const { children } = props
	
  return (
    <div className={classes.root}>			
			{children}
    </div>
  );
};

export default DefaultWrapper
