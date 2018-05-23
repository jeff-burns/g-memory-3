const knex = require("./database-connection");

module.exports = {
  list() {
    return knex("games");
  },
  read(id) {
    return knex("games")
      .select()
      .where("id", id)
      .first();
  },
  create(resolution) {
    return knex("games")
      .insert(resolution)
      .returning("*")
      .then(record => record[0]);
  },
  update(id, resolution) {
    return knex("games")
      .update(resolution)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
  },
  delete(id) {
    return knex("games")
      .delete()
      .where("id", id);
  }
};
