import { Module } from '@nestjs/common';
import { ProductRepository } from './database/implementations/product.repository';
import { REPOSITORIES_NAME } from 'src/utils/repository_enum';
import { ListAndCountService } from './services/list-and-count/list-and-count.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: REPOSITORIES_NAME.product_repository,
      useClass: ProductRepository,
    },
    ListAndCountService,
  ],
  exports: [
    {
      provide: REPOSITORIES_NAME.product_repository,
      useClass: ProductRepository,
    },
  ],
})
export class ProductsModule {}
