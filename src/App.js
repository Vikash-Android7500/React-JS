import React, { useState } from "react";
import data from './data';
import Tours from "./Componanets/Tours";
import Fave from './/Componanets/Fave.png'

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0 ) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="refresh-btn" onClick={() => setTours(data)}>
          Refresh
        </button>
        <img src={Fave} alt="Logo"></img>
      </div>
    );
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;
