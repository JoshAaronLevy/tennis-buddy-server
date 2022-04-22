const database = require('../db-connection');

module.exports = {
  list() {
    return database('matches').select();
  },
  read(id) {
    return database('matches').select().where('id', id).first();
  },
  create(id) {
    return database('matches')
      .insert()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  update(id) {
    return database('matches')
      .update()
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('matches').delete().where('id', id);
  }
};