import {
  TOGGLEDRAWER
} from "../constants/settings.constants";

export const toggleDrawer = (params) => {
  return {
    type: TOGGLEDRAWER,
    params
  };
}
