import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
const Testimonials = (props) => {
     let reviews = props.reviews;
     const [index, setIndex] = useState(0);

     function LeftShiftHandaler () {
          if (index - 1 < 0) {
               setIndex(reviews.length - 1);
          }
          else {
               setIndex(index - 1);
          }
     }

     function RightShiftHandaler () {
          if (index + 1 >= reviews.length) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
     }

     function SurpriseMeHedaler () {
         let randomIndex = Math.floor(Math.random() * reviews.length);
         setIndex(randomIndex);
     }

     return (
       <div className="w-[85vw] md:w-[768px] bg-violet-100 flex flex-col justify-center items-center mt-10 p-10 transition-all duration-300 hover:shadow-xl shadow-violet-300 rounded-md">
         <Card  review = {reviews[index]}/>

         <div className="mx-auto flex gap-5 mt-5 items-center text-violet-400 font-bold text-2xl">
           <button
             onClick={LeftShiftHandaler}
             className="hover:text-violet-600 active:text-violet-300"
           >
             <FiChevronLeft />
           </button>

           <button
             onClick={RightShiftHandaler}
             className="hover:text-violet-600 active:text-violet-300"
           >
             <FiChevronRight />
           </button>
         </div>

         <div className="mt-5 text-center">
           <button
             onClick={SurpriseMeHedaler}
             className="bg-violet-500 text-lg rounded-lg transition-all duration-200 py-2 px-10 font-bold hover:bg-violet-400 text-white active:bg-violet-600"
           >
             Surprise Me
           </button>
         </div>
       </div>
     );
     
}

export default Testimonials;