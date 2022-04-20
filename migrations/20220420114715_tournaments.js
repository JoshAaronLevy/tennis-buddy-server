exports.up = function (knex, Promise) {
    return knex.schema.createTable('tournaments', tournaments => {
        tournaments.increments();
        tournaments.string('name');
        tournaments.string('location');
        tournaments.string('category');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('tournaments');
};