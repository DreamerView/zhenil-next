const knex = require('knex')

const connectionDatabase = knex({
    client: 'sqlite',
    connection: {
        filename:"./db.sqlite3"
    },
    useNullAsDefault: true
});

module.exports = connectionDatabase;