import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image"

const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });

const ProductItem = () => {
  return (
    <div className="w-[285px] h-[446px] bg-[#F4F5F7]">
        <Image src="/image 1.png" alt="product" width={285} height={301} objectFit="cover" />
        <div className="w-full h-full flex flex-col gap-4 pt-4 pl-4">
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