import { Cart } from "../partials/navbar/cart";
import Icon from "../partials/navbar/icon";
import NavActions from "../partials/navbar/nav-actions";
import Navigation from "../partials/navbar/navigation";
import { ResponsiveNavbar } from "../partials/navbar/responsive-navbar";

const Navbar = () => {
  return (
    <div className="w-full md:h-[100px] h-16 flex items-center justify-center bg-white fixed top-0 z-50 ">
      <div className="max-w-screen-2xl h-[41px] flex items-center justify-between sm:px-8 px-2 w-full">
        <Icon title="Estato" />
        <Navigation />
        <NavActions />
        <div className="flex gap-1 md:hidden">
          <Cart />
          <ResponsiveNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
