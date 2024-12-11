import { cn } from "@/lib/utils";
import ProductItem from "./product-item";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });

const ProductsGrid = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center md:px-16 px-10 py-12 w-full bg-white">
      <div className="text-center text-black flex flex-col">
            <h2 className={cn(poppins.className,"md:text-5xl text-4xl font-bold text-[#3A3A3A]")}>
                Our Products
            </h2>
        </div>
      <div className="w-full justify-items-center grid gap-y-10 grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] justify-between max-w-screen-2xl">

        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <button className={cn(poppins.className,"w-[245px] h-[48px] bg-white flex items-center justify-center focus:outline-none text-primarySite font-semibold border-[2px] border-primarySite")}>
        Show More
      </button>
    </div>
  );
};

export default ProductsGrid;
