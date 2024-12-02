import { Heart, LucideIcon, Search, ShoppingBasket, User } from "lucide-react";
import { Button } from "../ui/button";
import SVG from "./svg";

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
  },
  {
    icon: ShoppingBasket,
    label: "Cart",
    href: "/cart",
  },
];
const NavActions = () => {
  return (
    <div className="flex items-center gap-6 md:flex-row flex-col">
      {actions.map(({ icon:Icon, label, href }, index) => (
        <Button
          key={index}
          variant="ghost"
          className="text-black font-medium text-base rounded-full"
        >
          <Icon />
        </Button>
      ))}
    </div>
  );
};

export default NavActions;
