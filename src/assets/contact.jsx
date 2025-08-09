import React from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import styled from 'styled-components';

const Button = styled.a`
  background: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
  color: white;
  padding: 12px 24px;
  border-radius: 50px; /* Modern, pill-shaped buttons */
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
    background: ${(props) => (props.primary ? '#0056b3' : '#5a6268')};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
  
  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const ContactPage = () => {
  return (
    <>
      {/* Global styles for input fields */}
      <style jsx global>{`
        .form-control {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          padding: 1rem;
          font-size: 1rem;
          border-radius: 12px; /* Smoother, modern corners */
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
          background-color: #fff;
        }

        .contact-info-item {
          padding: 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
          background: #f8f9fa;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .contact-info-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.1);
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .hero-section {
          background: #f0f4f8;
          padding: 100px 0;
          text-align: center;
        }

        .title-h1 {
          font-weight: 800;
          color: #00043c;
          font-size: 3.5rem;
        }
      `}</style>

      {/* Hero Section with a clean title */}
      <section className="hero-section">
        <div className="container">
          <h1 className="title-h1 mb-3">Get in Touch with Us 🤝</h1>
          <p className="fs-5 text-muted mx-auto col-lg-8">
            We'd love to hear from you. Reach out to our team in Nairobi for a free quote or any inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <div className="container px-4">
          <div className="row g-5 align-items-center">
            {/* Contact Form */}
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-4">
                  <input type="tel" className="form-control" placeholder="Phone Number" />
                </div>
                <div className="mb-4">
                  <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <Button primary href="#" type="submit">
                  Send Message <Send className="ms-2" />
                </Button>
              </form>
            </div>
            
            {/* Contact Information & Map */}
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Our Details & Location</h2>
              <div className="contact-info-item">
                <div className="d-flex align-items-start">
                  <Phone size={32} className="text-primary me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 fw-bold">Phone Number</h5>
                    <a href="tel:+254712345678" className="text-muted text-decoration-none">+254 712 345 678</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="d-flex align-items-start">
                  <Mail size={32} className="text-primary me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 fw-bold">Email Address</h5>
                    <a href="mailto:info@eliteclean.co.ke" className="text-muted text-decoration-none">info@eliteclean.co.ke</a>
                  </div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="d-flex align-items-start">
                  <MapPin size={32} className="text-primary me-3 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="mb-1 fw-bold">Our Office</h5>
                    <p className="text-muted mb-0">Waiyaki Way, Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Updated Google Maps iframe for Nairobi */}
              <div className="mt-5 map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.043644078563!2d36.790998399999996!3d-1.2828557999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170f3f20b411%3A0x6d90e8f3e5b3c4a2!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1689710000000!5m2!1sen!2ske"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location in Nairobi"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;