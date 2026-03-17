"use client";

import { titleFont } from "@/config/fonts";
import useUIStore from "@/store/ui/ui-store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kid"
        >
          Niños
        </Link>
      </div>

      <div className="flex items-center">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/search"
        >
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/cart"
        >
          <div className="relative">
            <span className="absolute text-xs rounded-full font-bold bg-blue-500 text-white px-1 -top-2 -right-2">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 cursor-pointer"
          onClick={openSideMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
