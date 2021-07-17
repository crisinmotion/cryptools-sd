import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import EventIcon from '@material-ui/icons/Event';
import { EmojiEvents, MonetizationOn, SentimentDissatisfied, SportsEsports } from "@material-ui/icons";
import moment from "moment";
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
	root: {    	
		width: '100%',
		padding: theme.spacing(2),
		textAlign: 'center',
		background: '#E2E3E3',
		borderTop: 'solid 8px #999999', 
		'& .MuiDataGrid-root .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted) .MuiDataGrid-sortIcon' : {
			opacity: '0.15 !important'
		},
		'& .MuiDataGrid-root' : {
			backgroundColor: theme.palette.common.white
		}
	},
	dataRows: {
		textAlign: 'center !important',
		paddingLeft: theme.spacing(1)
	}
}))


const MatchHistory = props => {
	const {
		title='Block Title',
		dataSet,		
		style={}
	} = props

	const classes = useStyles();
	const columns = [		
		{ field: 'dateTime', headerName: <IconButton><EventIcon fontSize={'small'} style={{color: '#39A2DB'}}/></IconButton>, type: 'date', cellClassName: classes.dataRows },
		{ field: 'win', headerName: <IconButton><EmojiEvents fontSize={'small'} style={{color: 'gold'}}/></IconButton>, type: 'number', cellClassName: classes.dataRows },
		{ field: 'loss', headerName: <IconButton><SentimentDissatisfied fontSize={'small'} style={{color: 'red'}}/></IconButton>, type: 'number', cellClassName: classes.dataRows },
		{ field: 'remaining', headerName: <IconButton><SportsEsports fontSize={'small'} style={{color: '#F5A962'}}/></IconButton>, type: 'number', cellClassName: classes.dataRows },
		{ field: 'rewardsGained', headerName: <IconButton><MonetizationOn fontSize={'small'} style={{color: '#01937C'}}/></IconButton>, type: 'number', cellClassName: classes.dataRows },		
	];

	console.log(Object.keys(dataSet), 'DATASET')

	const historyDays = dataSet && Object.keys(dataSet).length > 0 && Object.keys(dataSet).map((key, i)=> { return {...dataSet[key], id: dataSet[key].dateTime, dateTime: moment(dataSet[key].dateTime).format("MM/DD/YYYY")} })

	console.log(historyDays, 'HISTORY')
	
  return (
		<div style={ style } className={classes.root}>
			<Typography variant={'button'} display={'block'} gutterBottom>{title}</Typography>
			
			{ historyDays && 
				<div style={{ height: 364, width: '100%'}}>
					<DataGrid rows={historyDays} columns={columns} pageSize={7} disableColumnMenu={true} align={'center'}/>
				</div>
			}
			{ !historyDays &&
					<Alert severity="info">No recorded matches yet. Use the Daily Match Block and save new match record.</Alert>

			}
    </div>
  );
};

export default MatchHistory
