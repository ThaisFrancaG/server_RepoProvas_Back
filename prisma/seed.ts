import { prisma } from "../src/../database.js";

async function main() {
  await prisma.users.create({
    data: {
      email: "teste@gmail.com",
      password: "meumemezin",
    },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
