
exports.up = function(knex, Promise) {
  return knex.schema.createTable('issues', (table) => {
    table.increments();
    table.string('issue_no').notNullable().unique();
    table.integer('opened_by').notNullable();
    table.integer('user_id').notNullable();
    table.integer('cleared_by');
    table.integer('closed_by');
    table.dateTime('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('issues');
};
