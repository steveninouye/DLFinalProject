export default function(state = [], action) {
  switch (action.type) {
    case 'GET_VIDEO_RESULTS':
      return action.payload.data.items;
    default:
      return state;
  }
}
