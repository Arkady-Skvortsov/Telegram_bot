const { db } = require("../../db/db");

module.exports = class Controller {
  constructor(name) {
    this.name = name;
  }

  async response() {
    const get = await db.query("select img_path from $1", [this.name]);
  }
};
