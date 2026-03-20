import { prisma } from "../lib/prisma.ts";
import { initialData } from "./seed.ts";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;

  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  console.log("Seed Executed");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
