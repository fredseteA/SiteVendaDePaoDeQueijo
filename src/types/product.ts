// Tipos para os produtos do Pão de Queijo Mineiro

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  isStuffed: boolean; // Para destacar os sabores recheados
}

export interface CartItem {
  product: Product;
  quantity: number;
}
