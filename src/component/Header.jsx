import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import logo from "./images/Logo.jpg";
import axios from "axios";
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const Cart = useSelector((state) => state.mycart.cart);
    const Mylen = Cart.length;
    const navigate = useNavigate();
    const location = useLocation();
    const [wishlistItems, setWishlistItems] = useState([]);
    const [showWishlistCard, setShowWishlistCard] = useState(false);

    const loadWishlist = async () => {
        try {
            const response = await axios.get("http://localhost:3000/wishlist");
            setWishlistItems(response.data);
        } catch (error) {
            console.error("Error loading wishlist:", error);
        }
    };

    useEffect(() => {
        loadWishlist();
    }, []);

    const toggleWishlistCard = () => {
        setShowWishlistCard(!showWishlistCard);
    };

    return (
        <Navbar expand="lg" className="custom-navbar" sticky="top">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="brand">
                    <img src={logo} alt="" className="brand-logo" /> TrendyThreads
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className={location.pathname === "/home" ? "active-link" : ""}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/cart" className={location.pathname === "/cart" ? "active-link" : ""}>Cart</Nav.Link>
                        <Nav.Link as={Link} to="/search" className={location.pathname === "/search" ? "active-link" : ""}>Search</Nav.Link>
                        
                        <Nav.Item className="category-dropdown">
    <Nav.Link as={Link} to="/home" className={location.pathname === "/cetegory" ? "active-link" : ""}>
        Cetegory <span className="dropdown-arrow">🔽</span>
    </Nav.Link>
    <div className="dropdown-content">
        <Link to="/mens-wear">Mens Wear</Link>
        <Link to="/womens-wear">Womens Wear</Link>
        <Link to="/children-wear">Children Wear</Link>
        <Link to="/party-wear">Party Wear</Link>
    </div>
</Nav.Item>

                    </Nav>

                    <div className="icon-container">
                        <FaSearch className="search-icon" onClick={() => navigate("/search")} />
                        <div className="wishlist-icon-container" onClick={toggleWishlistCard}> 
                            <FaHeart className="wishlist-icon" />
                            <span className="wishlist-count">{wishlistItems.length}</span> 
                        </div>
                        <div className="cart-icon" onClick={() => navigate("/cart")}>
                            <FaShoppingCart className="cart-icon-style" />
                            <span className="cart-count">{Mylen}</span>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
            {showWishlistCard && (
                <Card className="wishlist-card">
                    <Card.Body>
                        <Card.Title>Wishlist Items</Card.Title>
                        <Card.Text>
                            You have {wishlistItems.length} items in your wishlist.
                        </Card.Text>
                        <Button variant="primary" onClick={() => navigate("/wishlist")}>Go to Wishlist</Button>
                        <Button variant="secondary" onClick={toggleWishlistCard} className="ms-2">Close</Button>
                    </Card.Body>
                </Card>
            )}
            <style>
                {`
                    .category-dropdown {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.category-dropdown .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 250px;
    background: linear-gradient(135deg, #ff6b6b, #f7d94c);
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    padding: 10px 15px;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
}

.category-dropdown:hover .dropdown-content {
    display: block;
    transform: scaleY(1);
}

.category-dropdown .dropdown-content a {
    color: #222;
    padding: 10px;
    display: block;
    font-size: 18px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
}

.category-dropdown .dropdown-content a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ff6b6b;
    transform: translateX(5px);
}

.category-dropdown .dropdown-arrow {
    font-size: 18px;
    margin-left: 5px;
    transition: transform 0.3s ease-in-out;
}

.category-dropdown:hover .dropdown-arrow {
    transform: rotate(180deg);
}

.active-link {
    background: rgba(255, 255, 255, 0.2);
    font-weight: bold;
    color: #ff6b6b !important;
    border-radius: 10px;
}

.category-dropdown:hover .nav-link {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    transform: translateY(-3px);
}

                    .custom-navbar {
                        background: linear-gradient(135deg, #ff6b6b, #f7d94c);
                        padding: 15px 25px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    }
                    .brand {
                        font-size: 24px;
                        font-weight: bold;
                        color: #222;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    }
                    .brand-logo {
                        width: 80px;
                        height: 60px;
                        border-radius: 8px;
                        transition: transform 0.3s ease-in-out;
                    }
                    .brand:hover .brand-logo {
                        transform: scale(1.1);
                    }
                    .nav-link {
                        font-size: 18px;
                        color: #222 !important;
                        transition: all 0.3s ease-in-out;
                        padding: 12px 18px;
                        border-radius: 10px;
                        margin: 0 8px;
                    }
                    .nav-link:hover {
                        background: rgba(255, 255, 255, 0.2);
                        color: #ff6b6b !important;
                        transform: translateY(-2px);
                    }
                    .active-link {
                        background: rgba(255, 255, 255, 0.3);
                        font-weight: bold;
                        color: #ff6b6b !important;
                        border-radius: 10px;
                    }
                    .category-dropdown {
                        position: relative;
                    }
                    .category-dropdown .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: white;
                        min-width: 200px;
                        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
                        z-index: 1;
                    }
                    .category-dropdown:hover .dropdown-content {
                        display: block;
                    }
                    .dropdown-content a {
                        color: #222;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block;
                    }
                    .dropdown-content a:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                        color: #ff6b6b;
                    }
                    .icon-container {
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        margin-left: 30px;
                    }
                    .search-icon, .cart-icon, .wishlist-icon {
                        cursor: pointer;
                        font-size: 24px;
                        color: #222;
                        transition: transform 0.3s;
                        padding: 8px;
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 10px;
                    }
                    .search-icon:hover, .cart-icon:hover, .wishlist-icon:hover {
                        transform: scale(1.2);
                        background: rgba(255, 255, 255, 0.4);
                    }
                    .cart-icon {
                        position: relative;
                    }
                    .cart-count {
                        position: absolute;
                        top: -5px;
                        right: -10px;
                        background: #ff6b6b;
                        color: #fff;
                        font-weight: bold;
                        font-size: 14px;
                        padding: 5px 8px;
                        border-radius: 50%;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                    }
                    .wishlist-icon-container {
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        position: relative;
                    }
                    .wishlist-icon {
                        font-size: 24px;
                        color: #222;
                        transition: transform 0.3s;
                        padding: 8px;
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 10px;
                    }
                    .wishlist-icon:hover {
                        transform: scale(1.2);
                        background: rgba(255, 255, 255, 0.4);
                    }
                    .wishlist-count {
                        margin-left: 5px;
                        background: #ff6b6b;
                        color: #fff;
                        font-weight: bold;
                        font-size: 14px;
                        padding: 3px 6px;
                        border-radius: 50%;
                        position: relative;
                        top: -8px;
                        right: -10px;
                    }
                    .wishlist-card {
                        position: absolute;
                        top: 80px;
                        right: 20px;
                        z-index: 1000;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        background-color: white;
                        border-radius: 8px;
                        padding: 20px;
                        width: 250px;
                    }
                `}
            </style>
        </Navbar>
    );
};

export default Header;
