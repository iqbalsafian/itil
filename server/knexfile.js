// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'itil',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'itil',
      user:     'iqbal',
      password: 'iqbal007'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
