import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wishlist = () => {
    const [wishlistData, setWishlistData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loadWishlist = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/wishlist");
            setWishlistData(response.data);
        } catch (error) {
            console.error("Error loading wishlist:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadWishlist();
    }, []);

    const removeFromWishlist = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/wishlist/${id}`);
            loadWishlist();
            toast.success("Removed from Wishlist!"); 
        } catch (error) {
            console.error("Error removing from wishlist:", error);
            toast.error("Error removing from wishlist.");
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center section-title">Your Wishlist</h2>
            <Row className="justify-content-center">
                {loading ? (
                    <p>Loading wishlist...</p>
                ) : (
                    wishlistData.map((product) => (

                        
                        <Col key={product.id} lg={4} md={6} sm={12} className="mb-4 d-flex align-items-stretch">
    <Card 
        className="custom-card d-flex flex-column shadow-lg rounded-lg overflow-hidden" 
        onClick={() => navigate(`/prodetail/${product.id}`)} 
        style={{ height: "100%", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
    >
        <div className="image-container">
            <Card.Img  
                variant="top"
                src={product.image}
                className="product-image"
                alt={product.name}
                style={{ height: "300px", objectFit: "cover", borderRadius: "10px" }} 
                onError={(e) => {
                    e.target.src = "placeholder_image.jpg";
                }}
            />
        </div>
        <Card.Body className="d-flex flex-column p-4">
            <Card.Title className="product-title font-weight-bold text-primary" style={{ fontSize: "1.2rem" }}>
                {product.name}
            </Card.Title>
            <Card.Text className="product-description flex-grow-1" style={{ fontSize: "1rem", color: "#555" }}>
                {product.description}
            </Card.Text>
            <h4 className="product-price text-danger" style={{ fontSize: "1.3rem" }}>₹{product.price}</h4>
            <Button
                variant="danger"
                className="mt-auto w-100"
                onClick={(e) => {
                    e.stopPropagation();
                    removeFromWishlist(product.id);
                }}
                style={{
                    transition: "background-color 0.3s ease",
                    fontWeight: "bold",
                    borderRadius: "25px",
                    padding: "12px"
                }}
            >
                Remove from Wishlist
            </Button>
        </Card.Body>
    </Card>
</Col>



                    ))
                )}
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Wishlist;