import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import logo from "./images/Logo.jpg";

const TopNav = () => {
    const location = useLocation();

    return (<></>
//         <Navbar expand="lg" className="custom-navbar" sticky="top">
//             <Container>
//                 <Navbar.Brand as={Link} to="/" className="brand">
//                   <img src={logo} alt="" className="brand-logo"/> TrendyThreads
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/home" className={location.pathname === "/home" ? "active-link" : ""}>Home</Nav.Link>
//                         <Nav.Link as={Link} to="/cart" className={location.pathname === "/cart" ? "active-link" : ""}>Cart</Nav.Link>
//                         <Nav.Link as={Link} to="/search" className={location.pathname === "/search" ? "active-link" : ""}>Search</Nav.Link>
//                         <Nav.Link as={Link} to="/pricing" className={location.pathname === "/pricing" ? "active-link" : ""}>Pricing</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>

//             {/* Custom CSS */}
//             <style>
//                 {`
//                     .custom-navbar {
//                         background: linear-gradient(135deg, #1a1a2e, #16213e);
//                         padding: 15px 25px;
//                         box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//                     }
//                     .brand {
//                         font-size: 24px;
//                         font-weight: bold;
//                         color: white;
//                         display: flex;
//                         align-items: center;
//                         gap: 10px;
//                     }
//                     .brand-logo {
//                         width: 80px;
//                         height: 60px;
//                         border-radius: 8px;
//                         transition: transform 0.3s ease-in-out;
//                     }
//                     .brand:hover .brand-logo {
//                         transform: scale(1.1);
//                     }
//                     .nav-link {
//                         font-size: 18px;
//                         color: white !important;
//                         transition: all 0.3s ease-in-out;
//                         padding: 12px 18px;
//                         border-radius: 10px;
//                         margin: 0 5px;
//                     }
//                     .nav-link:hover {
//                         background: rgba(255, 255, 255, 0.2);
//                         color: #ffcc00 !important;
//                         transform: translateY(-2px);
//                     }
//                     .active-link {
//                         background: rgba(255, 255, 255, 0.3);
//                         font-weight: bold;
//                         color: #ffcc00 !important;
//                         border-radius: 10px;
//                     }
//                     @media (max-width: 768px) {
//                         .nav-link {
//                             font-size: 16px;
//                             padding: 10px;
//                         }
//                     }
//                 `}
//             </style>
//         </Navbar>
    );
};

 export default TopNav;