exports.up = function (knex, Promise) {
  return knex.schema.createTable('matches', matches => {
      matches.increments();
      matches.datetime('date');
      matches.string('tournament');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('matches');
};