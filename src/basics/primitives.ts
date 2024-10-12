type Primitive = string | number | bigint | boolean | symbol |
  null | undefined;

export interface Product {
  id: symbol; // Unique identifier
  name: string;
  price: number;
  available: boolean;
  totalSales: bigint; // Large number representing total sales
}

// The filter definition
interface FilterDefinition {
  key: keyof Product;
  value: Primitive;
}

// Function to filter products
function filterProducts(
  products: Product[],
  filters: FilterDefinition[]
): Product[] {
  return products.filter((product) => {
    return filters.every((filter) => {
      return product[filter.key] === filter.value;
    });
  });
}

filterProducts([
  {
    id: Symbol("1"), name: "Laptop",
    price: 1245, available: true,
    totalSales: BigInt(100),
  },
], [
  { key: "available", value: true },
  { key: "price", value: 450 },
])

// ================================================

type ObjectTypes = {
  object: object;
  array: any[];
  tuple: [number, string];
  function: Function;
  class: Date;
  classInstance: Date;
}

type CustomTypes = {
  enum: Role;
  literal: "demo";
  union: number | string;
  alias: ConfigurationAliases;
}

type OtherTypes = {
  any: any;
  unknown: unknown;
  never: never;
  void: void;
  literal: "warm" | "cold" | "red";
}
