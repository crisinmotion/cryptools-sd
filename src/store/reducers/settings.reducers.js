import {  
  TOGGLEDRAWER,
	SETACTIVEMENU,
	SET_CONFIGURATIONS,
	SET_USER_CURRENCIES
} from "../constants/settings.constants";

const INITIAL_STATE = {
 isDrawerOpen: true,
 activeMenu: 'cryptoblades',
 userConfig: null,
 userCurrencies: {},
 appVersion: 'v1.0-beta.01'
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
		case SET_USER_CURRENCIES :
			return {
				...state,
				userCurrencies: {
					...state.userCurrencies,
					...action.params
				}
			}


    default:
      return state;
  }

};

export { SETTINGS_REDUCER };
