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
        "w-full px-16 py-12 flex items-center justify-center bg-white border-t-2 border-t-[#D9D9D9]"
      )}
    >
      <div className="max-w-screen-2xl w-full flex flex-col">
        <div className="w-full flex justify-between">
          <div className="flex flex-col w-[30%] gap-y-8">
            <h1 className="text-2xl font-bold text-black">Funiro.</h1>
            <p className="text-[#9F9F9F] max-w-[285px]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="flex w-[30%] justify-between">
            <div className="flex flex-col gap-y-8">
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
            <div className="flex flex-col gap-y-8">
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
          <div className="flex flex-col w-[30%] gap-y-8">
            <h3 className="font-medium text-[#9F9F9F]">Newsletter</h3>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="w-full flex border-t border-t-[#D9D9D9] mt-8 pt-8">
            <p>2023 furino. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
