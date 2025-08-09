import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styled, { keyframes } from 'styled-components';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Menu, X, ChevronRight } from 'lucide-react';

// Re-importing the original components from the assets folder
import MainPage from './assets/mainPage';
import ServicesPage from './assets/services';
import ContactPage from './assets/contact';
import FAQPage from './assets/FAQPage';

// Define a custom WhatsApp SVG icon since it's not in the Lucide-React library
const WhatsAppIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a10 10 0 0 1 10 10c0 4.97-3.69 9.1-8.5 9.87L12 22l-1.5-.13C6.69 21.1 3 16.97 3 12A10 10 0 0 1 12 2z" />
    <path d="M12 2a10 10 0 0 1 10 10c0 4.97-3.69 9.1-8.5 9.87L12 22l-1.5-.13C6.69 21.1 3 16.97 3 12A10 10 0 0 1 12 2z" />
    <path d="M16 11c-1.54.5-2.2.82-3 1.5l-1.4-1.4c-.68-.68-1.5-.2-1.5 0l-1.4 1.4c-.78.78-.26 1.5 0 1.5l1.4-1.4c.7-.7.5-1.12 1.5-1.5" />
    <path d="M16 11c-1.54.5-2.2.82-3 1.5l-1.4-1.4c-.68-.68-1.5-.2-1.5 0l-1.4 1.4c-.78.78-.26 1.5 0 1.5l1.4-1.4c.7-.7.5-1.12 1.5-1.5" />
    <path d="M12 22s-4.5-1.5-6.5-6.5" />
  </svg>
);

// New component to handle scrolling to the top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Keyframes for animations
const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
`;

// Styled Components
const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #207dff;
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;

// The NavLink component now correctly uses the `active` class for styling.
const StyledNavLink = styled(NavLink)`
  color: #000;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  padding: 20px 15px;
  position: relative;
  transition: all 0.3s ease;
  text-decoration: none;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ffd31d;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover, &.active {
    color: #207dff;
    
    &:after {
      transform: scaleX(1);
    }
  }
`;

const Header = styled.nav`
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1050;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: all 0.3s ease-in-out;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: white;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1051;
  transform: translateX(${(props) => (props.open ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    display: block;
    padding: 1rem 0;
    font-size: 1.25rem;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
    border-bottom: 1px solid #eee;

    &:hover {
      color: #207dff;
    }
  }
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 900;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    animation: none;
  }
`;

const Footer = styled.footer`
  background-color: #00043c;
  color: white;
  padding: 4rem 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, padding-left 0.3s ease;
  display: inline-block;

  &:hover {
    color: #ffd31d !important;
    padding-left: 5px;
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #207dff;
    transform: translateY(-3px);
  }
`;

const Button = styled(NavLink)`
  background: #ffd31d;
  color: #00043c;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  border: none;
  text-decoration: none;
  
  &:hover {
    background: #ffc800;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    color: #00043c;
  }
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate a loading delay for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <BrowserRouter>
      {/* This new component handles scrolling to the top on every route change. */}
      <ScrollToTop />
      
      {loading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )}

      <WhatsAppButton href="https://wa.me/254740045355" target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={30} />
      </WhatsAppButton>

      {/* Mobile Menu */}
      <MobileMenuOverlay open={isMobileMenuOpen} onClick={closeMobileMenu} />
      <MobileMenu open={isMobileMenuOpen}>
        <button className="close-btn" onClick={closeMobileMenu}>
          <X size={28} />
        </button>
        <ul>
          <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
          <li><NavLink to="/services" onClick={closeMobileMenu}>Services</NavLink></li>
          <li><NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul>
      </MobileMenu>

      {/* Top Bar with contact information */}
      <div className="bg-primary py-2 text-white d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="tel:+254740045355" className="d-flex align-items-center text-white text-decoration-none me-4">
              <Phone size={16} className="me-2" /> 254740045355
            </a>
            <a href="mailto:info@eliteclean.com" className="d-flex align-items-center text-white text-decoration-none">
              <Mail size={16} className="me-2" /> info@eliteclean.com
            </a>
          </div>
          <div className="d-flex">
            <SocialIcon href="#" className="me-2"><Facebook size={16} /></SocialIcon>
            <SocialIcon href="#" className="me-2"><Twitter size={16} /></SocialIcon>
            <SocialIcon href="#" className="me-2"><Instagram size={16} /></SocialIcon>
            <SocialIcon href="#" ><Linkedin size={16} /></SocialIcon>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <Header>
        <div className="container d-flex align-items-center justify-content-between py-3">
          <NavLink to="/" className="navbar-brand fs-4 fw-bold">
            Elite<span className="text-primary">Clean</span>
          </NavLink>
          
          <div className="d-none d-lg-flex align-items-center">
            <StyledNavLink to="/" className="mx-2">Home</StyledNavLink>
            <StyledNavLink to="/services" className="mx-2">Services</StyledNavLink>
            <StyledNavLink to="/faq" className="mx-2">FAQ</StyledNavLink>
            <StyledNavLink to="/contact" className="mx-2">Contact</StyledNavLink>
            <Button to="/contact" className="ms-4">
              Get a Quote
              <ChevronRight size={16} className="ms-2" />
            </Button>
          </div>
          
          <button 
            className="d-lg-none btn btn-light p-2" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </Header>

      {/* Page Routes */}
      <Suspense fallback={<LoadingOverlay><Spinner /></LoadingOverlay>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>

 
    </BrowserRouter>
  );
};

export default App;