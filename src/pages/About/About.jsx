import React from "react";
import "./About.scss"; // Import page-specific styles

const About = () => {
  return (
    <div className='about-page'>
      <section className='about-hero'>
        <div className='container'>
          <h1 className='about-title'>About SecuADR</h1>
          <p className='about-subtitle'>
            Revolutionizing authentication through AI-powered gesture
            recognition for enterprise security worldwide.
          </p>
        </div>
      </section>

      <section className='about-content'>
        <div className='container'>
          <div className='about-story'>
            <h2>Our Story</h2>
            <p>
              SecuADR was born from the recognition that traditional
              password-based authentication is fundamentally broken. With data
              breaches affecting millions of users annually and password fatigue
              plaguing every organization, we set out to create a revolutionary
              approach to digital security.
            </p>
          </div>

          <div className='about-mission'>
            <h2>Our Mission</h2>
            <p>
              To eliminate passwords entirely by making authentication as
              natural as signing your name, while providing enterprise-grade
              security that protects against modern cyber threats.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
