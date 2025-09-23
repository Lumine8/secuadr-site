import React from "react";
import {
  Zap,
  Shield,
  Brain,
  Clock,
  Users,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";
import "./Features.scss";

const Features = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Sub-Second Authentication",
      description:
        "Experience lightning-fast login in under 1 second with 94%+ accuracy rate using advanced CNN models.",
    },
    {
      icon: <Shield size={32} />,
      title: "Military-Grade Security",
      description:
        "Anti-phishing protection, liveness detection, and behavioral biometrics prevent replay attacks.",
    },
    {
      icon: <Brain size={32} />,
      title: "AI-Powered Recognition",
      description:
        "Advanced CNN deep learning with $1 Recognizer integration for superior pattern recognition.",
    },
    {
      icon: <Clock size={32} />,
      title: "Real-Time Processing",
      description:
        "Live gesture analysis and authentication with sub-millisecond gesture detection capabilities.",
    },
    {
      icon: <Users size={32} />,
      title: "Enterprise Ready",
      description:
        "Scalable architecture supporting 10K+ concurrent users with SOC 2 Type II compliance.",
    },
    {
      icon: <Globe size={32} />,
      title: "Cross-Platform",
      description:
        "Seamless integration across web, mobile, and desktop applications with universal API support.",
    },
  ];

  return (
    <section className='features section'>
      <div className='container'>
        {/* Okta Partnership Highlight */}
        <div className='features__partnership'>
          <div className='partnership__badge'>
            <Award size={24} />
            <span>Okta Elevate Technology Partner</span>
          </div>
          <div className='partnership__content'>
            <h2 className='partnership__title'>
              Enterprise-Validated Authentication Platform
            </h2>
            <p className='partnership__description'>
              SecuADR has been selected as an{" "}
              <strong>Okta Elevate Technology Partner</strong> in the Incubate
              tier, validating our enterprise-grade security and seamless
              integration capabilities with the world's leading identity
              platform trusted by thousands of organizations.
            </p>
            <div className='partnership__benefits'>
              <div className='benefit__item'>
                <CheckCircle size={20} />
                <span>Enterprise Validated Security</span>
              </div>
              <div className='benefit__item'>
                <CheckCircle size={20} />
                <span>Okta Workforce Identity Integration</span>
              </div>
              <div className='benefit__item'>
                <CheckCircle size={20} />
                <span>Identity Cloud Ready Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Section */}
        <div className='features__header'>
          <h2 className='features__title'>
            Why Choose SecuADR Authentication?
          </h2>
          <p className='features__subtitle'>
            Revolutionary passwordless security that combines AI innovation with
            enterprise-grade protection, now validated by Okta for seamless
            identity management.
          </p>
        </div>

        <div className='features__grid'>
          {features.map((feature, index) => (
            <div key={index} className='features__card'>
              <div className='features__icon'>{feature.icon}</div>
              <h3 className='features__card-title'>{feature.title}</h3>
              <p className='features__card-description'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className='features__cta'>
          <h3>Ready to Experience Enterprise-Validated Authentication?</h3>
          <p>
            Join the Okta ecosystem with SecuADR's AI-powered gesture
            authentication.
          </p>
          <div className='cta__buttons'>
            <button className='btn btn-primary btn-large'>
              Request Enterprise Demo
            </button>
            <button className='btn btn-secondary btn-large'>
              View Okta Integration Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
