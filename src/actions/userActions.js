import "@global/const"
import { LOGIN_SUCCESS } from "../global/const";

export function login(actions) {
  if (actions.type == LOGIN_SUCCESS) {
    return {
      type: LOGIN_SUCCESS,
      auth: actions.auth
    }
  }
}