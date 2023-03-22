import React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Card = (props) => {
     let review = props.review;
     return (
       <div className="flex flex-col md:relative">
         {/* images */}
         <div className="absolute top-[-7rem] z-10 mx-auto">
           <img
             className="w-[140px] h-[140px] aspect-square rounded-full z-[1]"
             src={review.image}
           />
           <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-2 z-[-1]"></div>
         </div>

         {/* Names */}
         <div className="text-center mt-7">
           <p className="font-bold text-2xl capitalize">{review.name}</p>
         </div>

         <div className="text-center mt-1">
           <p className="text-violet-300 uppercase text-sm">{review.job}</p>
         </div>

         <div className="mx-auto mt-5 text-violet-400">
           <FaQuoteLeft />
         </div>

         <div className="text-center mt-4 text-slate-500">{review.text}</div>

         <div className="mx-auto mt-5 text-violet-400">
           <FaQuoteRight />
         </div>

         
       </div>
     );
};

export default Card;