import React from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CISO, TechCorp",
      content:
        "SecuADR has revolutionized our authentication process. The sub-second login times and zero password fatigue have significantly improved our user experience.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Security",
      content:
        "The AI-powered gesture recognition is incredibly accurate. We've seen a 95% reduction in authentication-related support tickets.",
      rating: 5,
    },
    {
      name: "Dr. Emily Watson",
      role: "Security Researcher",
      content:
        "The behavioral biometrics approach is groundbreaking. SecuADR's liveness detection makes it the most secure passwordless solution we've tested.",
      rating: 5,
    },
  ];

  return (
    <section className='testimonials section'>
      <div className='container'>
        <div className='testimonials__header'>
          <h2>Trusted by Security Leaders</h2>
          <p className='testimonials__subtitle'>
            See what industry experts say about SecuADR's revolutionary approach
            to passwordless authentication.
          </p>
        </div>

        <div className='testimonials__grid'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='testimonials__card'>
              <div className='testimonials__quote'>
                <Quote className='testimonials__quote-icon' />
              </div>

              <div className='testimonials__rating'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='testimonials__star'
                    fill='currentColor'
                  />
                ))}
              </div>

              <p className='testimonials__content'>"{testimonial.content}"</p>

              <div className='testimonials__author'>
                <h4 className='testimonials__name'>{testimonial.name}</h4>
                <p className='testimonials__role'>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
