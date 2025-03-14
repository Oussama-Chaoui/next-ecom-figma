"use client";
import { cn } from "@/components/lib/utils/twMerge";
import { Heart, Share, MapPin } from "lucide-react";
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
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className={cn(
        "group w-[340px] bg-white rounded-2xl shadow-xl transition-all duration-500",
        "hover:shadow-2xl hover:-translate-y-2 overflow-hidden",
        "border border-opacity-10 border-white backdrop-blur-sm",
        "relative isolate"
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Image Section with Parallax Effect */}
      <div className="relative h-[380px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isHover ? "scale-105" : "scale-100",
            "transform-gpu"
          )}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

        {/* Floating Price Tag */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primarySite to-primarySite/80 text-white px-4 py-2 rounded-full shadow-lg">
          <span className="font-bold tracking-wide">{price}</span>
        </div>

        {/* Interactive Inquiry Button */}
        <button
          onClick={onInquire}
          className={cn(
            "absolute bottom-6 left-1/2 -translate-x-1/2",
            "text-white bg-black/90 backdrop-blur-sm px-8 py-3 rounded-xl",
            "border border-white/20 shadow-2xl",
            "transition-all duration-500 transform",
            "hover:scale-105 hover:bg-black/100 hover:shadow-3xl",
            "flex items-center gap-2 font-semibold tracking-wider",
            isHover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          Explore Property
          <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Content Section with Glassmorphism Effect */}
      <div className="p-6 pb-0 bg-white/80 backdrop-blur-sm relative -top-8 rounded-t-2xl">
        <div className="mb-4 flex items-center gap-2 text-slate-600">
          <MapPin className="w-5 h-5 text-primarySite" />
          <span className={cn(poppins.className, "text-sm font-medium tracking-wide")}>{location}</span>
        </div>

        <h3
          className={cn(
            poppins.className,
            "text-2xl font-bold text-gray-900 mb-2 transition-colors",
            "group-hover:text-primarySite"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            poppins.className,
            "text-gray-600 leading-relaxed mb-4 transition-all duration-300 line-clamp-3"
          )}
        >
          {description}
        </p>

        {/* Interaction Bar with Dynamic Effects */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-5 mb-[-10px]">
          <button
            className={cn(
              "flex items-center gap-2 text-gray-500 transition-all hover:text-primarySite",
              "group/inner relative"
            )}
          >
            <Share className="w-5 h-5 transition-transform group-hover/inner:scale-110" />
            <span className="text-sm font-medium">Share</span>
          </button>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className={cn(
              "flex items-center gap-2 transition-all",
              isLiked ? "text-primarySite" : "text-gray-500 hover:text-primarySite/80"
            )}
          >
            <Heart
              className={cn("w-5 h-5 transition-all", isLiked ? "fill-current animate-heartbeat" : "")}
            />
            <span className="text-sm font-medium">Like</span>
          </button>
        </div>
      </div>

      {/* Subtle Glow Effect */}
    </div>
  );
};

export default PropertyItem;
