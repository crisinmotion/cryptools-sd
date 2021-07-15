import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd';
import DefaultColumn from "../components/Columns/Default";
import DefaultWrapper from "../components/Wrappers/Default";
import { Grid } from "@material-ui/core";
import { setBlocks, updateColumnBlocks } from "../store/actions/boards.actions";
import WalletBlock from "../components/Blocks/WalletBlock";
import DefaultColoredBlock from "../components/Blocks/DefaultColoredBlock";


const Portal = props => {
	const { 
		boards,
		updateBlocks,
		userConfig,
		updateColumnBlocks
	 } = props

			
		const BLOCK_OBJECT = {
			blocks: {
				'SkillPhp': {id: 'SkillPhp', content: <DefaultColoredBlock title={'SKILL in PHP'} value={`${userConfig && userConfig.localCurrency.toUpperCase()} 269.00`} color={'#B45F06'} style={{borderColor: '#B45F06', backgroundColor: '#FFF2CC'}}/>},
				'BNBBalance': {id: 'BNBBalance', content: <DefaultColoredBlock title={'BNB Balance'} value={'0.033'} color={'#8E7118'} style={{borderColor: '#8E7118', backgroundColor: '#FFF2CC'}}/>},
				'BNBBalancePHP': {id: 'BNBBalancePHP', content: <DefaultColoredBlock title={'BNB Balance in PHP'} value={`${userConfig && userConfig.localCurrency.toUpperCase()} 628.25`} color={'#6AA84F'} style={{borderColor: '#6AA84F', backgroundColor: '#D9EAD3'}}/>},
				'GasFeesTxns': {id: 'GasFeesTxns', content: <DefaultColoredBlock title={'Total CB Gas Fees (Last 1k Txns)'} value={'BNB 0.8'} color={'#A64D79'} style={{borderColor: '#A64D79', backgroundColor: '#EAD1DC'}}/>},
				'WalletConfig': {id: 'WalletConfig', content: <WalletBlock/>},		
			},		 
		}

	 useEffect(()=>{
		const listAllBlocks = Object.keys(BLOCK_OBJECT.blocks);
		if(boards && boards.columns && !boards.columns['column-1'].blockIds.length ) {
			const col = boards.columns['column-1']
			requestSetBlock({
				...col, 
				blockIds: listAllBlocks
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	 },[])

	const handleDragEnd = result => {
		const { destination, source } = result

		if(!destination) {
			return
		}

		if(
			destination.droppableId === source.droppableId && 
			destination.index === source.index
		){
			return
		}

		const start = boards.columns[source.droppableId]
		const finish = boards.columns[destination.droppableId]
		

		if(start === finish) {
			const newBlockIds = Array.from(start.blockIds)
			let plucked = newBlockIds.splice(source.index, 1)[0]; // cut the element at index 'from'
			newBlockIds.splice(destination.index, 0, plucked); 
			
			const newColumn = {
				...start,
				blockIds: newBlockIds
			}
			requestSetBlock(newColumn)
			return
		}

		//? If dropping to a different column
		const startBlockIds = Array.from(start.blockIds)
		let pluckedStart = startBlockIds.splice(source.index, 1)[0];
		 
		const newStartColumn = {
			...start,
			blockIds: startBlockIds
		}

		const finishBlockIds = Array.from(finish.blockIds)
		finishBlockIds.splice(destination.index,0, pluckedStart)
		
		const newFinishColumn = {
			...finish,
			blockIds: finishBlockIds
		}

		const updatedColumns = {
			[newStartColumn.id] : newStartColumn,
			[newFinishColumn.id] : newFinishColumn
		}

		requestUpdateColumnBlocks(updatedColumns)		
	}

	const requestSetBlock = (params) => {
		updateBlocks(params)
	}
	
	const requestUpdateColumnBlocks = (params) => {
		updateColumnBlocks(params)
	}
	
  return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<DefaultWrapper>
				<Grid container spacing={1}>
				{
					boards && boards.columnOrder && boards.columnOrder.map((columnId) => {
						const column = boards.columns[columnId]
						const blocks = column.blockIds.map(blockId => BLOCK_OBJECT.blocks[blockId])
						return <Grid item xs={12} md={6} lg={4} key={column.id}><DefaultColumn column={column} blocks={blocks}/></Grid>
					})
				}
				</Grid>
				
			</DefaultWrapper>
		</DragDropContext>
  );
};

const mapStateToProps = state => {
  return {
		boards: state.boards,
		userConfig: state.settings.userConfig
  };
};

const mapDispatchToProps = dispatch => {
  return {
		updateBlocks: (params) => dispatch(setBlocks(params)),
		updateColumnBlocks: (params) => dispatch(updateColumnBlocks(params))
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal);
