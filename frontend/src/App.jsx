import HomePage from "./landing_page/Home/HomePage";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import "./App.css"
import PricingPage from "./landing_page/Pricing/PricingPage";
import Signup from "./landing_page/SignUP/SignUp";
import AboutPage from "./landing_page/About/AboutPage";
import ProductPage from "./landing_page/Products/ProductPage";
import Navbar from "./landing_page/Navbar"
import  Footer from "./landing_page/Footer.jsx"
import NotFound from "./landing_page/NotFound.jsx";
import SignUpPage from "./landing_page/SignUP/SignUPPAge.jsx";

function App() {
    return ( 
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pricing/:tab" element={<PricingPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/product" element={<ProductPage/>}/> 
                <Route path="/pricing" element={<Navigate to="/pricing/Equity" replace />}/>
                <Route path="*" element={<NotFound/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
     );
}

export default App;