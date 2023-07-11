import request from "supertest";
import { app } from "../app";

describe("Error page", () => {
  it("should return 404 for not existing route", () => {
    return request(app).get("/").expect(404);
  });
});
