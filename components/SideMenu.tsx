import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOutsideClick } from "@/hooks";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname;
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${isOpen ? "translate-x-0" : " -translate-x-full  "}`}
    >
      <div ref={sidebarRef} className="  min-w-72 max-w-96  bg-black text-white/80 h-screen p-10"> 
        <div className=" flex items-center justify-between">
          <Logo />
          <button onClick={onClose}><X/></button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">

            {
                headerData.map((item)=>(
                    
                            <Link key={item?.title} href={item?.href}> {item?.title}</Link>
                           
                       
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
