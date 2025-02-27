"use client";
import { cn } from "@/components/lib/utils/twMerge";
import { Heart, Share } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface PropertyItemProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  location: string;
  onInquire?: () => void;
}

const PropertyItem = ({ title, description, price, imageUrl, location, onInquire }: PropertyItemProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={cn(
        "w-[300px] h-[460px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image Section */}
      <div className="relative w-full h-[320px] overflow-hidden">
        <Image src={imageUrl} alt={title} width={300} height={320} className="w-full h-full object-cover" />
        {isHover && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
            <button
              className="text-white border border-white py-2 px-6 rounded-lg font-semibold tracking-wide hover:bg-white hover:text-black transition"
              onClick={onInquire}
            >
              Inquire Now
            </button>
          </div>
        )}
      </div>

      {/* Property Info Section */}
      <div className="p-6 flex flex-col gap-2">
        <p className={cn(poppins.className, "text-2xl font-semibold text-[#333] leading-tight")}>{title}</p>
        <p className={cn(poppins.className, "text-sm text-gray-600 leading-relaxed")}>{description}</p>
        <p className={cn(poppins.className, "text-primarySite text-lg font-semibold")}>{price}</p>
        <p className={cn(poppins.className, "text-gray-500 text-sm")}>{location}</p>
      </div>

      {/* Interaction Section */}
      <div className="flex justify-between items-center px-6 py-3 border-t border-gray-200">
        <button className="flex items-center gap-2 text-gray-700 hover:text-primarySite transition-all">
          <Share size={18} />
          <span className="text-sm font-medium">Share</span>
        </button>
        <button className="flex items-center gap-2 text-gray-700 hover:text-primarySite transition-all">
          <Heart size={18} />
          <span className="text-sm font-medium">Like</span>
        </button>
      </div>
    </div>
  );
};

export default PropertyItem;
