import {
	SET_BLOCKS,
	UPDATE_COLUMN_ORDER
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
