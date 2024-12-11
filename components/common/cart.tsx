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
import { cn } from "@/lib/utils";
import { MenuIcon, ShoppingBasket } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shop" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
  { href: "/", label: "Profile" },
  { href: "/", label: "Wishlist" },
];
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Cart() {
  return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <ShoppingBasket />
          </Button>
        </SheetTrigger>
        <SheetContent side={"right"}>
          shopping items
        </SheetContent>
      </Sheet>
  );
}
