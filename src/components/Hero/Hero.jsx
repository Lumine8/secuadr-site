import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Zap, Shield, Clock, Award } from "lucide-react";
import "./Hero.scss";

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "Authentication Speed", value: "<1s", icon: <Clock size={20} /> },
    { label: "Accuracy Rate", value: "94%+", icon: <Zap size={20} /> },
    { label: "Security Level", value: "Military", icon: <Shield size={20} /> },
    { label: "Okta Partner", value: "Validated", icon: <Award size={20} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className='hero'>
      <div className='hero__background'>
        <div className='hero__gradient'></div>
      </div>

      <div className='container'>
        <div className='hero__content'>
          <div className='hero__text'>
            <div className='hero__badge'>
              <Award size={16} />
              <span>🚀 Okta Technology Partner - Enterprise Validated</span>
            </div>

            <h1 className='hero__title'>
              Passwordless Authentication in{" "}
              <span className='hero__highlight'>Under 1 Second</span>
            </h1>

            <p className='hero__description'>
              SecuADR eliminates passwords through real-time gesture recognition
              using advanced CNN-based machine learning. Now validated as an
              Okta Technology Partner with military-grade security and
              anti-phishing protection.
            </p>

            <div className='hero__actions'>
              <button className='btn btn-primary btn-large'>
                Request Enterprise Demo
                <ArrowRight size={20} />
              </button>
              <button className='btn btn-secondary btn-large'>
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            <div className='hero__trust'>
              <p className='hero__trust-text'>
                Trusted by enterprise security teams • Okta Technology Partner
              </p>
              <div className='hero__logos'>
                <div className='hero__logo-item'>
                  <Award size={16} />
                  Okta Partner
                </div>
                <div className='hero__logo-item'>Enterprise Ready</div>
                <div className='hero__logo-item'>SOC 2 Certified</div>
              </div>
            </div>
          </div>

          <div className='hero__visual'>
            <div className='hero__demo-container'>
              <div className='hero__phone'>
                <div className='hero__screen'>
                  <div className='hero__gesture-area'>
                    <svg className='hero__gesture-path' viewBox='0 0 200 200'>
                      <defs>
                        <linearGradient
                          id='gestureGradient'
                          x1='0%'
                          y1='0%'
                          x2='100%'
                          y2='100%'
                        >
                          <stop offset='0%' stopColor='#3182ce' />
                          <stop offset='100%' stopColor='#38a169' />
                        </linearGradient>
                      </defs>
                      <path
                        d='M50 50 Q100 20 150 50 Q180 100 150 150 Q100 180 50 150 Q20 100 50 50'
                        stroke='url(#gestureGradient)'
                        strokeWidth='3'
                        fill='none'
                        className='hero__animated-path'
                      />
                    </svg>
                  </div>
                  <div className='hero__auth-status'>
                    <div className='hero__status-icon'>✓</div>
                    <span>Authenticated in 0.8s</span>
                  </div>
                </div>
              </div>

              <div className='hero__stats'>
                <div className='hero__stat'>
                  <div className='hero__stat-icon'>
                    {stats[currentStat].icon}
                  </div>
                  <div className='hero__stat-content'>
                    <div className='hero__stat-value'>
                      {stats[currentStat].value}
                    </div>
                    <div className='hero__stat-label'>
                      {stats[currentStat].label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
