import Icon from "./icon"
import NavActions from "./nav-actions"
import Navigation from "./navigation"

const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-center bg-white fixed top-0 z-50">
        <div className="w-[90%] h-[41px] flex items-center justify-between">
            <Icon title="Furniro" />
            <Navigation />
            <NavActions />
        </div>
    </div>
  )
}

export default Navbar