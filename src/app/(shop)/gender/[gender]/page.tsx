import { getPaginationProductsWithImages } from "@/actions/product/product-pagination";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Pagination } from "@/components/ui/pagination/Pagination";
import { Title } from "@/components/ui/title/Title";
import { Gender } from "@/generated/prisma/enums";
import { Category } from "@/interfaces/product.interface";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ gender: Category }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ params, searchParams }: Props) {
  const { page } = await searchParams;
  const pageParams = page ? parseInt(page) : 1;

  const { gender } = await params;

  if (gender !== "men" && gender !== "women" && gender !== "kid") {
    notFound();
  }

  const { products, totalPages } = await getPaginationProductsWithImages({
    page: pageParams,
    gender,
  });

  const labels: Record<Gender, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  const title = labels[gender];

  return (
    <>
      <Title
        title={`Artículos ${title}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
