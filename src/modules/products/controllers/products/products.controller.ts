import { Controller, Get, HttpCode, ParseIntPipe, Query } from '@nestjs/common';

import { ListAndCountService } from '../../services/list-and-count/list-and-count.service';
import { IGetProductsResponseDTO } from './dto/productsController.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly listAndCountService: ListAndCountService) {}

  @Get('/list')
  @HttpCode(200)
  async loginUser(
    @Query('page', new ParseIntPipe()) page?: number,
    @Query('pageSize', new ParseIntPipe()) pageSize?: number,
  ): Promise<IGetProductsResponseDTO> {
    return this.listAndCountService.execute({ page, pageSize });
  }
}
