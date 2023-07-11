import request from "supertest";
import { app } from "../app";

describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api").expect(200);
  });

  it("should return a sentence starting with Welcome", (done) => {
    return request(app)
      .get("/api")
      .end(function (err, res) {
        expect(res.text).toContain("Welcome");
        done();
      });
  });
});
