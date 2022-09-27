const knex = require('./knex');

const createTable = (e) => {
    knex.schema.hasTable(e).then(function(exists) {
        if (!exists) {
          return knex.schema.createTable(e, function(t) {
            t.increments('id').primary();
            t.string('lang', 10);
            t.text('name');
          });
        }
    });
}

const deleteTable = (e) => {
    knex.schema.hasTable(e).then(function(exists) {
        if (exists) {
          return knex.schema.dropTable(e)
        }
    });
}

const insertData = (e,s)=> {
    return knex(e).insert(s);
};

const selectData = (e,s)=> {
    return knex(e).select(s);
};

const deleteData = (e)=> {
    return knex('cars').where('id',e).del();
};
const updateData = (e,s)=> {
    return knex('cars').where('id',e).update(s);
};

module.exports = {
    createTable,
    deleteTable,
    insertData,
    selectData,
    deleteData,
    updateData
}