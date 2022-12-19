import { combineReducers } from 'redux';
import shop from './master/shop';
import course from './master/course';
import testimonial from './master/testimonial';
import homebanner from './master/homebanner';

export const reducers = combineReducers({
  shop,
  course,
  testimonial,
  homebanner
});