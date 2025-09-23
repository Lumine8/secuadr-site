import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__brand'>
            <Link to='/' className='footer__logo'>
              <Shield className='footer__logo-icon' size={32} />
              <span>SecuADR</span>
            </Link>
            <p className='footer__description'>
              The world's first AI-powered gesture authentication platform.
              Revolutionizing security through advanced machine learning and
              behavioral biometrics for enterprise applications.
            </p>
            <div className='footer__social'>
              <a
                href='https://github.com/Lumine8/SecuADR'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github size={20} />
              </a>
              <a
                href='https://twitter.com/secuadr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Twitter size={20} />
              </a>
              <a
                href='https://linkedin.com/company/secuadr'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin size={20} />
              </a>
              <a href='mailto:atlas.adr11@gmail.com'>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className='footer__links'>
            {/* Product Column */}
            <div className='footer__column'>
              <h4>Product</h4>
              <ul>
                <li>
                  <Link to='/features'>Features</Link>
                </li>
                <li>
                  <Link to='/security'>Security</Link>
                </li>
                {/* <li>
                  <Link to='/pricing'>Pricing</Link>
                </li> */}
                <li>
                  <Link to='/docs'>Documentation</Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className='footer__column'>
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to='/careers'>Careers</Link>
                </li>
                <li>
                  <Link to='/news'>News</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className='footer__column'>
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to='/docs'>API Reference</Link>
                </li>
                <li>
                  <Link to='/examples'>Code Examples</Link>
                </li>
                <li>
                  <Link to='/support'>Support Center</Link>
                </li>
                <li>
                  <Link to='/status'>System Status</Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className='footer__column'>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link to='/privacy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='/terms'>Terms of Service</Link>
                </li>
                <li>
                  <Link to='/cookies'>Cookie Policy</Link>
                </li>
                <li>
                  <Link to='/compliance'>Compliance</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer__bottom'>
          <p>&copy; 2025 SecuADR. All rights reserved.</p>
          <div className='footer__legal'>
            <Link to='/privacy'>Privacy</Link>
            <Link to='/terms'>Terms</Link>
            <Link to='/cookies'>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
