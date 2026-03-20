import { initialData } from "./seed.ts";

async function main() {
  console.log(initialData);

  console.log("Seed Executed");
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
