import { combineReducers } from 'redux';
import { generalStates } from './general';
import { entities } from './entities';
 
export const reducers = combineReducers({
  generalStates,
  entities
});