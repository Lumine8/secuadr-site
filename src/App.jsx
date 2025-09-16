// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Homes.jsx";
import Product from "./pages/Products.jsx";
// import Docs from "./pages/Docs.jsx";
import Security from "./pages/Security.jsx";
// import Contact from "./pages/Contact.jsx";
// import Pricing from "./pages/Pricing.jsx";

// import "./styles/_globals.scss";
import "./App.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        {/* <Route path='/docs' element={<Docs />} /> */}
        <Route path='/security' element={<Security />} />
        {/* <Route path='/pricing' element={<Pricing />} /> */}
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </>
  );
}
