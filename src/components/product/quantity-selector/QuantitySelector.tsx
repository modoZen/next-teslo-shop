"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (currentQuantity + value < 1) return;

    setCurrentQuantity(currentQuantity + value);
  };

  return (
    <div className="flex items-center">
      <button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <div className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">
        {currentQuantity}
      </div>

      <button onClick={() => onQuantityChange(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
