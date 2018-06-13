import { combineReducers } from 'redux';
import searchInput from './reducer_searchInput';
import codeSearchResults from './reducer_code_search_results';
import user from './reducer_user';

const rootReducer = combineReducers({
  searchInput,
  codeSearchResults,
  user
});

export default rootReducer;
