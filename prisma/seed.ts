import { prisma } from "../src/../database.js";

async function main() {
  await prisma.teachers.upsert({
    where: { name: "Ana" },
    update: {},
    create: {
      name: "Ana",
    },
  });
  await prisma.teachers.upsert({
    where: { name: "Leandro" },
    update: {},
    create: {
      name: "Leandro",
    },
  });
  await prisma.teachers.upsert({
    where: { name: "Marina" },
    update: {},
    create: {
      name: "Marina",
    },
  });

  await prisma.terms.upsert({
    where: { number: "1" },
    update: {},
    create: {
      number: "1",
    },
  });

  await prisma.terms.upsert({
    where: { number: "2" },
    update: {},
    create: {
      number: "2",
    },
  });

  await prisma.terms.upsert({
    where: { number: "1" },
    update: {},
    create: {
      number: "2",
    },
  });

  await prisma.terms.upsert({
    where: { number: "1" },
    update: {},
    create: {
      number: "2",
    },
  });

  await prisma.disciplines.upsert({
    where: { name: "Direito Administrativo" },
    update: {},
    create: {
      name: "Direito Administrativo",
      termId: 1,
    },
  });

  await prisma.disciplines.upsert({
    where: { name: "Direito Constitucional" },
    update: {},
    create: {
      name: "Direito Constitucional",
      termId: 1,
    },
  });

  await prisma.disciplines.upsert({
    where: { name: "Direito Administrativo" },
    update: {},
    create: {
      name: "Direito Administrativo",
      termId: 2,
    },
  });

  await prisma.categories.upsert({
    where: { name: "P1" },
    update: {},
    create: {
      name: "P1",
    },
  });
  await prisma.categories.upsert({
    where: { name: "P2" },
    update: {},
    create: {
      name: "P2",
    },
  });

  await prisma.teachersDisciplines.upsert({
    where: { id: 1 },
    update: {},
    create: { teacherId: 1, disciplineId: 1 },
  });
  await prisma.teachersDisciplines.upsert({
    where: { id: 2 },
    update: {},
    create: { teacherId: 2, disciplineId: 1 },
  });
  await prisma.teachersDisciplines.upsert({
    where: { id: 3 },
    update: {},
    create: { teacherId: 3, disciplineId: 2 },
  });

  await prisma.tests.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Prova 1",
      pdfUrl: "https://pokemondb.net/pokedex/polteageist",
      categoryId: 1,
      teacherDisciplineId: 1,
      views: 0,
    },
  });
  await prisma.tests.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: "Prova 2",
      pdfUrl: "https://pokemondb.net/pokedex/sinistea",
      categoryId: 2,
      teacherDisciplineId: 2,
      views: 0,
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
