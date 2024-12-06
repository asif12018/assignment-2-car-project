//car type
export type TCar = {
  brand: string;
  model: string;
  year: number;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
};

//order type
export type TOder = {
  email: string;
  car: string;
  quantity: number;
  totalPrice: number;
};
