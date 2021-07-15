import {  
  SET_BLOCKS,
	UPDATE_COLUMN_ORDER
} from "../constants/boards.constants";

const INITIAL_STATE = {
	columns: {
		"column-1": {
			id: "column-1",
			title: "",
			blockIds: []
		}
	},
	columnOrder: ['column-1']
};

const BOARDS_REDUCER = (state = INITIAL_STATE, action) => {			
  switch (action.type) {    
    case SET_BLOCKS:			
      return {
        ...state,
        columns: {
					...state.columns,
					[action.params.id]: action.params
				}
      };
    case UPDATE_COLUMN_ORDER:
      return {
        ...state,
        columnOrder: action.params
      };

    default:
      return state;
  }

};

export { BOARDS_REDUCER };
