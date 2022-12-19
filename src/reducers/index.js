import { combineReducers } from 'redux';
import shop from './master/shop';
import course from './master/course';

export const reducers = combineReducers({
  shop,
  course
});