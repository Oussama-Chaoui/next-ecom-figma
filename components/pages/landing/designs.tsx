"use client";
import { cn } from "@/components/lib/utils/twMerge";
import { ArrowRight, MoveRight } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import { motion, AnimatePresence } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const properties = [
  {
    id: 1,
    image: "/house_1.jpg",
    title: "Oceanview Villa",
    location: "Tangier",
    price: "25,000,000 MAD",
    description: "Luxurious Mediterranean retreat with panoramic ocean views"
  },
  {
    id: 2,
    image: "/house_2.jpg",
    title: "Riad Elegance",
    location: "Marrakech",
    price: "18,500,000 MAD",
    description: "Authentic Moroccan riad in the heart of the medina"
  },
  {
    id: 3,
    image: "/house_3.jpg",
    title: "Modern City Loft",
    location: "Casablanca",
    price: "32,000,000 MAD",
    description: "Contemporary urban living in Morocco's business hub"
  },
  {
    id: 4,
    image: "/house_4.jpg",
    title: "Blue Kasbah Retreat",
    location: "Chefchaouen",
    price: "12,750,000 MAD",
    description: "Traditional kasbah with stunning Rif Mountain views"
  },
  {
    id: 5,
    image: "/house_5.jpg",
    title: "Summer Beach Villa",
    location: "Fnideq",
    price: "15,000,000 MAD",
    description: "Exclusive Mediterranean beachfront property"
  },
];

const FeaturedProperties = () => {
  const [activeProperty, setActiveProperty] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);


  const handleNext = () => {
    setDirection("right");
    setActiveProperty((prev) => (prev + 1) % properties.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setActiveProperty((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };



  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#FAF3EA] py-12 px-4 sm:px-8">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
          <div className="max-w-[400] space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={cn(
                poppins.className,
                "text-5xl md:text-6xl font-bold text-slate-900 leading-tight",
                "bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
              )}
            >
              Moroccan Luxury Estates
            </motion.h1>
            <p
              className={cn(
                poppins.className,
                "text-slate-600 text-xl font-medium leading-relaxed"
              )}
            >
              Discover Morocco's most exclusive properties, from coastal villas to historic riads
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              className={cn(
                poppins.className,
                "group w-fit px-8 py-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white",
                "text-lg font-semibold tracking-wide rounded-xl",
                "hover:scale-[1.02] transition-all duration-300",
                "shadow-lg hover:shadow-xl shadow-slate-900/10",
                "flex items-center gap-3"
              )}
            >
              Explore Collection
              <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        {/* Gallery */}
        {/* Set grid height on large screens so both columns are equal */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 h-[500px] lg:h-[600px]">
          {/* Main Image */}
          {/* Remove aspect ratio classes and use h-full to fill the grid cell */}
          <div
            className="relative h-full rounded-2xl overflow-hidden group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeProperty}
                custom={direction}
                initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={properties[activeProperty].image}
                  alt={properties[activeProperty].title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

                {/* Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-xl p-6 rounded-xl shadow-2xl">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            poppins.className,
                            "text-primarySite font-semibold text-2xl"
                          )}
                        >
                          {String(activeProperty + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px w-8 bg-slate-300" />
                        <span className="text-slate-500 font-medium">
                          {properties[activeProperty].location}
                        </span>
                      </div>
                      <h2
                        className={cn(
                          poppins.className,
                          "text-3xl font-bold text-slate-900"
                        )}
                      >
                        {properties[activeProperty].title}
                      </h2>
                      <p
                        className={cn(
                          poppins.className,
                          "text-lg text-slate-600 mt-1"
                        )}
                      >
                        {properties[activeProperty].description}
                      </p>
                      <p
                        className={cn(
                          poppins.className,
                          "text-2xl font-semibold text-primarySite mt-2"
                        )}
                      >
                        {properties[activeProperty].price}
                      </p>
                    </div>
                    <button
                      className="p-4 bg-primarySite rounded-xl hover:bg-primarySite/90 transition-colors shadow-lg cursor-pointer z-50"
                    >
                      <ArrowRight className="h-7 w-7 text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 w-full flex justify-between items-center px-6">
              <button
                onClick={handlePrev}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:scale-105 transition-transform hidden lg:block"
              >
                <ArrowRight className="h-8 w-8 text-slate-900 rotate-180" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:scale-105 transition-transform hidden lg:block"
              >
                <ArrowRight className="h-8 w-8 text-slate-900" />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="hidden lg:flex flex-col gap-4 h-[600px] overflow-y-auto scrollbar-hide pr-2 pb-1">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  "relative aspect-square cursor-pointer transition-all",
                  "border-2 hover:border-primarySite/30 rounded-xl overflow-hidden",
                  index === activeProperty ? "border-primarySite scale-[1.01]" : "border-slate-200"
                )}
                onClick={() => setActiveProperty(index)}
              >
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-900">{property.title}</p>
                      <p className="text-sm text-slate-600">{property.location}</p>
                    </div>
                    <span className="text-lg font-bold text-primarySite">
                      {property.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {properties.map((_, index) => (
            <motion.div
              key={index}
              className={cn(
                "h-[3px] bg-slate-300 rounded-full transition-all",
                index === activeProperty ? "bg-primarySite w-16" : "w-8"
              )}
              initial={{ scale: 0.9 }}
              animate={{ scale: index === activeProperty ? 1.1 : 1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
