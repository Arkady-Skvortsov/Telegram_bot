const { Pool, Client } = require("pg");

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "first_bot",
  password: "rambler557",
  port: 8080,
});

const c = db.connect(async () => {
  try {
    console.log("Bot connected to Database");
  } catch (error) {
    console.error(error);
  }
});

module.exports = db;
