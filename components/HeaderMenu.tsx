"use client";

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize main-nav text-[#755b44]">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`${pathname === item?.href && " text-[#d94f7c]"}`}
        >
          {" "}
          {item?.title}
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
