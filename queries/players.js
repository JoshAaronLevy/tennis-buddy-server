const database = require('../db-connection');

module.exports = {
    list() {
        return database('players').select();
    },
    read(id) {
        return database('players').select().where('id', id).first();
    },
    create(id) {
        return database('players')
            .insert()
            .where('id', id)
            .returning('*')
            .then(record => record[0]);
    },
    update(id) {
        return database('players')
            .update()
            .where('id', id)
            .returning('*')
            .then(record => record[0]);
    },
    delete(id) {
        return database('players').delete().where('id', id);
    }
};