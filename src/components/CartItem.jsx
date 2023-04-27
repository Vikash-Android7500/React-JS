
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { FaRegWindowClose } from "react-icons/fa";

const CartItem = ({item}) => {
  const { title, description, image, price } = item;
  const dispatch =useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Remove Item")
  }

  return (
    <div className="w-10/12 flex justify-center items-center gap-10 mb-5 p-5 rounded-lg shadow-md shadow-slate-200">
      <div className="w-[250px]">
        <img className="w-[100%]" src={image} />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div>
          <h1 className="text-xl">{title}</h1>
          <p className="opacity-50">
            {description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">${price}</span>

          <button className="text-sm"
           onClick={removeFromCart}
           >
              <FaRegWindowClose fontSize={34} color="red"/>
      
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
