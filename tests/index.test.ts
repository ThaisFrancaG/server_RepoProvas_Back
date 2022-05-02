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

    const firstSignUp = await supertest(app).post("/sign-up").send(bodyOk);
    const repeatedEmail = await supertest(app).post("/sign-up").send(bodyOk);
    expect(firstSignUp.status).toEqual(201);
    expect(repeatedEmail.status).toEqual(409);
  });

  it("Check if the info has been sent to the Database", async () => {
    const body = {
      email: "thaisteste@gmail.com",
      password: "123456",
      passwordCheck: "123456",
    };
    await supertest(app).post("/sign-up").send(body);
    const checkSignUp = await prisma.users.findMany({
      where: { email: body.email },
    });
    expect(checkSignUp.length).toStrictEqual(1);
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

//theoretically, if the tests are made on the right order, there should already be a valid user to use.
describe("POST /sign-in", () => {
  beforeAll(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE sessions CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE;`;
  });
  afterAll(async () => {
    await prisma.$disconnect();
  });
  const bodySignUp = {
    email: "thaisteste@gmail.com",
    password: "123456",
    passwordCheck: "123456",
  };
  const bodySignIn = {
    email: "thaisteste@gmail.com",
    password: "123456",
  };

  const bodyWrongFormatOne = {};
  const bodyWrongFormatTwo = {
    emails: "thaisteste@gmail.com",
    passwords: "123456",
  };
  const bodyWrongEmail = {
    email: "wrongEmails@gmail.com",
    password: "123456",
  };
  const bodyWrongPassword = {
    email: "thaisteste@gmail.com",
    password: "wrongPassword",
  };

  it("First it will made a sign-up and the try to login with the sign-up info. Code chould be 200 and there should be a token being returned", async () => {
    await supertest(app).post("/sign-up").send(bodySignUp);
    const signIn = await supertest(app).post("/sign-in").send(bodySignIn);

    expect(signIn.status).toBe(200);
    expect(signIn.text).not.toBe(null);
    expect(signIn.text.length).toBeGreaterThan(0);
  });
  it("Will try to make a new login with an user that is already logged in", async () => {
    const newSignIn = await supertest(app).post("/sign-in").send(bodySignIn);
    expect(newSignIn.status).toBe(200);
  });
  it("Will check if when sent in a wrong format is sends up code 422", async () => {
    const emptySignIn = await supertest(app)
      .post("/sign-in")
      .send(bodyWrongFormatOne);
    const wrongFormatSignIn = await supertest(app)
      .post("/sign-in")
      .send(bodyWrongFormatTwo);

    expect(emptySignIn.status).toBe(422);
    expect(wrongFormatSignIn.status).toBe(422);
  });
  it("Will check the results for login with wrong user info", async () => {
    const badEmailSignIn = await supertest(app)
      .post("/sign-in")
      .send(bodyWrongEmail);
    const badPasswordSignIn = await supertest(app)
      .post("/sign-in")
      .send(bodyWrongPassword);

    expect(badEmailSignIn.status).toBe(404);
    expect(badPasswordSignIn.status).toBe(401);
  });
});
