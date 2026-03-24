"use client";

import { QuantitySelector } from "@/components/product/quantity-selector/QuantitySelector";
import { SizeSelector } from "@/components/product/size-selector/SizeSelector";
import { Product } from "@/generated/prisma/client";
import { Size } from "@/interfaces/product.interface";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size>();

  return (
    <>
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChanged={setSize}
      />

      <QuantitySelector quantity={2} />

      <button className="btn-primary my-5">Agregar al carrito</button>
    </>
  );
};
