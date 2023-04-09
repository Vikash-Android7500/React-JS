import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../Redux/Slices/CounterSlice";

const CounterApp = () => {
     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();
     return (
          <div className="bg-orange-100 rounded-xl text-center shadow-lg shadow-slate-500 pb-10 ">
               <h1 className="text-3xl p-5 font-extrabold text-slate-800">
                    Redux Counter App
               </h1>
               <div className=" flex justify-center items-center gap-10 mt-10">
                    <button
                         className="duration-100 uppercase bg-orange-300 p-2 rounded-md hover:bg-orange-200 active:bg-orange-400"
                         onClick={() => dispatch(decrement())}
                    >
                         Decrement
                    </button>

                    <span className="font-bold text-2xl">{count}</span>

                    <button
                         className="duration-100 uppercase bg-orange-300 p-2 rounded-md hover:bg-orange-200 active:bg-orange-400"
                         onClick={() => dispatch(increment())}
                    >
                         Increment
                    </button>
               </div>

               <div className="mt-5">
                    <button
                         className="duration-150 uppercase bg-orange-300 p-2 rounded-md active:bg-red-400"
                         onClick={() => dispatch(reset())}
                    >
                         Reset
                    </button>
               </div>
          </div>
     );
};

export default CounterApp;
