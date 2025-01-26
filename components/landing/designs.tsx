"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Array of all images
const images = [
  "/house_1.jpg",
  "/house_2.jpg",
  "/house_3.jpg",
  "/house_4.jpg",
  "/house_5.jpg",
];

const FeaturedProperties = () => {
  // Track the selected main image
  const [image, setImage] = useState<string>(images[0]);

  return (
    <div className="flex-col gap-8 items-center md:px-16 px-10 py-12 w-full bg-primaryLight flex justify-center min-h-[670px] overflow-hidden">
      <div className="max-w-screen-2xl w-full flex gap-4 md:flex-row flex-col">
        {/* Left Section */}
        <div className="lg:min-w-[33%] lg:max-w-[40%] md:min-w-[50%] flex flex-col items-start justify-center gap-4">
          <h1
            className={cn(
              poppins.className,
              "md:text-[40px] text-[26px] font-bold text-[#3A3A3A]"
            )}
          >
            50+ Beautiful Real Estate Listings
          </h1>
          <p className={cn(poppins.className, "text-[#616161] font-medium")}>
            Discover our curated selection of stunning properties that will
            inspire your next move.
          </p>
          <Button
            onClick={() => setImage(images[1])}
            className={cn(
              poppins.className,
              "text-white font-semibold tracking-widest uppercase bg-primarySite px-[72px] py-[25px] hover:text-black focus:outline-none md:mt-6 mt-2"
            )}
          >
            View More
          </Button>
        </div>

        {/* Desktop: Right Section */}
        <div className="hidden md:flex gap-4">
          {/* Main (Selected) Image */}
          <div className="max-w-[404px] h-full flex items-center justify-center">
            <div className="w-[404px] h-[582px] relative bg-slate-500">
              <Image src={image} alt="property" fill className="object-cover" />
              {/* Info Overlay */}
              <div className="absolute bottom-5 left-5 h-[130px] w-[219px] bg-white bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="flex items-center">
                  <p
                    className={cn(
                      poppins.className,
                      "text-[#616161] font-medium "
                    )}
                  >
                    {/* Just a static "01" for now, 
                        or you could dynamically figure out which index + 1 if you want */}
                    {String(images.indexOf(image) + 1).padStart(2, "0")}
                  </p>
                  <p
                    className={cn(
                      poppins.className,
                      "text-[#616161] font-medium ml-10 relative"
                    )}
                  >
                    <span className="absolute left-[-52%] translate-y-[50%] translate-x-[75%] bottom-[50%] w-8 h-[2px] bg-[#616161]" />
                    Downtown Loft
                  </p>
                </div>
                <h1
                  className={cn(
                    poppins.className,
                    "font-semibold text-[28px] text-[#3A3A3A]"
                  )}
                >
                  Your Dream Home
                </h1>
              </div>
              {/* Next Arrow Button (optional placeholder action) */}
              <div className="absolute bottom-5 left-[239px] h-[50px] w-[50px] z-10 bg-primarySite flex items-center justify-center">
                <Button variant="ghost" className="hover:bg-transparent">
                  <ArrowRight color="white" className="!h-8 !w-8" />
                </Button>
              </div>
            </div>
          </div>

          {/* Additional (Thumbnail) Images */}
          <div className="relative flex flex-col gap-4">
            <div className="flex h-[486px] items-start gap-8 absolute">
              {images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="w-[372px] h-[486px] relative bg-slate-500 cursor-pointer"
                  onClick={() => setImage(img)}
                >
                  <Image
                    src={img}
                    alt={`property_${idx}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex gap-4 mt-[522px] items-center">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setImage(img)}
                  className={cn(
                    "rounded-full border-primarySite h-8 w-8 flex items-center justify-center cursor-pointer",
                    image === img && "border-[1px]"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-full bg-slate-600 h-4 w-4",
                      image === img && "bg-primarySite"
                    )}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Right Section */}
        <div className="flex md:hidden gap-4">
          {/* Main (Selected) Image on Mobile */}
          <div className="md:max-w-[404px] max-w-[300px] h-full flex items-center justify-center">
            <div className="md:w-[404px] w-[300px] md:h-[582px] h-[400px] relative bg-slate-500">
              <Image src={image} alt="property" fill className="object-cover" />
              {/* Info Overlay */}
              <div className="absolute bottom-5 left-5 h-[130px] w-[219px] bg-white bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center">
                <div className="flex items-center">
                  <p
                    className={cn(
                      poppins.className,
                      "text-[#616161] font-medium ml-10 "
                    )}
                  >
                    {String(images.indexOf(image) + 1).padStart(2, "0")}
                  </p>
                  <p
                    className={cn(
                      poppins.className,
                      "text-[#616161] font-medium ml-10 relative"
                    )}
                  >
                    <span className="absolute left-[-52%] translate-y-[50%] translate-x-[52%] bottom-[50%] w-8 h-[2px] bg-[#616161]" />
                    Downtown Loft
                  </p>
                </div>
                <h1
                  className={cn(
                    poppins.className,
                    "font-semibold text-[28px] text-[#3A3A3A]"
                  )}
                >
                  Your Dream Home
                </h1>
              </div>
              {/* Next Arrow Button (optional placeholder) */}
              <div className="absolute bottom-5 left-[239px] h-[50px] w-[50px] z-10 bg-primarySite flex items-center justify-center">
                <Button variant="ghost" className="hover:bg-transparent h-full w-full">
                  <ArrowRight color="white" className="!h-8 !w-8" />
                </Button>
              </div>
            </div>
          </div>

          {/* Additional (Thumbnail) Images on Mobile */}
          <div className="relative flex flex-col gap-4">
            <div className="flex md:h-[486px] h-[350px] items-start gap-8 absolute">
              {images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="md:w-[372px] md:h-[486px] w-[300px] h-[350px] relative bg-slate-500 cursor-pointer"
                  onClick={() => setImage(img)}
                >
                  <Image src={img} alt={`property_${idx}`} fill className="object-cover" />
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex gap-4 md:mt-[522px] mt-[360px] items-center">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setImage(img)}
                  className={cn(
                    "rounded-full border-primarySite h-8 w-8 flex items-center justify-center cursor-pointer",
                    image === img && "border-[1px]"
                  )}
                >
                  <div
                    className={cn(
                      "rounded-full bg-slate-600 h-4 w-4",
                      image === img && "bg-primarySite"
                    )}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
