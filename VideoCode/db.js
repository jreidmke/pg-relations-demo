/** Database client for pg-relationships-demo. */

const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:postgres4@localhost/pg"
});

client.connect();

module.exports = client;
