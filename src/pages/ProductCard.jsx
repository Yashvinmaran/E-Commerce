import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../wishlistSlice";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist.wishlist);
    
    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleWishlist = () => {
        if (isInWishlist) {
            dispatch(removeFromWishlist(product.id));
        } else {
            dispatch(addToWishlist(product));
        }
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p><PiCurrencyInrBold /> {product.price}</p>
            
            <button onClick={handleWishlist} className="wishlist-btn">
                {isInWishlist ? <FaHeart className="wishlist-icon filled" /> : <FaRegHeart className="wishlist-icon" />}
                {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
        </div>
    );
};

export default ProductCard;
