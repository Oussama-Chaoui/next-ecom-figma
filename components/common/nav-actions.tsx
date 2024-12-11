import { Heart, LucideIcon, Search, ShoppingBasket, User } from "lucide-react";
import { Button } from "../ui/button";
import SVG from "./svg";
import { Cart } from "./cart";

const actions: {
  icon: LucideIcon;
  label: string;
  href: string;
}[] = [
  {
    icon: User,
    label: "profile",
    href: "/",
  },
  {
    icon: Search,
    label: "Search",
    href: "/search",
  },
  {
    icon: Heart,
    label: "Heart",
    href: "/heart",
  }
];
const NavActions = () => {
  return (
    <div className="md:flex items-center xl:gap-6 lg:gap-1  hidden">
      {actions.map(({ icon:Icon, label, href }, index) => (
        <Button
          key={index}
          variant="ghost"
          className="text-black font-medium text-base rounded-full"
        >
          <Icon />
        </Button>
      ))}
      <Cart />
    </div>
  );
};

export default NavActions;
