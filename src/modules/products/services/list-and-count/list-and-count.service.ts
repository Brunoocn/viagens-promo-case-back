import { Inject, Injectable } from '@nestjs/common';

import { IProductRepository } from '../../database/abstract/IProduct.repository';
import { REPOSITORIES_NAME } from 'src/utils/repository_enum';
import { IListAndCountProductsDTO } from './dto/list-and-count.dto';
import { getOffset } from 'src/utils/get-offset';
import { getTotalPages } from 'src/utils/get-total-pages';

@Injectable()
export class ListAndCountService {
  constructor(
    @Inject(REPOSITORIES_NAME.product_repository)
    private readonly productRepository: IProductRepository,
  ) {}

  async execute({ page = 1, pageSize = 100 }: IListAndCountProductsDTO) {
    const { products, count } = await this.productRepository.listAndCount({
      limit: pageSize,
      offset: getOffset({ page, pageSize }),
    });

    return {
      list: products,
      paging: {
        total: count,
        page,
        pages: getTotalPages({ total: count, pageSize }),
      },
    };
  }
}
