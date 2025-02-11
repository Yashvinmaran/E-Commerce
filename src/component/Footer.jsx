import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="text-center">
                    <Col md={4} sm={12}>
                        <h5>About Us</h5>
                        <p>Discover the best deals on mobile gadgets and accessories. Quality products at unbeatable prices.</p>
                    </Col>
                    <Col md={4} sm={12}>
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <FaFacebook className="icon" />
                            <FaTwitter className="icon" />
                            <FaInstagram className="icon" />
                            <FaLinkedin className="icon" />
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <h5>Contact</h5>
                        <p>Email: support@mymobileshop.com</p>
                        <p>Phone: +91 98765 43210</p>
                    </Col>
                </Row>
                <hr />
                <Row className="text-center">
                    <Col>
                        <p>© 2025 www.mymobileshop.com | All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>

            {/* Custom CSS */}
            <style>
                {`
                    .footer {
                        background: linear-gradient(135deg, #003366, #0066cc);
                        color: white;
                        padding: 30px 0;
                        font-size: 14px;
                        box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
                    }

                    .footer h5 {
                        font-weight: bold;
                        margin-bottom: 15px;
                    }

                    .social-icons {
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                    }

                    .icon {
                        font-size: 24px;
                        transition: transform 0.3s ease-in-out;
                        cursor: pointer;
                    }

                    .icon:hover {
                        transform: scale(1.2);
                        color: #ffcc00;
                    }

                    @media (max-width: 768px) {
                        .footer p {
                            font-size: 12px;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Footer;
