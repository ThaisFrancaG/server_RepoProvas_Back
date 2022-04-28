import app from "../src/app";
import { prisma } from "../database.js";
import supertest from "supertest";

describe("POST /sign-up", () => {
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
  });

  it("dados os dados de usuário para cadastro, e supondo que esses dados estejam corretos, deve retornar status 201", async () => {
    const bodyOk = {
      email: "thaisteste@gmail.com",
      password: "123456",
      passwordCheck: "123456",
    };

    const firstLogin = await supertest(app).post("/sign-up").send(bodyOk);
    const repeatedEmail = await supertest(app).post("/sign-up").send(bodyOk);
    expect(firstLogin.status).toEqual(201);
    expect(repeatedEmail.status).toEqual(409);
  });

  it("dados os dados de usuário para cadastro, e supondo que esses dados estejam corretos, deve retornar status 201", async () => {
    const bodyOk = {
      email: "thaisteste@gmail.com",
      password: "123456",
      passwordCheck: "123456",
    };
    const bodyWrongPassword = {
      email: "thaisteste@gmail.com",
      password: "123456",
      passwordCheck: "123455",
    };
    const bodyFormat = {};

    const firstLogin = await supertest(app).post("/sign-up").send(bodyOk);
    const repeatedEmail = await supertest(app).post("/sign-up").send(bodyOk);
    const wrongPassword = await supertest(app)
      .post("/sign-up")
      .send(bodyWrongPassword);
    const wrongFormat = await supertest(app).post("/sign-up").send(bodyFormat);

    expect(firstLogin.status).toEqual(201);
    expect(repeatedEmail.status).toEqual(409);
  });

  it("senha incorreta", async () => {
    const bodyWrongPassword = {
      email: "thaisteste@gmail.com",
      password: "123456",
      passwordCheck: "123455",
    };

    const wrongPassword = await supertest(app)
      .post("/sign-up")
      .send(bodyWrongPassword);
    expect(wrongPassword.status).toEqual(409);
  });

  it("body vazio", async () => {
    const bodyVazio = {};

    const wrongPassword = await supertest(app).post("/sign-up").send(bodyVazio);
    expect(wrongPassword.status).toEqual(422);
  });
});

// describe("POST /sign-in");
