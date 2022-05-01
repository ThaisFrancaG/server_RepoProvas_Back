import app from "../src/app";
import { prisma } from "../database.js";
import supertest from "supertest";

describe("GET/teachers", () => {
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE sessions CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
  });
  afterAll(async () => {
    await prisma.$disconnect();
  });
  it("Checking up seeding", async () => {
    const teacherList = await supertest(app).get("/teachers");
    expect(teacherList.status).toBe(200);
  });
});

describe("POST /sign-up", () => {
  beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE sessions CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
  });
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Send complete data for sign-up, and expects that a new user is created and that a duplicated is supressed with an error return", async () => {
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

  it("Send complete data for sign-up, however with a wrong password check", async () => {
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

  it("Send data incorrectly, in order to be get by the Joi validation", async () => {
    const body = {};
    const invalidFormat = await supertest(app).post("/sign-up").send(body);
    expect(invalidFormat.status).toEqual(422);
  });
});
