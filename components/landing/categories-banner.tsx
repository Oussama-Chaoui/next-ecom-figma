import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });

const CategoriesBanner = () => {
  return (
    <div className="w-full md:px-20 px-10 py-10 bg-white flex flex-col gap-12 items-center">
        <div className="text-center text-black flex flex-col gap-2">
            <h2 className={cn(poppins.className,"md:text-3xl font-bold text-2xl")}>
                Browse The Range
            </h2>
            <p className={cn(poppins.className,"opacity-50 md:text-xl text-sm")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="flex flex-wrap max-w-screen-2xl justify-between ">
            <div className="lg:w-[30%] md:w-[40%] w-[100%] md:mt-0 rounded-[10px] flex flex-col items-center gap-4 mt-4">
                <Image src="/Mask Group.png" alt="image-1" width={381} height={480}  />
                <h2 className={cn(poppins.className,"md:text-2xl text-lg font-semibold")}>
                Dining
                </h2>
            </div>
            <div className="lg:w-[30%] md:w-[40%] w-[100%] md:mt-0 rounded-[10px] flex flex-col items-center gap-4 mt-4">
                <Image src="/Image-living room.png" alt="image-1" width={381} height={480}  />
                <h2 className={cn(poppins.className,"md:text-2xl text-lg font-semibold")}>
                Living
                </h2>
            </div>
            <div className="lg:w-[30%] md:w-[40%] md:mt-4 lg:mt-0 md:ml-[30%] lg:ml-0 w-[100%] sm:mt-4 rounded-[10px] flex flex-col items-center gap-4 mt-4">
                <Image src="/Mask Group 2.png" alt="image-1" width={381} height={480}  />
                <h2 className={cn(poppins.className,"md:text-2xl text-lg font-semibold")}>
                Bedroom
                </h2>
            </div>
        </div>
    </div>
  )
}

export default CategoriesBanner