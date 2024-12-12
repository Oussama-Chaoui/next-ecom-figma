import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shop" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
]; // TODO: add global constants for links
const helps = [
  { href: "/", label: "Payment Options" },
  { href: "/", label: "Returns" },
  { href: "/", label: "Privacy Policies" },
]; // TODO: add global constants for help
const Footer = () => {
  return (
    <div
      className={cn(
        poppins.className,
        "w-full md:px-16 px-10 md:py-12 py-6 flex items-center justify-center bg-white border-t-2 border-t-[#D9D9D9]"
      )}
    >
      <div className="max-w-screen-2xl w-full flex flex-col">
        <div className="w-full flex justify-between ">
          <div className="flex flex-col md:w-[30%] w-[48%] md:gap-y-8 gap-y-2">
            <h1 className="md:text-2xl text-lg font-bold text-black">Funiro.</h1>
            <p className="text-[#9F9F9F] md:max-w-[285px] md:text-base text-xs">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="flex md:w-[30%] justify-between">
            <div className="md:flex hidden flex-col gap-y-8">
              <h3 className="font-medium text-[#9F9F9F]">Links</h3>
              {links.map(({ href, label }, index) => (
                <Link href={href} key={index}>
                  <Button
                    className={cn(
                      poppins.className,
                      "text-black font-medium text-base ml-0 pl-0"
                    )}
                    variant={"link"}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="md:flex hidden flex-col gap-y-8">
              <h3 className="font-medium text-[#9F9F9F]">Help</h3>
              {helps.map(({ href, label }, index) => (
                <Link href={href} key={index}>
                  <Button
                    className={cn(
                      poppins.className,
                      "text-black font-medium text-base ml-0 pl-0"
                    )}
                    variant={"link"}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:gap-y-8 gap-y-2 md:w-[30%] w-[48%]">
            <h3 className="font-medium text-[#9F9F9F] ">Newsletter</h3>
            <div className="flex md:flex-row  flex-col w-full max-w-sm items-center gap-2">
              <Input type="email" className="md:text-base text-xs" placeholder="Email" />
              <Button type="submit" className="md:inline-flex hidden">Subscribe</Button>
              <Button type="submit" size={"sm"} className="md:hidden inline-flex w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex border-t border-t-[#D9D9D9] md:mt-8 md:pt-8 mt-2 pt-2">
            <p className="md:text-base text-xs">2023 furino. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
