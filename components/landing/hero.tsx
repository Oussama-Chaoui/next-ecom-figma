import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import Image from "next/image"
const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });
const Hero = () => {
  return (
    <div className="h-screen w-full">
        <Image src="/hero.png" alt="hero" layout="fill" objectFit="cover" />
        <div className="md:h-[500px] md:w-[600px] h-[430px] w-[320px] sm:w-[400px] sm:h-[380px] absolute top-1/3 lg:right-40 right-8 bg-primaryLight text-black rounded-[10px] px-6 pt-6 md:px-12 md:pt-20" >
            <h2 className={cn(poppins.className,"text-base font-semibold tracking-widest mb-4")}>
              New Arrival
            </h2>
            <h1 className={cn(poppins.className,"md:text-6xl text-4xl text-primarySite font-bold mb-2")}>
              Discover Our
            </h1>
            <h1 className={cn(poppins.className,"md:text-6xl text-4xl text-primarySite font-bold mb-4")}>
              New Collection
            </h1>
            <p className={cn(poppins.className,"font-medium md:text-lg text-base tracking-wide mb-8")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button className={cn(poppins.className,"text-white font-bold tracking-widest uppercase bg-primarySite px-[72px] py-[25px] hover:text-black focus:outline-none")}>
                Shop Now
            </button>
        </div>
    </div>
  )
}

export default Hero