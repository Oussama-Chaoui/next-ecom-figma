"use client"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });


const Designs = () => {
  const [image,setImage] = useState<string>("/Rectangle 24.png");

  return (
    <div className=" flex-col gap-8  items-center px-16 py-12 w-full  bg-primaryLight flex justify-center min-h-[670px] overflow-hidden">
      <div className="max-w-screen-2xl w-full flex gap-4 ">
        <div className="min-w-[33%] max-w-[40%] flex flex-col items-start justify-center gap-4">
          <h1 className={cn(poppins.className,"text-[40px] font-bold text-[#3A3A3A]")}>
            50+ Beautiful rooms inspiration
          </h1>
          <p className={cn(poppins.className,"text-[#616161] font-medium")}>
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button onClick={()=>setImage('/Rectangle 25.png')} className={cn(poppins.className,"text-white font-semibold tracking-widest uppercase bg-primarySite px-[72px] py-[25px] hover:text-black focus:outline-none mt-6")}>
            Explore More
          </button>
        </div>
        <div className="w-[404px] h-full flex items-center justify-center">
          <div className="w-[404px] h-[582px] relative bg-slate-500">
            <Image src={image} alt="living room"   fill={true} />
            <div className="absolute bottom-5 left-5 h-[130px] w-[219px] bg-white bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center">
              <div className="flex items-center">
                <p className={cn(poppins.className,"text-[#616161] font-medium ")}>01</p>
                <p className={cn(poppins.className,"text-[#616161] font-medium ml-10 relative")}>
                  <span className="absolute left-[-52%] translate-y-[50%] translate-x-[52%] bottom-[50%] w-8 h-[2px] bg-[#616161]"></span>
                  Living Room
                </p>
              </div>
              <h1 className={cn(poppins.className,"font-semibold text-[28px] text-[#3A3A3A]")}>Inner Peace</h1>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="flex h-[486px] items-start gap-8 absolute">
            <div className="w-[372px] h-[486px] relative bg-slate-500">
              <Image src={"/Rectangle 25.png"} alt="bedroom" width={372} height={486} objectFit="cover" />
            </div>
            <div className="w-[372px] h-[486px] relative bg-slate-500">
              <Image src={"/Rectangle 40.png"} alt="kitchen" width={372} height={486} objectFit="cover" />
            </div>
            <div className="w-[372px] h-[486px] relative bg-slate-500">
              <Image src={"/Rectangle 25.png"} alt="bedroom" width={372} height={486} objectFit="cover" />
            </div>
            <div className="w-[372px] h-[486px] relative bg-slate-500">
              <Image src={"/Rectangle 40.png"} alt="kitchen" width={372} height={486} objectFit="cover" />
            </div>
          </div>
          <div className="flex gap-4 mt-[522px] items-center ">
            <div className={cn("rounded-full border-primarySite h-8 w-8  flex items-center justify-center",image === "/Rectangle 24.png" && "border-[1px]")}>
              <div className={cn("rounded-full bg-slate-600 h-4 w-4",image === "/Rectangle 24.png" && "bg-primarySite")}></div>
            </div>
            <div className={cn("rounded-full border-primarySite h-8 w-8  flex items-center justify-center",image === "/Rectangle 25.png" && "border-[1px]")}>
              <div className={cn("rounded-full bg-slate-600 h-4 w-4",image === "/Rectangle 25.png" && "bg-primarySite")}></div>
            </div>
            <div className={cn("rounded-full border-primarySite h-8 w-8  flex items-center justify-center",image === "/Rectangle 40.png" && "border-[1px]")}>
              <div className={cn("rounded-full bg-slate-600 h-4 w-4",image === "/Rectangle 40.png" && "bg-primarySite")}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designs;
