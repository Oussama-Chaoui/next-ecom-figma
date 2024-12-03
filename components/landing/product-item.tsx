'use client'
import { cn } from "@/lib/utils";
import { ArrowLeftRight, Heart, Share } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image"
import { MouseEventHandler, useState } from "react";

const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });

const ProductItem = () => {

  const [isHover,setIsHover] = useState(false);
  const handleHover:MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
    setIsHover(true);
  };
  const handleMouseLeave:MouseEventHandler<HTMLDivElement> = (e) => {
    console.log(e);
    setIsHover(false);
  };
  return (
    <div className={cn("w-[285px] h-[446px] bg-[#F4F5F7] relative")} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        {
          isHover && (
            <div className={cn(poppins.className,"absolute top-0 left-0 w-[285px] h-[446px] bg-[#3A3A3A] bg-opacity-70 flex flex-col items-center justify-center gap-4")}>
              <button className="h-[48px] w-[202px] bg-white flex items-center justify-center focus:outline-none text-primarySite font-semibold">
                Add To Cart
              </button>
              <div className="flex items-center text-white gap-4">
                <div className="flex items-center gap-2 font-semibold">
                  <Share size={16} color="#fff" strokeWidth={3} />
                  <p>Share</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <ArrowLeftRight size={16} color="#fff" strokeWidth={3} />
                  <p>Compare</p>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Heart size={16} color="#fff" strokeWidth={3} />
                  <p>Like</p>
                </div>
              </div>
            </div>
          )
        }
        <Image src="/image 1.png" alt="product" width={285} height={301} objectFit="cover" />
        <div className="w-full flex flex-col gap-4 pt-4 pl-4">
            <p className={cn(poppins.className,"text-black font-semibold text-2xl")}>Syltherine</p>
            <p className={cn(poppins.className,"font-medium text-black opacity-50")}>Stylish cafe chair</p>
            <p className={cn(poppins.className,"text-black font-semibold text-lg")}>
            Rp 2.500.000
            <span className="opacity-40 line-through ml-2 text-sm">Rp 3.500.000</span>
            </p>
        </div>
    </div>
  )
}

export default ProductItem