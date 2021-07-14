import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd';
import DefaultColumn from "../components/Columns/Default";
import DefaultWrapper from "../components/Wrappers/Default";
import { Typography } from "@material-ui/core";
import DefaultBlock from "../components/Blocks/Default";
import { setBlocks } from "../store/actions/boards.actions";

const Portal = props => {
	const { 
		boards,
		updateBlocks
	 } = props

	 useEffect(()=>{
		console.log('BOARDS', boards)
	 },[boards])

	 const [state, setstate] = useState({
		 blocks: {
			 'block-1': {id: 'block-1', content: 'Take out the garbage'},
			 'block-2': {id: 'block-2', content: 'Watch my favorite show'},
			 'block-3': {id: 'block-3', content: 'Charge my phone'},
			 'block-4': {id: 'block-4', content: 'Cook Dinner'},
		 },		 
	 })

	const handleDragEnd = result => {
		const { destination, source, draggableId } = result

		if(!destination) {
			return
		}

		if(
			destination.droppableId === source.droppableId && 
			destination.index === source.index
		){
			return
		}

		const column = boards.columns[source.droppableId]
		const newBlockIds = Array.from(column.blockIds)

		let plucked = newBlockIds.splice(source.index, 1) [0]; // cut the element at index 'from'
    newBlockIds.splice(destination.index, 0, plucked); 
		
		const newColumn = {
			...column,
			blockIds: newBlockIds
		}
		requestSetBlock(newColumn)
	}

	const requestSetBlock = (params) => {
		updateBlocks(params)
	}
	
  return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<DefaultWrapper>
				{
					boards && boards.columnOrder && boards.columnOrder.map((columnId) => {
						const column = boards.columns[columnId]
						const blocks = column.blockIds.map(blockId => state.blocks[blockId])
						return <DefaultColumn key={column.id} column={column} blocks={blocks}/>
					})
				}
			
			</DefaultWrapper>
		</DragDropContext>
  );
};

const mapStateToProps = state => {
  return {
		boards: state.boards 
  };
};

const mapDispatchToProps = dispatch => {
  return {
		updateBlocks: (params) => dispatch(setBlocks(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal);
