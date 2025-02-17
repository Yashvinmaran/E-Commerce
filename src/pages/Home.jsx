import Carousel from 'react-bootstrap/Carousel';
import b1 from "../component/images/b1.jpg";
import b2 from "../component/images/b2.jpg";
import b3 from "../component/images/b3.jpg";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [prodata, setProData] = useState([]);
    const [wishlist, setWishlist] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadData = async () => {
        let api = "http://localhost:3000/product";
        const response = await axios.get(api);
        setProData(response.data);
    };

    const loadWishlist = async () => {
        const response = await axios.get("http://localhost:3000/wishlist");
        const wishlistData = response.data.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
        }, {});
        setWishlist(wishlistData);
    };

    useEffect(() => {
        loadData();
        loadWishlist();
    }, []);

    const toggleWishlist = async (id) => {
    try {
        if (wishlist[id]) {
            await axios.delete(`http://localhost:3000/wishlist/${id}`);
            setWishlist((prev) => {
                const newWishlist = { ...prev };
                delete newWishlist[id];
                return { ...newWishlist }; 
            });
        } else {
            const product = prodata.find(p => p.id === id);
            await axios.post("http://localhost:3000/wishlist", product);
            setWishlist((prev) => ({
                ...prev,
                [id]: true
            }));
        }
    } catch (error) {
        console.error("Error toggling wishlist:", error);
    }
};


    const addToCart = async (product, e) => {
        e.stopPropagation();
        dispatch(addtoCart({
            id: product.id,
            name: product.name,
            desc: product.description,
            price: product.price,
            image: product.image,
            qnty: 1
        }));
        await axios.post("http://localhost:3000/cart", product);
    };

    return (
        <>
            <Carousel className="custom-carousel" interval={3000} fade>
      <Carousel.Item>
        <img src={b1} className="carousel-img" alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="carousel-overlay">
            <h3 className="carousel-title">Discover Fashion Excellence</h3>
            <p className="carousel-text">Explore our latest clothing collection for every occasion.</p>
            <button className="btn btn-main">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={b2} className="carousel-img" alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="carousel-overlay">
            <h3 className="carousel-title">Trendy and Chic</h3>
            <p className="carousel-text">Shop the best of modern fashion with unbeatable quality.</p>
            <button className="btn btn-main">Explore Collection</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={b3} className="carousel-img" alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <div className="carousel-overlay">
            <h3 className="carousel-title">Feel the Summer Vibes</h3>
            <p className="carousel-text">Brighten up your wardrobe with our vibrant summer styles.</p>
            <button className="btn btn-main">Shop Summer Wear</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            <Container className="mt-5">
                <h2 className="text-center section-title">Our Products</h2>
                <Row className="justify-content-center">
                    {prodata.map((product) => (
                        <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
                            <Card className="custom-card" onClick={() => navigate(`/prodetail/${product.id}`)}>
                                <div className="image-container">
                                    <Card.Img variant="top" src={product.image} className="product-image" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="product-title">{product.name}</Card.Title>
                                    <Card.Text className="product-description">
                                        {product.description}
                                    </Card.Text>
                                    <h4 className="product-price">₹{product.price}</h4>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Button 
                                            variant="primary"
                                            className="w-100 add-to-cart-btn"
                                            onClick={(e) => addToCart(product, e)}>
                                            Add to Cart
                                        </Button>
                                        <Button 
                                            variant="light" 
                                            className={`wishlist-icon ${wishlist[product.id] ? 'wishlist-active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleWishlist(product.id);
                                            }}>
                                            <FontAwesomeIcon icon={faHeart} color={wishlist[product.id] ? "red" : "gray"} />
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <style>
                {`
                    /* Carousel Styling */

                    

                    .custom-carousel {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.carousel-img:hover {
  transform: scale(1.1);
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
  text-align: left;
  color: white;
}

.carousel-caption .overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
}

.carousel-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.carousel-text {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.carousel-caption .btn {
  font-size: 1.1rem;
  padding: 10px 20px;
  background-color: #ff5722;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.carousel-caption .btn:hover {
  background-color: #e64a19;
}

                    .carousel-img {
                        width: 100%;
                        height: 600px;
                        object-fit: cover;
                        border-radius: 10px;
                    }
                    .carousel-title {
                        font-size: 2rem;
                        font-weight: bold;
                        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
                    }
                    .carousel-text {
                        font-size: 1.2rem;
                        text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
                    }

                    
                    .section-title {
                        font-size: 2rem;
                        font-weight: bold;
                        color: #333;
                        margin-bottom: 20px;
                        text-transform: uppercase;
                    }

                    /* Product Card Styling */
                    .custom-card {
                        transition: transform 0.3s ease-in-out;
                        cursor: pointer;
                        border-radius: 15px;
                        overflow: hidden;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        background: #fff;
                        padding: 10px;
                        border: none;
                    }
                    .custom-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
                    }

                    /* Ensuring Image Fit Inside Card */
                    .image-container {
                        width: 100%;
                        height: 350px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #f8f8f8;
                        border-radius: 10px;
                    }
                    .product-image {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                    }

                    /* Product Info Styling */
                    .product-title {
                        font-size: 1.4rem;
                        font-weight: bold;
                        color: #222;
                    }
                    .product-description {
                        font-size: 1rem;
                        color: #666;
                        margin-bottom: 10px;
                    }
                    .product-price {
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: #28a745;
                    }

                    /* Add to Cart Button */
                    .add-to-cart-btn {
                        background-color: #007bff; /* Vibrant blue */
                        border: none;
                        font-weight: bold;
                        padding: 10px;
                        border-radius: 10px;
                        transition: 0.3s;
                    }
                    .add-to-cart-btn:hover {
                        background-color: #0056b3; /* Darker blue on hover */
                    }

                    /* Wishlist Icon */
                    .wishlist-icon {
                        color: #ff4081; /* Default color for the heart icon */
                        font-size: 1.5rem;
                        cursor: pointer;
                        margin-left: 10px;
                    }

                    /* Responsive Adjustments */
                    @media (max-width: 768px) {
                        .carousel-img {
                            height: 300px;
                        }
                        .image-container {
                            height: 200px;
                        }
                        .section-title {
                            font-size: 1.5rem;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Home;