const faker = require('faker');
const bcrypt = require('bcrypt');

var password_digest = bcrypt.hashSync('password', 10);

var createUsers = (knex, id) => {
  return knex('users').insert({
    email: faker.internet.email(),
    password_digest
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      let records = [];

      for (let i = 0; i < 50; i++) {
        records.push(createUsers(knex, i))
      }

      return Promise.all(records);
    });
};
