import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import PayComplete from "./pages/PayComplete";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import MensWear from "./pages/Category/Mens"; 
import WomensWear from "./pages/Category/Womens"; 
import ChildrenWear from "./pages/Category/Children";
import PartyWear from "./pages/Category/Party";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="paycomplete" element={<PayComplete />} />
          <Route path="prodetail/:id" element={<ProductDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
          <Route path="mens-wear" element={<MensWear />} />
          <Route path="womens-wear" element={<WomensWear />} />
          <Route path="children-wear" element={<ChildrenWear />} />
          <Route path="party-wear" element={<PartyWear />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
