import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <div>
      <Link href="/cart" className="relative">
        <ShoppingCart />
        <span className="absolute -top-1 -right-1 bg-[#d94f7c] text-white h-3.5 rounded-full text-xs  w-3.5 flex items-center justify-center ">
          0{" "}
        </span>
      </Link>
    </div>
  );
};

export default CartIcon;
