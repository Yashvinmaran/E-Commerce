import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="text-center">
                    <Col md={4} sm={12} className="footer-section">
                        <h5>About Us</h5>
                        <p>We are dedicated to providing the latest trends in fashion. Discover stylish clothing for every occasion.</p>
                    </Col>
                    <Col md={4} sm={12} className="footer-section">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <FaFacebook className="icon" />
                            <FaTwitter className="icon" />
                            <FaInstagram className="icon" />
                            <FaPinterest className="icon" />
                        </div>
                    </Col>
                    <Col md={4} sm={12} className="footer-section">
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="/mens-wear" className="footer-link">Men's Wear</a></li>
                            <li><a href="/womens-wear" className="footer-link">Women's Wear</a></li>
                            <li><a href="/kids-wear" className="footer-link">Kids' Wear</a></li>
                            <li><a href="/sale" className="footer-link">Sale</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col>
                        <h5>Subscribe to Our Newsletter</h5>
                        <p>Get the latest updates and offers directly in your inbox.</p>
                        <div className="newsletter-container">
                            <input type="email" placeholder="Enter your email" className="newsletter-input" />
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-center">
                    <Col>
                        <p>© 2025 www.myclothingshop.com | All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>

            {/* Custom CSS */}
            <style>
                {`
                    .footer {
                        background: linear-gradient(135deg, #ff6b6b, #f7d94c); /* Match the navbar gradient */
                        color: white;
                        padding: 40px 0;
                        font-size: 14px;
                        box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
                    }

                    .footer-section {
                        background: rgba(255, 255, 255, 0.1);
                        border-radius: 10px;
                        padding: 20px;
                        margin: 10px 0;
                        transition: background 0.3s;
                    }

                    .footer-section:hover {
                        background: rgba(255, 255, 255, 0.2);
                    }

                    .footer h5 {
                        font-weight: bold;
                        margin-bottom: 15px;
                        font-size: 18px;
                    }

                    .footer p {
                        margin-bottom: 10px;
                    }

                    .social-icons {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin-top: 10px;
                    }

                    .icon {
                        font-size: 28px;
                        transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
                        cursor: pointer;
                    }

                    .icon:hover {
                        transform: scale(1.2);
                        color: #ffcc00; /* Change color on hover */
                    }

                    .footer-links {
                        list-style: none;
                        padding: 0;
                    }

                    .footer-links li {
                        margin: 5px 0;
                    }

                    .footer-link {
                        color: #ffcc00;
                        text-decoration: none;
                        transition: color 0.3s ease-in-out;
                    }

                    .footer-link:hover {
                        color: #ffffff;
                    }

                    .newsletter-container {
                        display: flex;
                        justify-content: center;
                        margin-top: 10px;
                    }

                    .newsletter-input {
                        padding: 10px;
                        border: none;
                        border-radius: 5px;
                        margin-right: 10px;
                        width: 70%;
                    }

                    .subscribe-btn {
                        padding: 10px 20px;
                        background-color: #ffcc00;
                        border: none;
                        border-radius: 5px;
                        color: #333;
                        cursor: pointer;
                        transition: background-color 0.3s ease-in-out;
                    }

                    .subscribe-btn:hover {
                        background-color: #e6b800;
                    }

                    @media (max-width: 768px) {
                        .footer p {
                            font-size: 12px;
                        }
                        .footer h5 {
                            font-size: 16px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Footer;