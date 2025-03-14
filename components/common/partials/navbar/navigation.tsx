import Link from "next/link";
import { Button } from "../../../ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/components/lib/utils/twMerge";

const links = [
  { href: "/", label: "Home" },
  { href: "/listing", label: "Listings" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] });


const Navigation = () => {
  return (
    <div className="md:flex items-center xl:gap-8 lg:gap-2 hidden ">
      {links.map(({ href, label }, index) => (
        <Link href={href} key={index}>
          <Button className={cn(poppins.className, "text-black font-medium text-base")} variant={"link"}>
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
