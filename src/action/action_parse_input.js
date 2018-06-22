import {
  getCodeResults,
  getLibraryResults,
  getRepoResults,
  getFileResults
} from './action_get_code_results';

export function parseInput(input) {
  return dispatch => {
    const indexOfFlag = input.indexOf('--');
    const searchFunction = input.slice(indexOfFlag + 2, indexOfFlag + 5);
    if (searchFunction === 'lib') {
      if (input.indexOf('--lib-repo') !== -1) {
        const searchInput = input
          .split('--lib-repo')
          .join('')
          .trim();
        getRepoResults(searchInput, dispatch);
      } else if (input.indexOf('--lib-file') !== -1) {
        const searchInput = input
          .split('--lib-file')
          .join('')
          .trim();
        getFileResults(searchInput, dispatch);
      } else {
        const searchInput = input
          .split('--lib')
          .join('')
          .trim();
        getLibraryResults(searchInput, dispatch);
      }
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
