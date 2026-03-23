"use client";

import { getStockBySlug } from "@/actions/get-stock-by-slug";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  useEffect(() => {
    getStock();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
  };

  return (
    <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
      Stock: {stock}
    </h1>
  );
};
