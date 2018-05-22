import { LOGIN_SUCCESS } from "../global/const";

let cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default function (state={}, action) {
  var newSate = cloneObject(state);
  switch ( action.type) {
    case LOGIN_SUCCESS:
      newSate.user = {
        loggedIn: true,
        username: action.auth.username,
        userpass: action.auth.userpass
      }
      return newSate;
    default:
      return newSate;
  }
}