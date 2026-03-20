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

    console.log(products);

    return products;
  } catch (error) {}
};
