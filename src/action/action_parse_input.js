import { getCodeResults } from './action_get_code_results';

export function parseInput(input) {
  return dispatch => {
    const indexOfFlag = input.indexOf('--');
    const searchFunction = input.slice(indexOfFlag + 2, indexOfFlag + 5);
    if (searchFunction === 'lib') {
      const searchInput = input.split('--lib').join('');
      console.log(searchInput);
    } else if (searchFunction === 'com') {
      console.log('comment route');
      //   const searchInput = input.split('--com').join('');
    } else if (searchFunction === 'fun') {
      console.log('function route');
      //   const searchInput = input.split('--fun').join('');
    } else {
      console.log('misc route');
      getCodeResults(input, dispatch);
    }
  };
}
