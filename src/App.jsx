import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"; // Updated paths if using folders
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import Features from "./pages/Features/Features"; // New
import Security from "./pages/Security/Security"; // New
// import Pricing from "./pages/Pricing/Pricing"; // New (if you want a dedicated pricing page)
import Documentation from "./pages/Documentation/Documentation";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/features' element={<Features />} />
            <Route path='/security' element={<Security />} />
            {/* <Route path='/pricing' element={<Pricing />} /> */}
            <Route path='/docs' element={<Documentation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
