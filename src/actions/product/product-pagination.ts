import { prisma } from "@/lib/prisma";

export const getPaginationProductsWithImages = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        productImages: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    return {
      products: products.map((product) => ({
        ...product,
        images: product.productImages.map(({ url }) => url),
      })),
    };
  } catch {
    throw new Error("No se pudo cargar los productos");
  }
};
