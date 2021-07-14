import {  
  TOGGLEDRAWER
} from "../constants/settings.constants";

const INITIAL_STATE = {
 isDrawerOpen: true
};

const SETTINGS_REDUCER = (state = INITIAL_STATE, action) => {

  switch (action.type) {    

    case TOGGLEDRAWER:
      return {
        ...state,
        isDrawerOpen: action.params
      };

    default:
      return state;
  }

};

export { SETTINGS_REDUCER };
