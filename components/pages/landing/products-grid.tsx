import { cn } from "@/components/lib/utils/twMerge";
import PropertyItem from "./property-item";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ListingsGrid = () => {
  const properties = [
    {
      title: "Oceanview Villa",
      description: "A luxurious villa with a stunning view of the Atlantic Ocean.",
      price: "7,800,000 MAD",
      imageUrl: "/house_1.jpg",
      location: "Tangier"
    },
    {
      title: "Riad Elegance",
      description: "A beautifully restored riad with a classic Moroccan design.",
      price: "3,200,000 MAD",
      imageUrl: "/house_2.jpg",
      location: "Marrakech"
    },
    {
      title: "Modern City Loft",
      description: "A modern, high-end loft in the heart of the city.",
      price: "2,400,000 MAD",
      imageUrl: "/house_3.jpg",
      location: "Casablanca"
    },
    {
      title: "Kasbah Charm",
      description: "A historic property near the heart of the old medina.",
      price: "5,000,000 MAD",
      imageUrl: "/house_4.jpg",
      location: "Chefchaouen"
    },
  ];

  return (
    <div className="flex flex-col gap-8 justify-center items-center md:px-16 px-10 py-12 w-full bg-white">
      <div className="text-center text-black flex flex-col">
        <h2 className={cn(poppins.className, "md:text-5xl text-4xl font-bold text-[#3A3A3A]")}>
          Featured Properties
        </h2>
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

export default ListingsGrid;
