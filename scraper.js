function getRepoCode(url) {
  console.log(url);
  request(url, (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      let $ = cheerio.load(body);
      // checks if page is a file or a directory
      // if page is file
      if ($('#raw-url').attr('href')) {
        // add file to database
        // if page is not a file
      } else {
        let files_and_directories = $('.js-navigation-item>.content').text();
        // this is all the directories and files in an array
        files_and_directories = files_and_directories
          .split('\n')
          .map(e => e.trim())
          .filter(e => e.length > 0);
        // run the code again for each file or directory
        files_and_directories.forEach(e => {
          // create a shallow copy for url
          let nextUrl = url.slice();
          // add path to url
          nextUrl = `${nextUrl}/${e}`;
          // run function again over new url
          getRepoCode(nextUrl);
        });
      }
    }
  });
}
