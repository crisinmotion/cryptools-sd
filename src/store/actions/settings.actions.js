import {
  TOGGLEDRAWER,
	SETACTIVEMENU
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
