import logo from '../logo.svg'
import Style from '../Componets/Header_Style.css'
import React, {useState} from 'react'

function Plus_minus() {

    let [count, setCounter] = useState(0);

    function decrease() {
       setCounter(count - 1);
    }

    function increase() {
      setCounter (count + 1);
    }

    function reset() {
      setCounter (count = 0)
    }

    // UI Design
  return (
    <div class="wrapper">
      <h1>Simple React Counter App</h1>
      <div class="container">
        <span class="zero">{count}</span>
        <div class="button-container">
          <button class="btn btn1" onClick={decrease}></button>
          <button class="btn btn2" onClick={reset}></button>
          <button class="btn btn3" onClick={increase}></button>
        </div>
      </div>
    </div>
  );
}



export default Plus_minus;
