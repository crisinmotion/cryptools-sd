import {
	SET_BLOCKS,
	UPDATE_COLUMN_ORDER,
	UPDATE_COLUMN_BLOCKS
} from "../constants/boards.constants";

export const setBlocks = (params) => {		
  return {
    type: SET_BLOCKS,
    params
  };
}

export const updateColumnOrder = (params) => {
  return {
    type: UPDATE_COLUMN_ORDER,
    params
  };
}

export const updateColumnBlocks = (params) => {
  return {
    type: UPDATE_COLUMN_BLOCKS,
    params
  };
}
