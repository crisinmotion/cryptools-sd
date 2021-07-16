import {
  TOGGLEDRAWER,
	SETACTIVEMENU,
	SET_CONFIGURATIONS,
	SET_USER_CURRENCIES,
	SET_USER_MATCHES
} from "../constants/settings.constants";

export const toggleDrawer = (params) => {
  return {
    type: TOGGLEDRAWER,
    params
  };
}

export const setActiveMenu = (params) => {
  return {
    type: SETACTIVEMENU,
    params
  };
}

export const setConfigurations = (params) => {
  return {
    type: SET_CONFIGURATIONS,
    params
  };
}

export const setUserCurrencies = (params) => {
  return {
    type: SET_USER_CURRENCIES,
    params
  };
}

export const setUserMatches = (params) => {
  return {
    type: SET_USER_MATCHES,
    params
  };
}
