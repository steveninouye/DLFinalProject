const user_code_rating = () => {
  return knex('user_code_rating')
    .del()
    .then(() => {
      return knex('user_code_rating').insert([
        {
          data: 'data'
        }
      ]);
    });
};

module.export = user_code_rating;
