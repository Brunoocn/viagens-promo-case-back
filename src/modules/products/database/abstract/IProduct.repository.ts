import { IListAndCountProductsDTO, IListAndCountProductsResponseDTO } from "./productRepository.dto";

export interface IProductRepository {
  listAndCount(
    data: IListAndCountProductsDTO,
  ): Promise<IListAndCountProductsResponseDTO>;
}
