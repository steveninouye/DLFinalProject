export default function(state = [], action) {
  switch (action.type) {
    case 'GET_SEARCH_RESULTS':
      return action.payload.data;
    default:
      return state;
  }
}
