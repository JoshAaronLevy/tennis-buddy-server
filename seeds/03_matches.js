exports.seed = function (knex, Promise) {
  return knex('matches').del()
    .then(function () {
      return knex('matches').insert([
        {
          id: 1,
          date: null,
          tournament: 'Australian Open'
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE matches_id_seq RESTART WITH 2;`));
};