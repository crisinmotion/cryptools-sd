import React, { Fragment } from "react";
import { Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	root: {
    display: 'flex',		
		width: '100%',
		marginBottom: theme.spacing(2),		
	},
}))

const DefaultBlock = props => {
	const { block } = props
	const classes = useStyles()
  return (
		<Fragment>
			{ block &&
				<Draggable
					draggableId={block.id}
					index={props.index}
				>
					{
						(provided)=>{
								return (
									<Paper
										ref={provided.innerRef}
										{...props}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className={classes.root}
									>
										{block.content}
									</Paper>
								)
							}
					}
				</Draggable>
			}
		</Fragment>
  );
};

export default DefaultBlock
