import { getPaginationProductsWithImages } from "@/actions/product/product-pagination";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const pageParams = page ? parseInt(page) : 1;
  const { products } = await getPaginationProductsWithImages({
    page: pageParams,
  });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      <ProductGrid products={products} />
    </>
  );
}
