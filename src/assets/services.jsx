import React from 'react';
import { Home, Building, Droplet, Trash2, Brush, Diamond, HardHat, ChevronRight } from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Global styles for a cleaner design, can be moved to a separate file if needed
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    color: #495057;
  }
  .display-4 {
    font-weight: 700;
  }
  .btn-cool-cta {
    background-color: #207dff !important;
    color: white !important;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(32, 125, 255, 0.25);
    &:hover {
      background-color: #1a6ac9 !important;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(32, 125, 255, 0.35);
    }
  }
  .footer-ultra-modern-light {
    background-color: #f0f7ff;
    position: relative;
    padding-bottom: 0; /* Adjust for wave */
  }
  .content-box {
    background-color: white;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }
  .social-icon {
    transition: all 0.3s ease;
    &:hover {
      background-color: #207dff;
      border-color: #207dff;
      svg {
        color: white;
      }
    }
    svg {
      transition: all 0.3s ease;
      color: #6c757d;
    }
  }
  .footer-link {
    transition: color 0.3s ease;
    &:hover {
      color: #207dff !important;
    }
  }
`;

// Keyframes for a subtle entrance animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// The styled component for each service card, now with a more premium look
const ServiceCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  height: 100%;
  border: 1px solid #e9ecef;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: #207dff;
  }
  
  .icon-container {
    width: 70px;
    height: 70px;
    background: #207dff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    
    svg {
      color: white;
      width: 32px;
      height: 32px;
    }
  }
  
  h3 {
    color: #212529;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
    transition: color 0.3s ease;
  }
  
  p {
    color: #6c757d;
    margin-bottom: 30px;
    text-align: center;
    font-size: 16px;
    line-height: 1.6;
  }
  
  .action-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ffd31d;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    z-index: 3;
    
    svg {
      color: #212529;
      width: 20px;
      height: 20px;
      transition: all 0.5s ease-in-out;
    }
  }
  
  &:hover .action-button {
    bottom: 25px; /* Brings the button up */
    transform: translateX(-50%) rotate(360deg);
  }
  
  &:hover h3, &:hover .icon-container {
    color: #207dff;
    .icon-container {
      background: #ffd31d;
    }
    svg {
      color: #207dff;
    }
  }
`;

// Define the services data with icons
const services = [
  {
    id: 'house-cleaning',
    icon: <Home />,
    title: 'House Cleaning',
    description: 'Comprehensive cleaning for all residential spaces, ensuring a spotless and healthy home environment.',
  },
  {
    id: 'office-cleaning',
    icon: <Building />,
    title: 'Office Cleaning',
    description: 'Professional cleaning services to maintain a pristine and productive workspace for your business.',
  },
  {
    id: 'washroom-sanitation',
    icon: <Droplet />,
    title: 'Washroom Sanitation',
    description: 'Thorough sanitation and disinfection of washrooms, ensuring hygiene and freshness.',
  },
  {
    id: 'disposal-services',
    icon: <Trash2 />,
    title: 'Disposal Services',
    description: 'Efficient and responsible disposal of waste, keeping your premises clean and clutter-free.',
  },
  {
    id: 'window-glass-cleaning',
    icon: <Brush />,
    title: 'Window & Glass Cleaning',
    description: 'Specialized cleaning for windows and glass, providing streak-free clarity and shine.',
  },
  {
    id: 'carpet-cleaning',
    icon: <Diamond />,
    title: 'Carpet Cleaning',
    description: 'Deep cleaning and restoration for carpets, removing dirt, stains, and allergens.',
  },
  {
    id: 'floor-care-maintenance',
    icon: <HardHat />,
    title: 'Floor Care & Maintenance',
    description: 'Comprehensive care and maintenance for all floor types, extending their life and appearance.',
  },
  {
    id: 'floor-polishing',
    icon: <Brush />,
    title: 'Floor Polishing',
    description: 'Professional floor polishing services to restore shine and protect your floors.',
  },
];

