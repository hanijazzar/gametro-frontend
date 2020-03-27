import { combineReducers } from 'redux';
import alert from './alert';
import game from './game';
import contact from './contact';
import subscribe from './subscribe';
import auth from './auth';





export default combineReducers({
  alert,
  game,
  contact,
  subscribe,
  auth
});