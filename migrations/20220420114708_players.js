exports.up = function (knex, Promise) {
    return knex.schema.createTable('players', players => {
        players.increments();
        players.string('first_name');
        players.string('last_name');
        players.string('gender');
        players.string('nationality');
        players.date('birthdate');
        players.string('height');
        players.string('handed');
        players.boolean('retired');
        players.boolean('retired');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('players');
};