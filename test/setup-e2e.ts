import { PrismaClient } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import 'dotenv/config';
import { execSync } from 'node:child_process';

const prisma = new PrismaClient();

const databaseId = randomUUID();
const url = new URL(process.env.DATABASE_URL);

function generateUniqueDatabaseUrl(databaseId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable.');
  }

  const newDatabaseUrl = url.toString().replace(/\/[^\/]+$/, `/${databaseId}`);

  return newDatabaseUrl;
}

beforeAll(async () => {
  const databaseUrl = generateUniqueDatabaseUrl(databaseId);

  process.env.DATABASE_URL = databaseUrl;

  await prisma.$executeRawUnsafe(`CREATE DATABASE \`${databaseId}\`;`);

  execSync('yarn prisma migrate deploy');
});

afterAll(async () => {
  // Dropar o banco de dados após os testes
  await prisma.$executeRawUnsafe(`DROP DATABASE \`${databaseId}\`;`);

  await prisma.$disconnect();
});
