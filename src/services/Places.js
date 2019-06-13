import { motailsStore } from '../localStorage/GeoAccessStore';
import { initialPLaces } from '../utils/initialPlaces';
import * as actions from '../actions/places';

// export function savePlaces(places) {
// }

export const savePlaces = () => async () => {
  try {
    const firstAccess = await motailsStore.getItem('@first_access');
    if (firstAccess === null) {
      motailsStore.saveItem('@first_access', true);
      motailsStore.saveItem('@places', initialPLaces);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPlaces = () => async dispatch => {
  try {
    const places = await motailsStore.getItem('@places');
    dispatch(actions.successSavePlaces(JSON.parse(places)));
  } catch (error) {
    console.log(error);
  }
};
