import {  
  TOGGLEDRAWER,
	SETACTIVEMENU,
	SET_CONFIGURATIONS,
	SET_USER_CURRENCIES,
	SET_USER_MATCHES,
	SET_UPDATE_STATUS,
	SET_FARM_SUMMARY
} from "../constants/settings.constants";

const INITIAL_STATE = { 
 isDrawerOpen: false,
 activeMenu: 'cryptoblades',
 userConfig: null,
 userCurrencies: {}, 
 userMatches: {},
 todayMatches: {},
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
		case SET_FARM_SUMMARY :
			return {
				...state,		
				...action.params
		
			}
		case SET_UPDATE_STATUS :			
			return {
				...state,
				...action.params				
			}
		case SET_USER_MATCHES :				
				if(action.params.target === 'userMatches') {
					return {
						...state,
						userMatches: {
							...state.userMatches,
							...action.params.userMatches
						}
					}		
				}else{
					return {
						...state,
						todayMatches: {
							...state.todayMatches,
							...action.params.todayMatches
						}
					}
				}


    default:
      return state;
  }

};

export { SETTINGS_REDUCER };
