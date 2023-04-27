import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="bg-slate-800 shadow-lg shadow-slate-400 mb-10 p-2">
      <div className="flex flex-row justify-around">
        <NavLink to="/">
          <div>
            <FaHome fontSize={48} color="#90EE90" />
          </div>
        </NavLink>

        <div className="flex flex-row gap-5 justify-center items-center">
          <NavLink to="/">
            <p className="text-white hover:text-green-300">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="flex flex-col justify-center items-center">
              {cart.length > 0 && (
                <span
                  className="bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
              <FaShoppingCart fontSize={34} color="white" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
