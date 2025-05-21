"use client";

import Link from "next/link";
import { ThemeChanger } from "../themeChanger/ThemeChanger";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { menu } from "@/lib/helper/navbar";
import Logo from "../../../../public/logo.svg";
import Logo1 from "../../../../public/logo1.svg";
import Image from "next/image";
import { dropDownItems } from "@/lib/helper/dropdownNavbar/dropdownNavbar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark , setIsDark] = useState(false)
  const router = useRouter();
  const pathname = usePathname();

  const goToPage = (variable: string) => {
    router.push(`/services/${variable}`);
  };

  const isRouteSelected = (route: string) => {
    if (route === "/" && pathname !== "/") return false;
    return pathname === route || pathname.startsWith(route);
  };

   useEffect(() => {
        const observer = new MutationObserver(() => {
          setIsDark(document.documentElement.classList.contains('dark'));
        });
    
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
        return () => observer.disconnect();
      }, []);

  return (
    <div className="w-full h-[74px] bg-pink-1 dark:bg-[var(--card)] dark:opacity-70 dark:text-white rounded-[48px]">
      <div className="w-full flex flex-row p-2 px-[124px] items-center gap-x-[97px]">
        
        <div className="h-[36.5px] w-[66.2px] relative">

          <Image src={isDark? Logo1 : Logo} alt="Logo" className="size-full dark:fill-text-white" />
        </div>

        <div className="w-full flex flex-row py-2 gap-x-5 items-center h-full text-base">
          {menu.map((item, index) => {
            const isSelected = isRouteSelected(item.route);

            return item.label === "خدمات" ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger
                  className={`flex items-center gap-1 py-2 px-4 cursor-pointer border-0 outline-0 ${
                    pathname.startsWith("/services")
                      ? "text-orange-1 font-bold"
                      : "font-normal"
                  }`}
                >
                  {item.label}
                  <ChevronDownIcon size={16} />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="bg-white-2 z-50 p-6 text-right rounded-lg">
                  {dropDownItems.map((dropdownItem, idx) => (
                    <DropdownMenuItem
                      key={idx}
                      className="cursor-pointer px-3 py-2 rounded-md text-sm text-gray-700"
                      onClick={() => goToPage(dropdownItem.type)}
                    >
                      {dropdownItem.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={index}
                href={item.route}
                className={`flex items-center justify-center py-2 px-3 leading-[26px] ${
                  isSelected
                    ? "text-orange-1 font-bold"
                    : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-16 right-16">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
