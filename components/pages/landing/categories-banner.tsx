"use client";
import { cn } from "@/components/lib/utils/twMerge";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const CategoriesBanner = () => {
  return (
    <div className="w-full bg-white py-20">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto px-4 mb-16">
        <h2 className={cn(
          poppins.className,
          "md:text-4xl text-3xl font-bold text-primarySite mb-4"
        )}>
          Explore Property Types
        </h2>
        <p className={cn(
          poppins.className,
          "text-lg text-gray-600 opacity-80"
        )}>
          Discover the perfect property type tailored to your lifestyle and aspirations.
        </p>
      </div>

      {/* Property Cards Grid */}
      <div className="max-w-screen-xl mx-auto px-12 md:px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16">
        {[
          {
            image: "/real-estate-villa.jpg",
            title: "Villas",
            description: "Luxurious private estates with expansive spaces and premium amenities."
          },
          {
            image: "/real-estate-apartment.jpg",
            title: "Apartments",
            description: "Modern living spaces in the heart of the city, designed for convenience."
          },
          {
            image: "/real-estate-studio.jpg",
            title: "Studios",
            description: "Compact and stylish spaces perfect for urban living."
          },
        ].map((item, index) => (
          <div
            key={index}
            className={cn(
              "group relative overflow-hidden rounded-xl shadow-lg",
              "hover:shadow-2xl transition-all duration-300",
              "border border-white/10 hover:border-primarySite/20"
            )}
          >
            {/* Image */}
            <div className="relative h-[550px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/90 backdrop-blur-sm">
              <h3 className={cn(
                poppins.className,
                "text-2xl font-bold text-primarySite mb-2"
              )}>
                {item.title}
              </h3>
              <p className={cn(
                poppins.className,
                "text-gray-600 text-sm leading-relaxed"
              )}>
                {item.description}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBanner;