import React from "react";
import { Paper } from "@material-ui/core";
import { Droppable } from "react-beautiful-dnd";
import DefaultBlock from "../Blocks/Default";




const DefaultColumn = props => {
  return (
		<Paper {...props}>
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
