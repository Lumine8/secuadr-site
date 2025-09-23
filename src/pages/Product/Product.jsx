import React from "react";
import "./Product.scss";

const Product = () => {
  const coreFeatures = [
    {
      title: "Sub-Second Authentication",
      description: "Lightning-fast login in under 1 second with 94%+ accuracy",
      icon: "⚡",
    },
    {
      title: "Enterprise Security",
      description: "Military-grade protection with advanced threat detection",
      icon: "🛡️",
    },
    {
      title: "Easy Integration",
      description: "RESTful API with comprehensive SDK support",
      icon: "🔗",
    },
  ];

  const performanceSpecs = [
    { metric: "Authentication Speed", value: "<1 second" },
    { metric: "Accuracy Rate", value: "94%+" },
    { metric: "False Positive Rate", value: "<0.1%" },
    { metric: "Concurrent Users", value: "10K+" },
  ];

  const securitySpecs = [
    { metric: "Encryption", value: "End-to-end" },
    { metric: "Compliance", value: "SOC 2 Type II" },
    { metric: "Privacy", value: "GDPR ready" },
    { metric: "Architecture", value: "Zero-knowledge" },
  ];

  return (
    <div className='product-page'>
      {/* Hero Section */}
      <section className='product-hero'>
        <div className='container'>
          <h1>SecuADR Authentication Platform</h1>
          <p>
            The world's first AI-powered gesture authentication system designed
            for enterprise security.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className='product-features'>
        <div className='container'>
          <h2>Core Features</h2>
          <div className='features-grid'>
            {coreFeatures.map((feature, index) => (
              <div key={index} className='feature-card'>
                <div className='feature-icon'>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className='product-specs'>
        <div className='container'>
          <h2>Technical Specifications</h2>

          <div className='specs-grid'>
            <div className='spec-category'>
              <h3>Performance</h3>
              <div className='spec-list'>
                {performanceSpecs.map((spec, index) => (
                  <div key={index} className='spec-item'>
                    <span className='spec-metric'>{spec.metric}</span>
                    <span className='spec-value'>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='spec-category'>
              <h3>Security</h3>
              <div className='spec-list'>
                {securitySpecs.map((spec, index) => (
                  <div key={index} className='spec-item'>
                    <span className='spec-metric'>{spec.metric}</span>
                    <span className='spec-value'>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='product-cta'>
        <div className='container'>
          <h2>Ready to Get Started?</h2>
          <p>Experience the future of authentication with SecuADR.</p>
          <div className='cta-buttons'>
            <button className='btn btn-primary btn-large'>Request Demo</button>
            <button className='btn btn-secondary btn-large'>
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
