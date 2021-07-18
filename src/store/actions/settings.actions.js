import {
  TOGGLEDRAWER,
	SETACTIVEMENU,
	SET_CONFIGURATIONS,
	SET_USER_CURRENCIES,
	SET_USER_MATCHES,
	SET_UPDATE_STATUS,
	SET_FARM_SUMMARY
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
export const setUpdateStatus = (params) => {
  return {
    type: SET_UPDATE_STATUS,
    params
  };
}
export const setUserEarnings = (params) => {
  return {
    type: SET_FARM_SUMMARY,
    params
  };
}
