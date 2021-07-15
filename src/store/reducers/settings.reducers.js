import {  
  TOGGLEDRAWER,
	SETACTIVEMENU,
	SET_CONFIGURATIONS
} from "../constants/settings.constants";

const INITIAL_STATE = {
 isDrawerOpen: true,
 activeMenu: 'cryptoblades',
 userConfig: null
};

const SETTINGS_REDUCER = (state = INITIAL_STATE, action) => {

  switch (action.type) {    

    case TOGGLEDRAWER:
      return {
        ...state,
        isDrawerOpen: action.params
      };
    case SETACTIVEMENU:
      return {
        ...state,
        activeMenu: action.params
      };

		case SET_CONFIGURATIONS: 
			return {
				...state,
				userConfig: action.params
			}

    default:
      return state;
  }

};

export { SETTINGS_REDUCER };
