import { combineReducers } from 'redux';
import searchInput from './reducer_searchInput';
import test from './reducer_test';

const rootReducer = combineReducers({
  searchInput,
  codeSearchResults: test
});

export default rootReducer;
