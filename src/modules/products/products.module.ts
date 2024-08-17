import { Module } from '@nestjs/common';
import { ProductRepository } from './database/implementations/product.repository';
import { REPOSITORIES_NAME } from 'src/utils/repository_enum';
import { ListAndCountService } from './services/list-and-count/list-and-count.service';
import { ProductsController } from './controllers/products/products.controller';
import { PrismaService } from 'src/config/database/prisma.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    {
      provide: REPOSITORIES_NAME.product_repository,
      useClass: ProductRepository,
    },
    ListAndCountService,
    PrismaService,
  ],
  exports: [
    {
      provide: REPOSITORIES_NAME.product_repository,
      useClass: ProductRepository,
    },
  ],
})
export class ProductsModule {}
