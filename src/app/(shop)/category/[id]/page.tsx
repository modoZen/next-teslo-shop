import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { Category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ id: Category }>;
}) {
  const { id } = await params;

  if (id !== "men" && id !== "women" && id !== "kid") {
    notFound();
  }

  const products = initialData.products.filter(
    (product) => product.gender === id,
  );

  // let title = "";
  // let subtitle = "";

  // switch (id) {
  //   case "men":
  //     title = "Hombres";
  //     subtitle = "Ropa para hombres";
  //     break;
  //   case "women":
  //     title = "Mujeres";
  //     subtitle = "Ropa para mujeres";
  //     break;
  //   case "kid":
  //     title = "Niños";
  //     subtitle = "Ropa para niños";
  //     break;
  // }

  const labels: Record<Category, string> = {
    men: "para Hombres",
    women: "para Mujeres",
    kid: "para Niños",
    unisex: "para Todos",
  };

  const title = labels[id];

  return (
    <>
      <Title
        title={`Artículos ${title}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
