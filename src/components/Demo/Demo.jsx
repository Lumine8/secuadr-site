import React, { useState } from "react";
import { Play, Smartphone, CheckCircle } from "lucide-react";
import "./Demo.scss";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className='demo section' id='demo'>
      <div className='container'>
        <div className='demo__header'>
          <h2>See SecuADR in Action</h2>
          <p className='demo__subtitle'>
            Watch how gesture authentication works in real-time with sub-second
            response and 94%+ accuracy.
          </p>
        </div>

        <div className='demo__content'>
          <div className='demo__video'>
            <div className='demo__video-container'>
              <div className='demo__video-placeholder'>
                <div className='demo__phone-mockup'>
                  <Smartphone size={120} />
                </div>
                {!isPlaying && (
                  <button
                    className='demo__play-button'
                    onClick={() => setIsPlaying(true)}
                  >
                    <Play size={24} />
                  </button>
                )}
              </div>
              <div className='demo__status'>
                <CheckCircle className='demo__status-icon' />
                <span>Authenticated in 0.8 seconds</span>
              </div>
            </div>
          </div>

          <div className='demo__steps'>
            <h3>How It Works</h3>
            <div className='demo__step-list'>
              <div className='demo__step'>
                <div className='demo__step-number'>1</div>
                <div className='demo__step-content'>
                  <h4>Draw Your Gesture</h4>
                  <p>Create a unique pattern on your device screen</p>
                </div>
              </div>
              <div className='demo__step'>
                <div className='demo__step-number'>2</div>
                <div className='demo__step-content'>
                  <h4>AI Analysis</h4>
                  <p>CNN models analyze your gesture in real-time</p>
                </div>
              </div>
              <div className='demo__step'>
                <div className='demo__step-number'>3</div>
                <div className='demo__step-content'>
                  <h4>Instant Authentication</h4>
                  <p>Get authenticated in under 1 second</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
