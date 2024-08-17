import { Product } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { IProductRepository } from 'src/modules/products/database/abstract/IProduct.repository';
import {
  IListAndCountProductsDTO,
  IListAndCountProductsResponseDTO,
} from 'src/modules/products/database/abstract/productRepository.dto';

export interface ICreateProduct {
  name: string;
  price: number;
}

export class InMemoryProductRepository implements IProductRepository {
  public products: Product[] = [];

  async listAndCount(
    data: IListAndCountProductsDTO,
  ): Promise<IListAndCountProductsResponseDTO> {
    const { limit, offset } = data;

    const products = this.products.slice(offset, offset + limit);

    const count = this.products.length;

    return { products, count };
  }

  async create(data: ICreateProduct): Promise<Product> {
    const product = {
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data,
    };
    this.products.push(product);

    return product;
  }
}
