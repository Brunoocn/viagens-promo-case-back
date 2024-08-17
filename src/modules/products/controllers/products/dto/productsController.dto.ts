import { IsNumber } from 'class-validator';
import { IProduct } from 'src/modules/products/database/abstract/productRepository.dto';

export class IGetProductsControllerDTO {
  @IsNumber()
  page: number;

  @IsNumber()
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
