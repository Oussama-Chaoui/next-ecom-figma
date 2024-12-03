import Link from "next/link";
import { Button } from "../ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shop" },
  { href: "/", label: "About" },
  { href: "/", label: "Contact" },
];
const poppins = Poppins({ subsets: ['latin'],weight:["400","500","600","700"] });


const Navigation = () => {
  return (
    <div className="flex items-center gap-8 md:flex-row flex-col">
      {links.map(({ href, label },index) => (
        <Link href={href} key={index}>
          <Button className={cn(poppins.className,"text-black font-medium text-base")} variant={"link"}>
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
