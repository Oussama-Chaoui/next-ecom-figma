import { cn } from "@/components/lib/utils/twMerge";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const CategoriesBanner = () => {
    return (
        <div className="w-full md:px-20 px-10 py-10 bg-white flex flex-col gap-12 items-center">
            <div className="text-center text-black flex flex-col gap-2">
                <h2 className={cn(poppins.className, "md:text-3xl font-bold text-2xl")}>
                    Explore Property Types
                </h2>
                <p className={cn(poppins.className, "opacity-50 md:text-xl text-sm")}>
                    Find the perfect property type for your needs.
                </p>
            </div>
            <div className="flex flex-wrap max-w-screen-2xl justify-between">
                <div className="lg:w-[30%] md:w-[40%] w-[100%] md:mt-0 rounded-[10px] flex flex-col items-center gap-4 mt-4">
                    <Image src="/real-estate-villa.jpg" alt="villa" width={381} height={480} />
                    <h2 className={cn(poppins.className, "md:text-2xl text-lg font-semibold")}>
                        Villas
                    </h2>
                </div>
                <div className="lg:w-[30%] md:w-[40%] w-[100%] md:mt-0 rounded-[10px] flex flex-col items-center gap-4 mt-4">
                    <Image src="/real-estate-apartment.jpg" alt="apartment" width={381} height={480} />
                    <h2 className={cn(poppins.className, "md:text-2xl text-lg font-semibold")}>
                        Apartments
                    </h2>
                </div>
                <div className="lg:w-[30%] md:w-[40%] md:mt-4 lg:mt-0 md:ml-[30%] lg:ml-0 w-[100%] sm:mt-4 rounded-[10px] flex flex-col items-center gap-4 mt-4">
                    <Image src="/real-estate-studio.jpg" alt="land" width={381} height={480} />
                    <h2 className={cn(poppins.className, "md:text-2xl text-lg font-semibold")}>
                        Studios
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CategoriesBanner;
