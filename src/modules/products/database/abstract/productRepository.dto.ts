export type Product = {
  id: string;
  name: string;
  price: number;
};

export interface IListAndCountProductsDTO {
  limit: number;
  offset: number;
}

export interface IListAndCountProductsResponseDTO {
  products: Product[];
  count: number;
}
