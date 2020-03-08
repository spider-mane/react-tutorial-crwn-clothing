import { UAT } from "./user.types";

export const setCurrentUser = user => ({
  type: UAT.SET_CURRENT_USER,
  payload: user
});
