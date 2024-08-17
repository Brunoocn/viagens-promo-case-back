import { IProduct } from 'src/modules/products/database/abstract/productRepository.dto';

export class IGetProductsResponseDTO {
  list: IProduct[];
  paging: {
    total: number;
    page: number;
    pages: number;
  };
}
