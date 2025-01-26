import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Updated links for a real estate context
const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const helps = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/faq", label: "FAQ" },
];

const Footer = () => {
  return (
    <footer
      className={cn(
        poppins.className,
        "w-full md:px-16 px-10 md:py-12 py-6 flex items-center justify-center bg-[#f8f8f8] border-t-2 border-gray-200"
      )}
    >
      <div className="max-w-screen-2xl w-full flex flex-col gap-y-10">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-8">
          {/* Brand Section */}
          <div className="flex flex-col md:w-[30%] w-full gap-y-6">
            <h1 className="md:text-3xl text-2xl font-bold text-black">Estato.</h1>
            <p className="text-gray-600 md:max-w-[285px] text-sm leading-relaxed">
              Premium real estate listings designed for elegance and quality living. Find your dream home with Estato.
            </p>
            <p className="text-sm text-gray-500">
              400 Avenue Hassan II, Casablanca, Morocco
            </p>
          </div>

          {/* Links Section */}
          <div className="flex md:w-[40%] w-full justify-around">
            {/* Useful Links */}
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
              {links.map(({ href, label }, index) => (
                <Link href={href} key={index}>
                  <Button
                    className={cn(
                      poppins.className,
                      "text-gray-700 font-medium text-sm pl-0 hover:text-primarySite transition"
                    )}
                    variant={"link"}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Help Section */}
            <div className="flex flex-col gap-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Support</h3>
              {helps.map(({ href, label }, index) => (
                <Link href={href} key={index}>
                  <Button
                    className={cn(
                      poppins.className,
                      "text-gray-700 font-medium text-sm pl-0 hover:text-primarySite transition"
                    )}
                    variant={"link"}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col md:w-[30%] w-full gap-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Stay Updated</h3>
            <p className="text-sm text-gray-600">
              Subscribe to receive the latest property listings and market trends directly to your inbox.
            </p>
            <div className="flex w-full gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm focus:outline-none border-gray-300"
              />
              <Button className="bg-primarySite text-white px-6 py-2 hover:bg-opacity-90 transition">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Estato. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms-of-service">
              <span className="hover:text-primarySite transition cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/privacy-policy">
              <span className="hover:text-primarySite transition cursor-pointer">
                Privacy Policy
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
