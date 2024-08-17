import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { IProduct } from 'src/modules/products/database/abstract/productRepository.dto';

export class IGetProductsControllerDTO {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pageSize: number;
}

export class IGetProductsResponseDTO {
  list: IProduct[];
  paging: {
    total: number;
    page: number;
    pages: number;
  };
}
