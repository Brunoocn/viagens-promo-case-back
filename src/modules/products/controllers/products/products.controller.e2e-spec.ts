import { INestApplication } from '@nestjs/common';

import { Test } from '@nestjs/testing';
import request from 'supertest';
import { PrismaService } from '../../../../config/database/prisma.service';

import { AppModule } from 'src/app.module';

describe('Products (E2E)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    prisma = moduleRef.get(PrismaService);

    await app.init();
  });

  it('[GET] /products/list', async () => {
    await prisma.product.create({
      data: {
        name: 'Product 1',
        price: 10,
      },
    });
    const response = await request(app.getHttpServer()).get('/products/list?page=1&pageSize=10');

    expect(response.status).toBe(200);
    expect(response.body.list).toHaveLength(1);
  });
});
