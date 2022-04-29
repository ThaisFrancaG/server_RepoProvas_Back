import app from "./app.js";
import supertest from "supertest";
import "express-async-errors";

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
