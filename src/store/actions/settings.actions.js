import {
  TOGGLEDRAWER,
	SETACTIVEMENU,
	SET_CONFIGURATIONS
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
