import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });


const Designs = () => {
  return (
    <div className=" flex-col gap-8  items-center px-16 py-12 w-full  bg-primaryLight flex justify-center min-h-[670px]">
      <div className="max-w-screen-2xl w-full flex">
        <div className="w-1/3 h-full flex flex-col items-start gap-4">
          <h1 className={cn(poppins.className,"text-5xl font-bold text-[#3A3A3A]")}>
          50+ Beautiful rooms inspiration
          </h1>
          <p className={cn(poppins.className,"text-[#616161] font-medium")}>
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className={cn(poppins.className,"text-white font-semibold tracking-widest uppercase bg-primarySite px-[72px] py-[25px] hover:text-black focus:outline-none mt-6")}>
          Explore More
        </button>
        </div>
      </div>
    </div>
  );
};

export default Designs;
