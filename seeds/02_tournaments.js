exports.seed = function (knex, Promise) {
    return knex('tournaments').del()
        .then(function () {
            return knex('tournaments').insert([
                {
                    id: 1,
                    name: 'Australian Open',
                    location: 'Melbourne, Australia',
                    category: 'Grand Slam'
                }
            ]);
        }).then(() => knex.raw(`ALTER SEQUENCE tournaments_id_seq RESTART WITH 2;`));
};