import React from "react";
import { Shield, Lock, Eye, Fingerprint, Server, Award } from "lucide-react";
import "./Security.scss";

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield size={32} />,
      title: "Anti-Phishing Protection",
      description:
        "Advanced liveness detection prevents replay attacks and ensures authentic user presence during authentication.",
    },
    {
      icon: <Lock size={32} />,
      title: "End-to-End Encryption",
      description:
        "All gesture data is encrypted using AES-256 encryption during transmission and storage.",
    },
    {
      icon: <Eye size={32} />,
      title: "Zero-Knowledge Architecture",
      description:
        "Privacy-first design ensures gesture patterns never leave your infrastructure in unencrypted form.",
    },
    {
      icon: <Fingerprint size={32} />,
      title: "Behavioral Biometrics",
      description:
        "Unique gesture patterns create unforgeable digital signatures specific to each user.",
    },
    {
      icon: <Server size={32} />,
      title: "Enterprise Infrastructure",
      description:
        "Built on secure, scalable architecture with 99.9% uptime SLA and automatic failover.",
    },
    {
      icon: <Award size={32} />,
      title: "Compliance Ready",
      description:
        "SOC 2 Type II certified, GDPR compliant, and meets enterprise security standards.",
    },
  ];

  return (
    <div className='security-page'>
      <section className='security-hero'>
        <div className='container'>
          <h1>Enterprise Security</h1>
          <p>
            Military-grade security architecture designed to protect your most
            sensitive authentication data.
          </p>
        </div>
      </section>

      <section className='security-features'>
        <div className='container'>
          <h2>Security Features</h2>
          <div className='security-grid'>
            {securityFeatures.map((feature, index) => (
              <div key={index} className='security-card'>
                <div className='security-icon'>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='compliance'>
        <div className='container'>
          <h2>Compliance & Certifications</h2>
          <div className='compliance-grid'>
            <div className='compliance-item'>
              <h4>SOC 2 Type II</h4>
              <p>Independently verified security controls</p>
            </div>
            <div className='compliance-item'>
              <h4>GDPR Compliant</h4>
              <p>Full European data protection compliance</p>
            </div>
            <div className='compliance-item'>
              <h4>ISO 27001</h4>
              <p>International security management standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
