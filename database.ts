import dotenv from "dotenv";
import pkg from "@prisma/client";

dotenv.config();
const { PrismaClient } = pkg;
export const prisma = new PrismaClient();

//o prisma é que eu uso no lugar de connection. E ai, no caso, pela forma como o prisma se organiza, ele já pega o database url direto pelo prisma.schema
