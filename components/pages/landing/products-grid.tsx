"use client";
import { cn } from "@/components/lib/utils/twMerge";
import PropertyItem from "./property-item";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export interface Property {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  location: string;
}

interface ProductsGridProps {
  properties: Property[];
}

const ProductsGrid = ({ properties }: ProductsGridProps) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center md:px-16 px-10 py-12 w-full bg-white">
      <div className="text-center text-black flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(poppins.className, "md:text-5xl text-4xl font-bold text-[#3A3A3A]")}
        >
          Featured Properties
        </motion.h2>
      </div>
      <div className="w-full grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-screen-2xl">
        {properties.map((property, index) => (
          <PropertyItem key={index} {...property} />
        ))}
      </div>
      <button
        className={cn(
          poppins.className,
          "w-[245px] h-[48px] bg-white flex items-center justify-center focus:outline-none text-primarySite font-semibold border-[2px] border-primarySite"
        )}
      >
        View More Listings
      </button>
    </div>
  );
};

export default ProductsGrid;
