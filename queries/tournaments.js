const database = require('../db-connection');

module.exports = {
    list() {
        return database('tournaments').select();
    },
    read(id) {
        return database('tournaments').select().where('id', id).first();
    },
    create(id) {
        return database('tournaments')
            .insert()
            .where('id', id)
            .returning('*')
            .then(record => record[0]);
    },
    update(id) {
        return database('tournaments')
            .update()
            .where('id', id)
            .returning('*')
            .then(record => record[0]);
    },
    delete(id) {
        return database('tournaments').delete().where('id', id);
    }
};