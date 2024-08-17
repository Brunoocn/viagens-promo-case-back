import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.product.deleteMany();
  const products = [];

  for (let i = 1; i <= 30; i++) {
    products.push({
      name: `Product ${i}`,
      price: parseFloat((Math.random() * 100).toFixed(2)), // Gera um preço aleatório entre 0 e 100
    });
  }

  await prisma.product.createMany({
    data: products,
  });

  console.log('Seed data created: 30 products.');
}

seed().then(() => {
  console.log('Database seeded');
});
