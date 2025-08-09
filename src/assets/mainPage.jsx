import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, Building, Droplet, Trash2, Brush, Diamond, 
  HardHat, Star, Quote, ChevronRight, Expand, Menu, 
  ChevronLeft, Check, Users, Clock, Award, HelpCircle,
  Clipboard, SprayCan, Sparkles
} from 'lucide-react';
import styled, { keyframes } from 'styled-components';

// ========== STYLED COMPONENTS (Kept for custom styling) ==========
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const AnimatedCounter = styled.div`
  text-align: center;
  padding: 1rem;
  animation: ${fadeIn} 0.6s ease forwards;
  .count {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #ffd31d;
  }
  .label {
    color: white;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const Button = styled.a`
  background: ${(props) => (props.primary ? '#207dff' : '#ffd31d')};
  color: ${(props) => (props.primary ? 'white' : '#00043c')};
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
    background: ${(props) => (props.primary ? '#1866d1' : '#ffc800')};
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

// New Styled Component for the new "Why Choose Us" section
const WhyChooseCard = styled.div`
  text-align: center;
  padding: 2.5rem 1.5rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
  }
  
  .icon-wrapper {
    width: 80px;
    height: 80px;
    background: #207dff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    
    svg {
      color: white;
      width: 40px;
      height: 40px;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00043c;
    margin-bottom: 0.75rem;
  }
  
  p {
    color: #666;
    margin: 0;
  }
`;

const ServiceCardMinimal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  height: 100%;
  text-align: left;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  .icon-container {
    width: 60px;
    height: 60px;
    background: #207dff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    
    svg {
      color: white;
      width: 28px;
      height: 28px;
    }
  }
  
  h3 {
    color: #207dff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    transition: color 0.3s ease;
  }
  
  p {
    color: #666;
    margin-bottom: 0;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.05);
  height: 100%;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  }
  
  .quote-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #207dff;
    opacity: 0.2;
    font-size: 60px;
  }
  
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 15px;
    border: 3px solid #207dff;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .rating {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    
    svg {
      color: #ffd31d;
      width: 18px;
      height: 18px;
      margin: 0 2px;
    }
  }
  
  p {
    font-style: italic;
    color: #555;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
  }
  
  h4 {
    color: #207dff;
    font-weight: 700;
    margin-bottom: 5px;
    text-align: center;
  }
  
  .position {
    color: #777;
    font-size: 14px;
    text-align: center;
    display: block;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
    
    img {
      transform: scale(1.1);
    }
    
    .overlay {
      opacity: 0.8;
    }
    
    .expand-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    
    .info {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #207dff;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .expand-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 2;
    
    svg {
      color: #207dff;
      width: 24px;
      height: 24px;
    }
  }
  
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    color: white;
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    
    .category {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 5px;
      display: block;
    }
    
    h3 {
      font-size: 18px;
      margin: 0;
    }
  }
