import {combineReducers} from 'redux';
import sampleReducer from './users';

const rootReducer = combineReducers({
  smaple: sampleReducer
})

export default rootReducer;
