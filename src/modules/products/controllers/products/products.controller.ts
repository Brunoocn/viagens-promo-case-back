import { Controller, Get, HttpCode, ParseIntPipe, Query } from '@nestjs/common';

import { ListAndCountService } from '../../services/list-and-count/list-and-count.service';
import {
  IGetProductsControllerDTO,
  IGetProductsResponseDTO,
} from './dto/productsController.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly listAndCountService: ListAndCountService) {}

  @Get('/list')
  @HttpCode(200)
  async loginUser(
    @Query() { page, pageSize }: IGetProductsControllerDTO,
  ): Promise<IGetProductsResponseDTO> {
    return this.listAndCountService.execute({ page, pageSize });
  }
}
