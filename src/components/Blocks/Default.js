import React from "react";
import { Paper } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const DefaultBlock = props => {
	const { block } = props
  return (
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
							>
								{block.content}						
							</Paper>
						)
					}
			}
		</Draggable>
  );
};

export default DefaultBlock
