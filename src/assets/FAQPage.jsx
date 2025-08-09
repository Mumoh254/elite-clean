import React, { useState } from 'react';
import { 
  ChevronDown, ChevronUp, HelpCircle, 
  Phone, Mail, Clock, Check 
} from 'lucide-react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What cleaning services do you offer?",
      answer: "We offer a comprehensive range of cleaning services including regular house cleaning, deep cleaning, office cleaning, carpet cleaning, window cleaning, and specialized services like post-construction cleaning and move-in/move-out cleaning."
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer: "Yes, we prioritize using environmentally friendly cleaning products that are safe for your family, pets, and the planet. All our products are non-toxic and biodegradable."
    },
    {
      question: "How do you determine pricing for your services?",
      answer: "Our pricing is based on several factors including the size of your space, the type of cleaning required, frequency of service, and any special requests. We offer free, no-obligation estimates to provide accurate pricing."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "It's not necessary for you to be home during the cleaning. Many of our clients provide us with keys or access codes. We are fully insured and all our cleaners undergo thorough background checks for your peace of mind."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We require at least 24 hours notice for cancellations to avoid a cancellation fee. For recurring services, we're happy to reschedule at no additional charge with proper notice."
    },
    {
      question: "Do you bring your own equipment and supplies?",
      answer: "Yes, our teams come fully equipped with all necessary cleaning equipment and supplies. However, if you prefer us to use specific products you provide, we're happy to accommodate that request."
    },
    {
      question: "How do I pay for the services?",
      answer: "We accept all major credit cards, debit cards, and digital payments. Payment is typically processed after the service is completed unless you've set up a recurring service with automatic billing."
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "Customer satisfaction is our top priority. If you're not completely happy with any aspect of our service, please contact us within 24 hours and we'll return to re-clean the area at no additional charge."
    }
  ];

  const popularServices = [
    "Residential Cleaning",
    "Commercial Office Cleaning",
    "Deep Cleaning Services",
    "Carpet & Upholstery Cleaning",
    "Window Cleaning",
    "Post-Construction Cleanup",
    "Move-In/Move-Out Cleaning",
    "Special Event Cleaning"
  ];

  return (
    <div className="faq-page">
      {/* Custom CSS */}
      <style jsx global>{`
        .faq-page {
          font-family: 'Montserrat', sans-serif;
        }
        
        .faq-hero {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .accordion-button {
          border-radius: 8px !important;
          padding: 1.25rem;
          font-weight: 600;
          box-shadow: none !important;
        }
        
        .accordion-button:not(.collapsed) {
          background-color: #f8f9fa;
          color: #207dff;
        }
        
        .accordion-body {
          padding: 1.25rem;
          background-color: #f8f9fa;
          border-radius: 0 0 8px 8px;
        }
        
        .service-badge {
          display: inline-block;
          background-color: #f0f7ff;
          color: #207dff;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin: 0.25rem;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .service-badge:hover {
          background-color: #207dff;
          color: white;
          transform: translateY(-2px);
        }
        
        .contact-card {
          transition: all 0.3s ease;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        
        .btn-primary {
          background-color: #207dff;
          border: none;
          padding: 12px 25px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: #1866d1;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="faq-hero py-5 text-white d-flex align-items-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="d-inline-block bg-primary rounded-circle p-3 mb-4">
                <HelpCircle size={32} />
              </div>
              <h1 className="display-4 fw-bold mb-4">Frequently Asked Questions</h1>
              <p className="lead mb-5">
                Find answers to common questions about our cleaning services. 
                Can't find what you're looking for? Contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="bg-white p-4 p-lg-5 rounded-3 shadow-sm">
                <h2 className="h3 mb-5 text-center">Common Questions</h2>
                
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item border-0 mb-3" key={index}>
                      <h3 className="accordion-header">
                        <button 
                          className={`accordion-button ${activeIndex === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                        >
                          {faq.question}
                          {activeIndex === index ? (
                            <ChevronUp className="ms-2" size={20} />
                          ) : (
                            <ChevronDown className="ms-2" size={20} />
                          )}
                        </button>
                      </h3>
                      <div 
                        className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          <p className="mb-0">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="display-6 fw-bold mb-5">Our Popular Services</h2>
              <div className="d-flex flex-wrap justify-content-center">
                {popularServices.map((service, index) => (
                  <a 
                    href="#" 
                    className="service-badge text-decoration-none" 
                    key={index}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="contact-card bg-white p-4 text-center h-100">
                <div className="contact-icon bg-primary text-white">
                  <Phone size={24} />
                </div>
                <h3 className="h5 mb-3">Call Us</h3>
                <p className="text-muted mb-2">Speak directly with our team</p>
                <a href="tel:+0012345678" className="text-primary fw-bold text-decoration-none">
                  +00 1234 5678
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="contact-card bg-white p-4 text-center h-100">
                <div className="contact-icon bg-primary text-white">
                  <Mail size={24} />
                </div>
                <h3 className="h5 mb-3">Email Us</h3>
                <p className="text-muted mb-2">Get a quick response</p>
                <a href="mailto:info@eliteclean.com" className="text-primary fw-bold text-decoration-none">
                  info@eliteclean.com
                </a>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="contact-card bg-white p-4 text-center h-100">
                <div className="contact-icon bg-primary text-white">
                  <Clock size={24} />
                </div>
                <h3 className="h5 mb-3">Business Hours</h3>
                <p className="text-muted mb-2">Mon-Fri: 8AM - 6PM</p>
                <p className="fw-bold mb-0">Sat: 9AM - 4PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-3">Still Have Questions?</h2>
              <p className="lead mb-0">
                Our customer service team is ready to help with any additional questions you may have.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="/contact" className="btn btn-light btn-lg rounded-pill px-4">
                Contact Us <Phone size={18} className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>


  


              {/* Footer */}
<footer class="footer-ultra-modern-light text-dark pt-5 position-relative overflow-hidden">
  
  <div class="footer-wave-top position-absolute top-0 start-0 w-100"></div>

  <div class="container position-relative z-1 py-5">
    
    <div class="row align-items-center mb-5 pb-5">
      <div class="col-lg-8">
        <h2 class="display-4 fw-bold text-dark mb-3">Ready for a spotless space?</h2>
        <p class="lead text-secondary pe-lg-5">Let us handle the details. Get your free, no-obligation estimate today and discover the EliteClean difference.</p>
      </div>
      <div class="col-lg-4 text-lg-end mt-4 mt-lg-0">
        <a href="#" class="btn btn-primary btn-lg rounded-pill px-5 btn-cool-cta">Get Your Quote</a>
      </div>
    </div>
    
    <div class="content-box p-5 rounded-4 shadow-sm">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <h5 class="fw-bold text-dark mb-4">Elite<span class="text-primary">Clean</span></h5>
          <p class="text-secondary">Providing exceptional cleaning services with a personal touch. Your satisfaction is our priority.</p>
          <div class="mt-4">
            <a href="#" class="btn btn-outline-secondary btn-sm rounded-circle me-2 social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" class="btn btn-outline-secondary btn-sm rounded-circle me-2 social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            <a href="#" class="btn btn-outline-secondary btn-sm rounded-circle me-2 social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.2-11.2 11.2-.2 0-.4 0-.7-.1 1.6-9.1 8-16.4-11.2-11.2 1.6-1.7 4.5-2.9 6.2-3.1 2.3-.3 4.6-2.1 4.9-3.2-1.3-.4-2.7-.2-4.1.2C9 5.8 8.1 7.1 7.7 8.5c-.7 2.4-1.1 4.9-1.1 7.4 0 1 0 2 .2 3 .5 1.5 2.1 3 4.8 3.5 1.7 0 3.3-.2 4.9-1 3.5-.8 6.6-4.5 7.8-8.6.6-1.9.9-4 .9-6.2 0-.2-.1-.5-.1-.7.2-.1.5-.2.8-.3 1.2-1 2.2-2.3 2.8-3.6z"/></svg></a>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5 class="fw-bold text-dark mb-4">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-secondary text-decoration-none footer-link">Home</a></li>
            <li class="mb-2"><a href="#about" class="text-secondary text-decoration-none footer-link">About Us</a></li>
            <li class="mb-2"><a href="#services" class="text-secondary text-decoration-none footer-link">Services</a></li>
            <li class="mb-2"><a href="#gallery" class="text-secondary text-decoration-none footer-link">Gallery</a></li>
            <li class="mb-2"><a href="#contact" class="text-secondary text-decoration-none footer-link">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <h5 class="fw-bold text-dark mb-4">Services</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-secondary text-decoration-none footer-link">House Cleaning</a></li>
            <li class="mb-2"><a href="#" class="text-secondary text-decoration-none footer-link">Office Cleaning</a></li>
            <li class="mb-2"><a href="#" class="text-secondary text-decoration-none footer-link">Deep Cleaning</a></li>
            <li class="mb-2"><a href="#" class="text-secondary text-decoration-none footer-link">Carpet Cleaning</a></li>
            <li class="mb-2"><a href="#" class="text-secondary text-decoration-none footer-link">Window Cleaning</a></li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6">
          <h5 class="fw-bold text-dark mb-4">Contact Info</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="tel:+001234567" class="text-secondary text-decoration-none footer-link d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone text-primary me-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+00 1234 567</a></li>
            <li class="mb-2"><a href="mailto:info@eliteclean.com" class="text-secondary text-decoration-none footer-link d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-primary me-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>info@eliteclean.com</a></li>
            <li class="d-flex align-items-center"><p class="text-secondary mb-0 d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin text-primary me-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>123 Cleaning St, City, Country</p></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="text-center text-secondary mt-5 pt-4">
      <p class="mb-2">© 2024 EliteClean. All Rights Reserved.</p>
      <div class="d-flex justify-content-center">
        <a href="#" class="text-secondary text-decoration-none footer-link px-2">Privacy Policy</a>
        <span class="mx-2">|</span>
        <a href="#" class="text-secondary text-decoration-none footer-link px-2">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default FAQPage;