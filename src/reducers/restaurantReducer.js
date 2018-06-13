import { FETCH_RESTAURANT, FETCH_MENU } from '../actions/types';

const initialState = {
  restaurant: [],
  restaurantMenu: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload
      };
    case FETCH_MENU:
      return {
        ...state,
        restaurantMenu: action.payload
      };
    default:
      return state;
  }
}
