import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const Cart= useSelector((state)=>state.mycart.cart);
   const Mylen= Cart.length;
   const navigate= useNavigate();
    return(
        <>
         <div id="header">
         <FaShoppingCart onClick={()=>{navigate("/cart")}} /> {Mylen}
         </div>
        </>
    )
}

export default Header;