import React from 'react'
import { Zap, Shield, Brain, Clock, Users, Globe, Target, Lock, Cpu, Award } from 'lucide-react'
import './Features.scss'

const Features = () => {
  const coreFeatures = [
    {
      icon: <Zap size={32} />,
      title: 'Sub-Second Authentication',
      description: 'Lightning-fast login in under 1 second with 94%+ accuracy rate using advanced CNN models.',
      benefits: ['Improved user experience', 'Reduced login friction', 'Higher conversion rates']
    },
    {
      icon: <Shield size={32} />,
      title: 'Military-Grade Security',
      description: 'Anti-phishing protection, liveness detection, and behavioral biometrics prevent replay attacks.',
      benefits: ['Zero password vulnerabilities', 'Liveness detection', 'Behavioral analysis']
    },
    {
      icon: <Brain size={32} />,
      title: 'AI-Powered Recognition',
      description: 'Advanced CNN deep learning with $1 Recognizer integration for superior pattern recognition.',
      benefits: ['Continuous learning', 'Pattern optimization', 'Adaptive algorithms']
    }
  ]

  const advancedFeatures = [
    {
      icon: <Award size={28} />,
      title: 'Okta Technology Partner',
      description: 'Officially recognized as an Okta Elevate Technology Partner (Incubate tier) for enterprise identity solutions.',
      highlight: true
    },
    {
      icon: <Clock size={28} />,
      title: 'Real-Time Processing',
      description: 'Live gesture analysis with sub-millisecond detection capabilities.'
    },
    {
      icon: <Users size={28} />,
      title: 'Enterprise Scalability',
      description: 'Supports 10K+ concurrent users with horizontal scaling architecture.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Cross-Platform Support',
      description: 'Seamless integration across web, mobile, and desktop applications.'
    },
    {
      icon: <Target size={28} />,
      title: 'Precision Tracking',
      description: 'Advanced gesture tracking with 94%+ accuracy in various lighting conditions.'
    },
    {
      icon: <Lock size={28} />,
      title: 'Zero-Knowledge Architecture',
      description: 'Privacy-first design with local processing options and encrypted transmission.'
    }
  ]

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="partnership-badge">
            <Award size={20} />
            <span>Okta Elevate Technology Partner</span>
          </div>
          <h1>SecuADR Features</h1>
          <p>Discover the powerful capabilities that make SecuADR the leading AI-powered gesture authentication platform, now officially recognized by Okta.</p>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="partnership-highlight">
        <div className="container">
          <div className="partnership-card">
            <div className="partnership-content">
              <div className="partnership-logo">
                <Award size={48} />
              </div>
              <div className="partnership-text">
                <h3>Okta Elevate Technology Partner</h3>
                <p>
                  SecuADR has been selected as an <strong>Okta Elevate Technology Partner</strong> in the Incubate tier, 
                  validating our enterprise-grade security and innovation in passwordless authentication. 
                  This partnership enables seamless integration with Okta's Workforce Identity Cloud.
                </p>
                <div className="partnership-benefits">
                  <span className="benefit-tag">Enterprise Validated</span>
                  <span className="benefit-tag">Okta Integration</span>
                  <span className="benefit-tag">Identity Cloud Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="core-features">
        <div className="container">
          <h2>Core Features</h2>
          <div className="core-features-grid">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="core-feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="benefits-list">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="advanced-features">
        <div className="container">
          <h2>Advanced Capabilities</h2>
          <div className="advanced-features-grid">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className={`advanced-feature-card ${feature.highlight ? 'highlighted' : ''}`}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                {feature.highlight && (
                  <div className="highlight-badge">Enterprise Validated</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta">
        <div className="container">
          <h2>Ready to Experience SecuADR?</h2>
          <p>Join the Okta ecosystem with our enterprise-validated gesture authentication platform.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Request Demo</button>
            <button className="btn btn-secondary btn-large">View Okta Integration</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
