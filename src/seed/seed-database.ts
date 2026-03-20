import { prisma } from "../lib/prisma.ts";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("Seed Executed");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
