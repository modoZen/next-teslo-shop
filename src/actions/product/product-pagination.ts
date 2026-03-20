import { prisma } from "@/lib/prisma";

interface Props {
  page?: number;
  take?: number;
}

export const getPaginationProductsWithImages = async ({
  page = 1,
  take = 12,
}: Props) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
      include: {
        productImages: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    // 2. Obtener el total de páginas
    const totalCount = await prisma.product.count();
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.productImages.map(({ url }) => url),
      })),
    };
  } catch {
    throw new Error("No se pudo cargar los productos");
  }
};
