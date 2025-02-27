"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/components/lib/utils/twMerge";
import { MenuIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shop" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
  { href: "/", label: "Profile" },
  { href: "/", label: "Wishlist" },
  { href: "/", label: "Search" },
];
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function ResponsiveNavbar() {
  return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          <div className="w-full h-screen flex flex-col items-center justify-center gap-8 ">
            {links.map(({ href, label }, index) => (
              <Link href={href} key={index}>
                <Button
                  className={cn(
                    poppins.className,
                    "text-black font-medium text-base"
                  )}
                  variant={"link"}
                >
                  {label}
                </Button>
              </Link>
            ))}

          </div>
        </SheetContent>
      </Sheet>
  );
}
