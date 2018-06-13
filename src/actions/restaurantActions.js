import { FETCH_RESTAURANT, FETCH_MENU } from './types';
import { RESTAURANT_TOKEN, CLIENT_ID, MENU_TOKEN } from '../helpers/constants';

export const fetchRestaurant = fetchUrl => dispatch => {
  fetch(fetchUrl, {
    headers: new Headers({
      Authorization: `Bearer ${RESTAURANT_TOKEN}`,
      client_id: CLIENT_ID
    })
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_RESTAURANT,
        payload: data
      })
    );
};

export const fetchMenu = fetchUrl => dispatch => {
  fetch(fetchUrl, {
    headers: new Headers({
      Authorization: `Bearer ${MENU_TOKEN}`,
      client_id: CLIENT_ID
    })
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_MENU,
        payload: data
      })
    );
};
