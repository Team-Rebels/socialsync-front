import { Link } from "react-router-dom";
import K from "../constants";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-10 fixed w-full left-0 top-0 bg-[#F1F1FB] h-[30px] ">
      <div className="size-[200px] mt-[-10px]">
        <img src={logo} alt="Logo" />
      </div>
      <div>

      </div>
      <div className="space-x-8 mt-[-10px] text-[17px]">
        {
          K.NAVLINKS.map(
            (item,index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
      </div>
    </div>
  )
}

export default Navbar;