import Header from "./component/Header";
import Container from 'react-bootstrap/Container';
import TopNav from "./component/TopNav";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
         <Container fluid>
         <div id="myTop">
         <Header/> 
         <TopNav/>
         </div>
       

          <Outlet/>
           

         <Footer/>
         </Container>
            
        </>
    )
}

export default Layout;