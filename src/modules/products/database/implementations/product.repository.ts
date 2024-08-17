import { Injectable } from '@nestjs/common';
import { IProductRepository } from '../abstract/IProduct.repository';
import { PrismaService } from 'src/config/database/prisma.service';
import {
  IListAndCountProductsDTO,
  IListAndCountProductsResponseDTO,
} from '../abstract/productRepository.dto';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async listAndCount(
    data: IListAndCountProductsDTO,
  ): Promise<IListAndCountProductsResponseDTO> {
    const { limit, offset } = data;
    const products = await this.prismaService.product.findMany({
      take: limit,
      skip: offset,
    });

    const count = await this.prismaService.product.count();

    return { products, count };
  }
}
