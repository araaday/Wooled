import Home from "./pages/Home";
import MenItemPage from "./pages/MenItemPage";
import Item from "./pages/Item";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import { Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenItemPage />} />
        <Route path="/women" element={<MenItemPage />} />
        <Route path="/child" element={<MenItemPage />} />
        <Route path="/sale" element={<MenItemPage />} />
        <Route path="/item" element={<Item />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>


    </>


  );
};

export default App;
