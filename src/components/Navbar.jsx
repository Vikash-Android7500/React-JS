import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-slate-800 shadow-lg shadow-slate-400 mb-10 p-2">
      <div className="flex flex-row justify-around">
        <NavLink to="/">
          <div>
            <FaHome fontSize={48} color="#90EE90" />
          </div>
        </NavLink>

        <div className="flex flex-row gap-4 justify-center items-center">
          <NavLink to="/">
            <p className="text-white">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart fontSize={34} color="white"/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
