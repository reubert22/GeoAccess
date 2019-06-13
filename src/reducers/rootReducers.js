import { combineReducers } from 'redux';
import { placesReducer } from './places';

const rootReducers = combineReducers({
  places: placesReducer
});

export default rootReducers;
