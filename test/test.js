const request = require("supertest");
const app = require("../app");

describe("GET /test", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect("Test.", done);
  });
});
