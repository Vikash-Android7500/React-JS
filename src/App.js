import "./App.css";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ScrollButton from "./components/ScrollBtn/ScrollButton";


const App = () => {
  return (
    <div>
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <ScrollButton/>
    </div>
  );
};

export default App;