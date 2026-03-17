import { Product } from "@/interfaces/product.interface";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <div key={product.slug} className="border rounded-lg p-4">
          <h3 className="font-bold text-lg">{product.title}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};
