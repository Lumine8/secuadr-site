// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className='nav'>
      <div className='container'>
        <Link to='/' className='brand'>
          <img src={logo} alt='SecuADR logo' width='36' height='36' />
          <span>SecuADR</span>
        </Link>
        <nav className='links'>
          <NavLink to='/product'>Product</NavLink>
          <NavLink to='/docs'>Docs</NavLink>
          <NavLink to='/security'>Security</NavLink>
          <NavLink to='/pricing'>Pricing</NavLink>
          <NavLink to='/contact' className='btn'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
