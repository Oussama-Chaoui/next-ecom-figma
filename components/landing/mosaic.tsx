import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] });

const Mosaic = () => {
  const images = [
    { url: "/Rectangle 36.png", alt: "Image 1" },
    { url: "/Rectangle 38.png", alt: "Image 2" },
    { url: "/Rectangle 37.png", alt: "Image 3" },
    { url: "/Rectangle 39.png", alt: "Image 4" },
    { url: "/Rectangle 40.png", alt: "Image 5" },
    { url: "/Rectangle 43.png", alt: "Image 6" },
    { url: "/Rectangle 45.png", alt: "Image 7" },
    { url: "/Rectangle 41.png", alt: "Image 8" },
    { url: "/Rectangle 44.png", alt: "Image 9" },
  ];

  return (
    <div className={cn(poppins.className, "w-full overflow-hidden p-10 bg-white")}>
      <div className="flex flex-col gap-4 items-center justify-center mb-[-20px]">
        <h2 className="text-[20px] font-semibold text-[#616161]">Showcase Your Dream Property With</h2>
        <h2 className="text-[40px] font-bold text-[#3A3A3A]">#LiveWithEstato</h2>
      </div>
      <div className="flex gap-5 justify-center ">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-5 self-end">
            <div className="bg-red-500 h-[382px] w-[274px]">
              <Image src={images[0].url} alt={images[0].alt} width={274} height={382} />
            </div>
            <div className="bg-blue-500 h-[312px] w-[451px] self-end">
              <Image src={images[1].url} alt={images[1].alt} width={451} height={312} />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-red-500  h-[323px] w-[381px]">
              <Image src={images[2].url} alt={images[2].alt} width={381} height={323} />
            </div>
            <div className="bg-blue-500 h-[242px] w-[344px] ">
              <Image src={images[3].url} alt={images[3].alt} width={344} height={242} />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-[392px] w-[295px] bg-blue-500">
            <Image src={images[4].url} alt={images[4].alt} width={295} height={392} />
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-5">
            <div className="bg-red-500 h-[348px] w-[290px] self-end">
              <Image src={images[5].url} alt={images[5].alt} width={290} height={348} />
            </div>
            <div className="bg-blue-500 h-[433px] w-[425px]">
              <Image src={images[6].url} alt={images[6].alt} width={425} height={433} />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-red-500  h-[242px] w-[178px]">
              <Image src={images[7].url} alt={images[7].alt} width={178} height={242} />
            </div>
            <div className="bg-blue-500 h-[196px] w-[258px] ">
              <Image src={images[8].url} alt={images[8].alt} width={258} height={196} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mosaic