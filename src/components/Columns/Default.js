import React from "react";
import { Paper } from "@material-ui/core";
import { Droppable } from "react-beautiful-dnd";
import DefaultBlock from "../Blocks/Default";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	root: {
    display: 'flex',
		padding: theme.spacing(2,2,0,2),
		width: '100%',
		height: '100%',
		'& > div' : {
			width: '100%'
		},
	},
}))


const DefaultColumn = props => {
	const classes = useStyles();
  return (
		<Paper {...props} className={classes.root} elevation={0}>
			<Droppable droppableId={props.column.id}>
				{
					(provided)=>(
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{props.blocks.map((block, index) => <DefaultBlock key={block.id} block={block} index={index} />)}
							{provided.placeholder}
						</div>
					)
				}
			</Droppable>  
    </Paper>
  );
};

export default DefaultColumn
