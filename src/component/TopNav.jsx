import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";

const TopNav = () => {
    const location = useLocation();

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                {/* Brand/Logo */}
                <Navbar.Brand as={Link} to="/" className="brand">
                    📱 MyMobileShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className={location.pathname === "/home" ? "active-link" : ""}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/cart" className={location.pathname === "/cart" ? "active-link" : ""}>Cart</Nav.Link>
                        <Nav.Link as={Link} to="/search" className={location.pathname === "/search" ? "active-link" : ""}>Search</Nav.Link>
                        <Nav.Link as={Link} to="/pricing" className={location.pathname === "/pricing" ? "active-link" : ""}>Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            {/* Custom CSS */}
            <style>
                {`
                    .custom-navbar {
                        background: linear-gradient(135deg, #003366, #0066cc);
                        padding: 12px 20px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    .brand {
                        font-size: 22px;
                        font-weight: bold;
                        color: white;
                    }

                    .brand:hover {
                        color: #ffcc00;
                    }

                    .nav-link {
                        font-size: 16px;
                        color: white !important;
                        transition: color 0.3s ease-in-out;
                        padding: 10px 15px;
                        border-radius: 8px;
                    }

                    .nav-link:hover {
                        color: #ffcc00 !important;
                    }

                    .active-link {
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 8px;
                        font-weight: bold;
                    }

                    @media (max-width: 768px) {
                        .nav-link {
                            font-size: 14px;
                            padding: 8px;
                        }
                    }
                `}
            </style>
        </Navbar>
    );
};

export default TopNav;
