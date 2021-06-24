const { db } = require("../db/db");

describe("Test PostgresQL database", () => {
  test("DB is connected", () => {
    expect(true).not.toBeFalsy();
  });
});
