import app from "../src/app";
import supertest from "supertest";

describe("POST /sign-up", () => {
  it("dados os dados de usuário para cadastro, e supondo que esses dados estejam corretos, deve retornar status 201", async () => {
    const body = {
      email: "thaisteste@gmail.com",
      password: "123456",
      passwordCheck: "123456",
    };

    const firstTry = await supertest(app).post("/sign-up").send(body);
    expect(firstTry.status).toEqual(201);
  });
});
