exports.up = function (knex, Promise) {
    return knex.schema.createTable('players', players => {
        players.increments();
        players.string('first_name');
        players.string('last_name');
        players.string('nationality');
        players.date('birthdate');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('players');
};