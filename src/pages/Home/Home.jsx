import React from "react";
// import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Demo from "../../components/Demo/Demo";
import Testimonials from "../../components/Testimonials/Testimonials";
import Pricing from "../../components/Pricing/Pricing";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