`;

const NavLink = styled.a`
  color: ${(props) => (props.active ? '#207dff' : '#000')};
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
  
  &:hover {
    color: #207dff;
    
    &:after {
      transform: scaleX(1);
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  z-index: 1000;
  transform: translateX(${(props) => (props.open ? '0' : '100%')});
  transition: transform 0.3s ease;
  
  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  ul {
    padding: 80px 30px;
    
    li {
      margin-bottom: 15px;
      
      a {
        display: block;
        padding: 10px 0;
        color: #333;
        font-weight: 600;
        border-bottom: 1px solid #eee;
        transition: all 0.3s ease;
        text-decoration: none;
        &:hover {
          color: #207dff;
          padding-left: 10px;
        }
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
  opacity: ${(props) => (props.open ? '1' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.7s ease-in-out;
  width: ${props => props.totalSlides * 100}%;
  transform: translateX(-${props => props.currentSlide * (100 / props.itemsPerPage)}%);
`;

const CarouselItem = styled.div`
  flex: 0 0 ${props => 100 / props.itemsPerPage}%;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  
  &:hover {
    background: #207dff;
    
    svg {
      color: white;
    }
  }
  
  svg {
    color: #207dff;
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
  }
  
  &.prev {
    left: 10px;
  }
  
  &.next {
    right: 10px;
  }
`;

const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const CarouselDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: #207dff;
    width: 30px;
    border-radius: 6px;
  }
`;

const FaqSection = styled.section`
  position: relative;
  background-color: #f8f9fa;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://images.unsplash.com/photo-1627447915509-c12ac82c6a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    z-index: 0;
  }
`;

const FaqOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #207dff;
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;
  
  svg {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    svg {
      width: 150px;
      height: 150px;
    }
  }
`;

const ProcessCard = styled.div`
  text-align: center;
  position: relative;
  
  .icon-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    
    svg {
      width: 50px;
      height: 50px;
      color: #207dff;
    }
  }
  
  .step-number {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffd31d;
    color: #207dff;
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid white;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
  }
`;

// ========== COMPONENTS ==========
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 10);

          const timer = setInterval(() => {
            start += increment;
            if (start < target) {
              setCount(Math.ceil(start));
            } else {
              setCount(target);
              clearInterval(timer);
            }
          }, 10);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, started]);

  return (
    <AnimatedCounter ref={counterRef}>
      <div className="count">{count}+</div>
      <div className="label">{label}</div>
    </AnimatedCounter>
  );
};

const TestimonialCarousel = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalSlides = testimonials.length;
  const maxSlide = Math.max(0, totalSlides - itemsPerPage);
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 > maxSlide ? 0 : prev + 1));
  };
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 < 0 ? maxSlide : prev - 1));
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, maxSlide]);

  return (
    <CarouselContainer className="position-relative">
      <CarouselTrack 
        ref={carouselRef}
        currentSlide={currentSlide}
        itemsPerPage={itemsPerPage}
        totalSlides={totalSlides}
      >
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} itemsPerPage={itemsPerPage}>
            <TestimonialCard>
              <div className="quote-icon">
                <Quote />
              </div>
              <div className="avatar">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} fill="#ffd31d" />
                ))}
              </div>
              <p>"{testimonial.quote}"</p>
              <h4>{testimonial.name}</h4>
              <span className="position">{testimonial.position}</span>
            </TestimonialCard>
          </CarouselItem>
        ))}
      </CarouselTrack>
      <CarouselButton onClick={goToPrevSlide} className="prev">
        <ChevronLeft />
      </CarouselButton>
      <CarouselButton onClick={goToNextSlide} className="next">
        <ChevronRight />
      </CarouselButton>
      <CarouselDots>
        {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
          <CarouselDot
            key={idx}
            onClick={() => goToSlide(idx)}
            className={currentSlide === idx ? 'active' : ''}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

// ========== MAIN COMPONENT ==========
const MainPage = () => {
  const [activeServiceTab, setActiveServiceTab] = useState('house-cleaning');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'house-cleaning',
      icon: <Home />,
      title: 'House Cleaning',
      description: 'Comprehensive cleaning for all residential spaces, ensuring a spotless and healthy home environment.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'office-cleaning',
      icon: <Building />,
      title: 'Office Cleaning',
      description: 'Professional cleaning services to maintain a pristine and productive workspace for your business.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'washroom-sanitation',
      icon: <Droplet />,
      title: 'Washroom Sanitation',
      description: 'Thorough sanitation and disinfection of washrooms, ensuring hygiene and freshness.',
      image: 'https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'disposal-services',
      icon: <Trash2 />,
      title: 'Disposal Services',
      description: 'Efficient and responsible disposal of waste, keeping your premises clean and clutter-free.',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'window-glass-cleaning',
      icon: <Brush />,
      title: 'Window & Glass Cleaning',
      description: 'Specialized cleaning for windows and glass, providing streak-free clarity and shine.',
      image: 'https://images.unsplash.com/photo-1600566752227-8f2324d8b9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'carpet-cleaning',
      icon: <Diamond />,
      title: 'Carpet Cleaning',
      description: 'Deep cleaning and restoration for carpets, removing dirt, stains, and allergens.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'floor-care-maintenance',
      icon: <HardHat />,
      title: 'Floor Care & Maintenance',
      description: 'Comprehensive care and maintenance for all floor types, extending their life and appearance.',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'floor-polishing',
      icon: <Brush />,
      title: 'Floor Polishing',
      description: 'Professional floor polishing services to restore shine and protect your floors.',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45a16a0d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Welt  Tallis',
      position: 'Homeowner',
      quote: 'EliteClean transformed my home! Their team was professional, efficient, and left every corner sparkling. Highly recommend their house cleaning services.',
      image: '../../public/images/peter.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Welt Tallis',
      position: 'Office Manager',
      quote: 'Our office has never been cleaner. EliteClean handles everything from daily sanitation to specialized window cleaning with exceptional quality.',
      image: '../../public/images/peter.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Peter  Mumo',
      position: 'Property Manager',
      quote: 'The floor care and maintenance from EliteClean is outstanding. Our floors look brand new, and their team is always reliable.',
    image: '../../public/images/peter.jpg',
      rating: 5,
    },
    {
      id: 4,
      name: 'Peter  Mumo',
      position: 'Business Owner',
      quote: 'Exceptional service for our commercial space. EliteClean consistently delivers a clean and inviting environment for our clients and staff.',
      image: '../../public/images/peter.jpg',
      rating: 4,
    },
    {
      id: 5,
      name: 'Peter  Mumo',
      position: 'Resident',
      quote: 'Their specialized cleaning for carpets made a huge difference! My carpets look and feel brand new. Very impressed with the attention to detail.',
     image: '../../public/images/peter.jpg',
      rating: 5,
    },
  ];

  const galleryItems = [
    { 
      id: 1, 
      category: 'House Cleaning', 
      title: 'Sparkling Living Room', 
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      category: 'Office Cleaning', 
      title: 'Clean Office Space', 
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 3, 
      category: 'Washroom Sanitation', 
      title: 'Sanitized Washroom', 
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 4, 
      category: 'Carpet Cleaning', 
      title: 'Freshly Cleaned Carpet', 
      image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 5, 
      category: 'Window Cleaning', 
      title: 'Crystal Clear Windows', 
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 6, 
      category: 'Floor Polishing', 
      title: 'Polished Hardwood Floor', 
      image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' 
    },
  ];

  // Re-ordering the features array to be used in the new section
  const features = [
    {
      icon: <Users />,
      title: "Certified & Experienced Team",
      description: "Our staff are fully vetted, professionally trained, and passionate about cleanliness."
    },
    {
      icon: <Award />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee on all our services."
    },
    {
      icon: <Clock />,
      title: "Flexible Scheduling",
      description: "Book an appointment at your convenience, available 7 days a week."
    },
    {
      icon: <Check />,
      title: "Eco-Friendly Products",
      description: "We use non-toxic, sustainable cleaning supplies that are safe for your family and pets."
    }
  ];

  const faqs = [
    {
      question: 'What types of cleaning services do you offer?',
      answer: 'We offer a wide range of services, including residential house cleaning, commercial office cleaning, carpet cleaning, window washing, and specialized floor care and sanitation. You can see a full list on our Services page.'
    },
    {
      question: 'Are your cleaning products safe and eco-friendly?',
      answer: 'Yes, we are committed to using eco-friendly and non-toxic cleaning products that are safe for your family, pets, and the environment. We can also accommodate special requests for specific products if needed.'
    },
    {
      question: 'How do you determine the price for a cleaning service?',
      answer: 'Our pricing is based on several factors, including the size of the area to be cleaned, the type of service required, and the frequency of cleaning. We provide a free, no-obligation quote after a brief consultation to understand your specific needs.'
    },
    {
      question: 'Do I need to be home during the cleaning?',
      answer: 'No, you do not. Many of our clients provide us with a key or a security code, allowing us to clean while they are away. Our team is fully vetted and insured for your peace of mind.'
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment through our website\'s "Get a Quote" form, by calling us directly at +00 1234 567, or by sending an email to info@eliteclean.com. We will get back to you promptly to confirm your booking.'
    },
  ];

  const cleaningProcess = [
    {
      step: 1,
      icon: <Clipboard />,
      title: 'Consultation & Planning',
      description: 'We begin by understanding your specific needs and property details to create a custom cleaning plan.',
    },
    {
      step: 2,
      icon: <SprayCan />,
      title: 'Professional Cleaning',
      description: 'Our certified team executes the plan using state-of-the-art equipment and eco-friendly products for a deep clean.',
    },
    {
      step: 3,
      icon: <Sparkles />,
      title: 'Quality Assurance',
      description: 'We perform a final check to ensure every detail meets our high standards and your complete satisfaction.',
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Custom CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
        }
        
        .text-primary { color: #207dff; }
        .bg-primary { background-color: #207dff; }
        .text-secondary { color: #ffd31d; }
        .bg-secondary { background-color: #ffd31d; }
        
        .hero-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('../../public/images/hero.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .counter-section {
          background-image: linear-gradient(rgba(32, 125, 255, 0.9), rgba(32, 125, 255, 0.9)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .testimonial-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        
        .nav-shadow {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .service-tab {
          transition: all 0.3s ease;
        }
        
        .service-tab:hover {
          transform: translateY(-5px);
        }
        
        .service-tab.active {
          background: #ffd31d;
          color: #207dff;
        }
        
        .footer-link:hover {
          color: #ffd31d !important;
          padding-left: 5px;
        }
        
        .animate-fade-in { animation: fadeIn 0.6s ease forwards; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .position-relative:hover .prev,
        .position-relative:hover .next {
          opacity: 1;
        }

        .accordion-button {
          font-weight: 600;
        }
        
        .accordion-body {
          background-color: #f0f2f5;
        }
      `}</style>

      {/* Main Container */}
      <div className="d-flex flex-column min-vh-100">
        
        <Overlay open={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />

        {/* Hero Section */}
        <section className="hero-section vh-100 d-flex align-items-center justify-content-center text-white pt-5">
          <div className="container px-4 text-center">
            <h1 className="display-4 fw-bold mb-4 animate-fade-in">
              Professional <span className="border border-warning px-2">Cleaning</span> Services
            </h1>
            <p className="fs-5 mb-5 mx-auto max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience unparalleled cleanliness with our expert team. We deliver sparkling results every time.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button href="/services" className="me-3">
                Our Services <ChevronRight className="ms-2" />
              </Button>
              <Button primary href="/contact">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-5 bg-light">
          <div className="container px-4">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3 text-gray-800">Our Cleaning Services</h2>
              <p className="text-muted fs-5 mx-auto col-lg-8">
                We offer a wide range of professional cleaning solutions tailored to your specific needs.
              </p>
            </div>
            
            <div className="row g-4">
              {services.slice(0, 4).map((service, index) => (
                <div className="col-md-6 col-lg-3" key={service.id}>
                  <ServiceCardMinimal className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="icon-container">
                      {service.icon}
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </ServiceCardMinimal>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-5">
              <Button primary href="/services">
                View All Services <ChevronRight className="ms-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5 bg-white">
          <div className="container px-4">
            <div className="row d-flex flex-column flex-lg-row align-items-center g-5">
              <div className="col-lg-6 animate-fade-in">
                <div className="position-relative rounded-3 overflow-hidden shadow-lg" style={{ height: '384px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3ktcGFnZXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Team working together" 
                  />
                </div>
              </div>
              <div className="col-lg-6 animate-fade-in">
                <h2 className="display-6 fw-bold mb-3">About <span className="text-primary">EliteClean</span></h2>
                <h3 className="fs-5 fw-normal text-muted mb-4">Your trusted partner for a cleaner, healthier environment.</h3>
                <p className="text-muted mb-4">
                  EliteClean is dedicated to providing exceptional cleaning services for both residential and commercial clients. With years of experience, our professional team uses state-of-the-art equipment and eco-friendly products to ensure a spotless result every time.
                </p>
                <div className="d-flex align-items-start mb-3">
                  <Check size={24} className="text-primary me-3 flex-shrink-0" />
                  <p className="mb-0">
                    <strong className="d-block text-primary">Certified & Insured Team:</strong> Our staff are fully vetted, trained, and insured for your peace of mind.
                  </p>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <Check size={24} className="text-primary me-3 flex-shrink-0" />
                  <p className="mb-0">
                    <strong className="d-block text-primary">Customized Cleaning Plans:</strong> We tailor our services to meet your unique needs and schedule.
                  </p>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <Check size={24} className="text-primary me-3 flex-shrink-0" />
                  <p className="mb-0">
                    <strong className="d-block text-primary">Eco-Conscious Practices:</strong> We are committed to using sustainable and safe cleaning methods.
                  </p>
                </div>
                <Button primary href="/contact">
                  Learn More <ChevronRight className="ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Section */}
        <section className="counter-section py-5 text-white">
          <div className="container px-4">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <Counter target={1200} label="Happy Clients" />
              </div>
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <Counter target={3500} label="Projects Completed" />
              </div>
              <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <Counter target={15} label="Years of Experience" />
              </div>
              <div className="col-lg-3 col-sm-6">
                <Counter target={25} label="Certified Professionals" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section id="gallery" className="py-5 bg-white">
          <div className="container px-4">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3 text-gray-800">Our Work Gallery</h2>
              <p className="text-muted fs-5 mx-auto col-lg-8">
                See the quality and detail of our professional cleaning services for yourself.
              </p>
            </div>
            <div className="row g-4">
              {galleryItems.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <GalleryItem>
                    <img src={item.image} alt={item.title} />
                    <div className="overlay"></div>
                    <div className="expand-icon">
                      <Expand />
                    </div>
                    <div className="info">
                      <span className="category">{item.category}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </GalleryItem>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonial-section py-5 text-white">
          <div className="container px-4">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3">What Our Clients Say</h2>
              <p className="fs-5 mb-5 mx-auto col-lg-8">
                Hear from our satisfied customers about their experience with EliteClean.
              </p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
        
        {/* Cleaning Process Section */}
        <section className="py-5 bg-light">
          <div className="container px-4">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3 text-gray-800">Our Cleaning Process</h2>
              <p className="fs-5 text-muted mx-auto col-lg-8">
                We follow a simple, three-step process to ensure a flawless and efficient cleaning experience from start to finish.
              </p>
            </div>
            <div className="row g-5">
              {cleaningProcess.map((process, index) => (
                <div className="col-md-4" key={index}>
                  <ProcessCard className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="icon-wrapper">
                      {process.icon}
                      <span className="step-number">{process.step}</span>
                    </div>
                    <h3>{process.title}</h3>
                    <p>{process.description}</p>
                  </ProcessCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection id="faq" className="py-5">
          <FaqOverlay>
            <HelpCircle />
          </FaqOverlay>
          <div className="container px-4 position-relative z-2">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="fs-5 text-muted mx-auto col-lg-8">
                Find answers to the most common questions about our cleaning services.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="accordion" id="faqAccordion">
                  {faqs.map((faq, index) => (
                    <div className="accordion-item mb-3 rounded-lg shadow-sm" key={index}>
                      <h2 className="accordion-header" id={`heading${index}`}>
                        <button 
                          className="accordion-button collapsed" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          data-bs-target={`#collapse${index}`} 
                          aria-expanded="false" 
                          aria-controls={`collapse${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div 
                        id={`collapse${index}`} 
                        className="accordion-collapse collapse" 
                        aria-labelledby={`heading${index}`} 
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body text-muted">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FaqSection>
        
  
        <section id="why-choose-us" className="py-5 bg-white">
          <div className="container px-4">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3 text-gray-800">Why Choose EliteClean?</h2>
              <p className="fs-5 text-muted mx-auto col-lg-8">
                We go beyond basic cleaning to provide a superior, reliable, and trustworthy service you can depend on.
              </p>
            </div>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <WhyChooseCard className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="icon-wrapper">
                      {feature.icon}
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </WhyChooseCard>
                </div>
              ))}
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
    </div>
  );
};

export default MainPage;