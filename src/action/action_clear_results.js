export function clearResults() {
  return dispatch => {
    const arr = { data: [] };
    console.log('clearing');
    return dispatch({
      type: 'GET_CODE_RESULTS',
      payload: arr
    });
  };
}
