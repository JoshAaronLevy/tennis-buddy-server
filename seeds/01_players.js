exports.seed = function (knex, Promise) {
  return knex('players').del()
    .then(function () {
      return knex('players').insert([
        {
          id: 1,
          first_name: 'Roger',
          last_name: 'Federer',
          gender: "male",
          nationality: 'Switzerland',
          birthdate: null,
          height: `6'1"`,
          handed: "right",
          retired: false
        }
      ]);
    }).then(() => knex.raw(`ALTER SEQUENCE players_id_seq RESTART WITH 2;`));
};