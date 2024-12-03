import { cn } from "@/lib/utils";
import ProductItem from "./product-item";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });

const ProductsGrid = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center px-16 py-12 w-full bg-white">
      <div className="text-center text-black flex flex-col">
            <h2 className={cn(poppins.className,"text-5xl font-bold text-[#3A3A3A]")}>
                Our Products
            </h2>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-2xl w-full">

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
