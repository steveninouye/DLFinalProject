import { combineReducers } from 'redux';
import searchInput from './reducer_search_input';
import codeSearchResults from './reducer_get_code_results';
import videoSearchResults from './reducer_get_video_results';
import forumSearchResults from './reducer_get_forum_results';
import user from './reducer_user';

const rootReducer = combineReducers({
  searchInput,
  codeSearchResults,
  videoSearchResults,
  forumSearchResults,
  user
});

export default rootReducer;