// The main ServicesPage component
const ServicesPage = () => {
  return (
    <>
      <GlobalStyle />
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container px-4 text-center">
          <h1 className="display-4 fw-bold mb-3 text-dark">Our Services</h1>
          <p className="fs-5 text-muted mx-auto col-lg-8">
            Explore our wide range of professional cleaning solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 bg-white">
        <div className="container px-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {services.map((service) => (
              <div className="col" key={service.id}>
                <ServiceCard>
                  <div className="icon-container">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={`#${service.id}`} className="action-button">
                    <ChevronRight />
                  </a>
                </ServiceCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer className="footer-ultra-modern-light text-dark pt-5 position-relative overflow-hidden">
        <div className="container position-relative z-1 py-5">
          <div className="row align-items-center mb-5 pb-5">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold text-dark mb-3">Ready for a spotless space?</h2>
              <p className="lead text-secondary pe-lg-5">Let us handle the details. Get your free, no-obligation estimate today and discover the EliteClean difference.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a href="#" className="btn btn-primary btn-lg rounded-pill px-5 btn-cool-cta">Get Your Quote</a>
            </div>
          </div>
          <div className="content-box p-5 rounded-4 shadow-sm">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <h5 className="fw-bold text-dark mb-4">Elite<span className="text-primary">Clean</span></h5>
                <p className="text-secondary">Providing exceptional cleaning services with a personal touch. Your satisfaction is our priority.</p>
                <div className="mt-4">
                  {/* Social Icons */}
                  <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle me-2 social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                  <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle me-2 social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                  <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle me-2 social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.2-11.2 11.2-.2 0-.4 0-.7-.1 1.6-9.1 8-16.4-11.2-11.2 1.6-1.7 4.5-2.9 6.2-3.1 2.3-.3 4.6-2.1 4.9-3.2-1.3-.4-2.7-.2-4.1.2C9 5.8 8.1 7.1 7.7 8.5c-.7 2.4-1.1 4.9-1.1 7.4 0 1 0 2 .2 3 .5 1.5 2.1 3 4.8 3.5 1.7 0 3.3-.2 4.9-1 3.5-.8 6.6-4.5 7.8-8.6.6-1.9.9-4 .9-6.2 0-.2-.1-.5-.1-.7.2-.1.5-.2.8-.3 1.2-1 2.2-2.3 2.8-3.6z"/></svg></a>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                <h5 className="fw-bold text-dark mb-4">Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none footer-link">Home</a></li>
                  <li className="mb-2"><a href="#about" className="text-secondary text-decoration-none footer-link">About Us</a></li>
                  <li className="mb-2"><a href="#services" className="text-secondary text-decoration-none footer-link">Services</a></li>
                  <li className="mb-2"><a href="#gallery" className="text-secondary text-decoration-none footer-link">Gallery</a></li>
                  <li className="mb-2"><a href="#contact" className="text-secondary text-decoration-none footer-link">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="fw-bold text-dark mb-4">Services</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none footer-link">House Cleaning</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none footer-link">Office Cleaning</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none footer-link">Deep Cleaning</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none footer-link">Carpet Cleaning</a></li>
                  <li className="mb-2"><a href="#" className="text-secondary text-decoration-none footer-link">Window Cleaning</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="fw-bold text-dark mb-4">Contact Info</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="tel:+001234567" className="text-secondary text-decoration-none footer-link d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-primary me-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+00 1234 567</a></li>
                  <li className="mb-2"><a href="mailto:info@eliteclean.com" className="text-secondary text-decoration-none footer-link d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-primary me-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>info@eliteclean.com</a></li>
                  <li className="d-flex align-items-center"><p className="text-secondary mb-0 d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-primary me-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>123 Cleaning St, City, Country</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-secondary mt-5 pt-4">
            <p className="mb-2">© 2024 EliteClean. All Rights Reserved.</p>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-secondary text-decoration-none footer-link px-2">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-secondary text-decoration-none footer-link px-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ServicesPage;