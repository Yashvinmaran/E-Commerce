import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.jpg";
import b3 from "../images/b3.jpg";
import axios from "axios";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [prodata, setProData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadData = async () => {
        let api = "http://localhost:3000/product";
        const response = await axios.get(api);
        console.log(response.data);
        setProData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            {/* Hero Section with Carousel */}
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img src={b1} className="carousel-img" alt="First slide" />
                    <Carousel.Caption>
                        <h3>Discover the Best Deals</h3>
                        <p>Explore our latest electronic gadgets with amazing discounts.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={b2} className="carousel-img" alt="Second slide" />
                    <Carousel.Caption>
                        <h3>High-Quality Products</h3>
                        <p>Get the best quality products at unbeatable prices.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={b3} className="carousel-img" alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Shop with Confidence</h3>
                        <p>Safe and secure shopping experience with fast delivery.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2 className="text-center mt-4">Our Products</h2>

            {/* Product Cards */}
            <Container className="mt-4">
                <Row className="justify-content-center">
                    {prodata.map((product) => (
                        <Col key={product.id} md={4} sm={6} className="mb-4">
                            <Card className="custom-card" onClick={() => navigate(`/prodetail/${product.id}`)}>
                                <div className="image-container">
                                    <Card.Img variant="top" src={product.image} className="product-image" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                        <h4 className="mt-2 text-primary">₹{product.price}</h4>
                                    </Card.Text>
                                    <Button 
                                        variant="success" 
                                        className="w-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch(addtoCart({
                                                id: product.id,
                                                name: product.name,
                                                desc: product.description,
                                                price: product.price,
                                                image: product.image,
                                                qnty: 1
                                            }));
                                        }}>
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Custom CSS */}
            <style>
                {`
                    /* Carousel Styling */
                    .carousel-img {
                        width: 100%;
                        height: 450px; 
                        object-fit: cover; 
                    }

                    /* Product Card Styling */
                    .custom-card {
                        transition: transform 0.3s ease-in-out;
                        cursor: pointer;
                        border-radius: 15px;
                        overflow: hidden;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                        background: #fff;
                    }

                    .custom-card:hover {
                        transform: translateY(-5px);
                    }

                    /* Ensuring Image Fit Inside Card */
                    .image-container {
                        width: 100%;
                        height: 250px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #f8f8f8;
                    }

                    .product-image {
                        max-width: 100%;
                        max-height: 100%;
                        object-fit: contain;
                    }

                    /* Button Styling */
                    .btn-success {
                        background-color: #28a745;
                        border: none;
                        font-weight: bold;
                    }

                    .btn-success:hover {
                        background-color: #218838;
                    }

                    /* Responsive Adjustments */
                    @media (max-width: 768px) {
                        .carousel-img {
                            height: 250px;
                        }

                        .image-container {
                            height: 200px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Home;
