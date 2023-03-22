import React from "react";
import Testimonials from ".//Componets/Testimonials"
import reviews from "./data";


const App = () => {
  return (
      <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-violet-200">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1"/>
          <Testimonials reviews = {reviews}/>
        </div>
      </div>
  );
};

export default App;