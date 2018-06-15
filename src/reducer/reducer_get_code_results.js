export default function(state = [], action) {
  switch (action.type) {
    case 'GET_CODE_RESULTS':
      return action.payload.data;
    default:
      return state;
  }
}
