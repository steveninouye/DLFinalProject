export default function(state = null, action) {
  switch (action.type) {
    case 'SEARCH_INPUT':
      return action.payload;
    default:
      return state;
  }
}
