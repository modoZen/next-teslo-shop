import { getPaginationProductsWithImages } from "@/actions/product/product-pagination";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageParams = page ? parseInt(page) : 1;
  const { products } = await getPaginationProductsWithImages({
    page: pageParams,
  });

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
