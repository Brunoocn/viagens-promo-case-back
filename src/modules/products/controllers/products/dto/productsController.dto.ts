import { Product } from 'src/modules/products/database/abstract/productRepository.dto';

export class IGetProductsResponseDTO {
  list: Product[];
  paging: {
    total: number;
    page: number;
    pages: number;
  };
}
