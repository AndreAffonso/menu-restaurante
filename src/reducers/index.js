import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';

export default combineReducers({
  posts: restaurantReducer
});
