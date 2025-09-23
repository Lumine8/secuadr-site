import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navigation with all pages
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Features", path: "/features" },
    { name: "Security", path: "/security" },
    { name: "About", path: "/about" },
    { name: "Documentation", path: "/docs" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className='container'>
        <div className='header__content'>
          {/* Updated Logo with Images */}
          <Link to='/' className='header__logo' onClick={closeMenu}>
            {/* Full logo for larger screens */}
            <img
              src='/src/assets/unnamed1.png'
              alt='SecuADR'
              className='header__logo-full'
            />
            {/* Symbol only for mobile */}
            <img
              src='/src/assets/unnamed1.png'
              alt='SecuADR'
              className='header__logo-symbol'
            />
          </Link>

          <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
            <ul className='header__nav-list'>
              {navItems.map((item) => (
                <li key={item.name} className='header__nav-item'>
                  <Link
                    to={item.path}
                    className={`header__nav-link ${
                      location.pathname === item.path ? "active" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className='header__actions'>
            <a
              href='https://github.com/Lumine8/SecuADR'
              target='_blank'
              rel='noopener noreferrer'
              className='header__github'
            >
              <Github size={20} />
            </a>
            <button className='btn btn-primary'>
              Request Demo
              <ExternalLink size={16} />
            </button>
          </div>

          <button
            className='header__mobile-toggle'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
