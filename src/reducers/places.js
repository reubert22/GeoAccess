//@flow
import * as types from '../types/types';

const initialState = {
  places: []
};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_SAVE_PLACES:
      return {
        ...state,
        places: action.places
      };
    default:
      return state;
  }
};
