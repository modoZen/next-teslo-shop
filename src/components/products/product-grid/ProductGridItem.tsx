"use client";

import { Product } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [display, setDisplay] = useState(product.images[0]);

  return (
    <div className="rounded-md overflowf-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${display}`}
          alt={product.title}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplay(product.images[1])}
          onMouseLeave={() => setDisplay(product.images[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};
