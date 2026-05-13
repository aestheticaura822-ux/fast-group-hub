import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Play, Pause, Sparkles, TrendingUp, 
  Users, Award, Globe, Printer, 
  Zap, Shield, Star, Heart, Leaf, 
  Phone, Calendar, Truck, DollarSign, CheckCircle,
  Briefcase, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter
} from 'lucide-react';

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const heroVideoRef = useRef(null);
  const [stats, setStats] = useState({ clients: 0, projects: 0, years: 0 });

  // Website Data
  const websites = [
    {
      id: 1,
      name: "Fast Group Main",
      url: "https://fast-group-frontend-clean.vercel.app/",
      description: "Complete business solutions and corporate services for modern enterprises.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600",
      features: ["Business Consulting", "Project Management", "Strategic Planning"],
      icon: Globe
    },
    {
      id: 2,
      name: "Fast Printing",
      url: "https://fast-printing-frontend.vercel.app/",
      description: "Premium printing and packaging solutions for businesses of all sizes.",
      image: "https://pixabay.com/get/g5ded3a9645be0d978cad6e80dd7d9bfe072c0e1d842df2b4bbebf2fb1e129fb83f9a3f6117507b1c449c886bfffde5b6_1920.jpg",
      features: ["Free Design", "Fast Delivery", "Premium Quality"],
      icon: Printer
    },
    {
      id: 3,
      name: "Fast Marketing",
      url: "https://fast-marketing-app.vercel.app/",
      description: "Digital marketing agency that drives real results for your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
      icon: TrendingUp
    }
  ];

  // Features Data
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Quick turnaround times without compromising quality", delay: 0 },
    { icon: Shield, title: "100% Secure", desc: "Your data and transactions are fully protected", delay: 100 },
    { icon: Star, title: "Premium Quality", desc: "Top-notch quality across all our services", delay: 200 },
    { icon: Heart, title: "24/7 Support", desc: "Round-the-clock customer support available", delay: 300 },
    { icon: Truck, title: "Fast Delivery", desc: "Express delivery options available", delay: 400 },
    { icon: DollarSign, title: "Best Price", desc: "Competitive pricing with great value", delay: 500 },
    { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable practices and materials", delay: 600 },
    { icon: Users, title: "Expert Team", desc: "Experienced professionals at your service", delay: 700 }
  ];

  // Testimonials Data
  const testimonials = [
    { name: "Ahmed Raza", role: "CEO, Tech Solutions", text: "Fast Group transformed our business completely. Their professional approach and quality service is unmatched.", rating: 5, image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sarah Khan", role: "Marketing Director", text: "The printing quality and delivery speed is exceptional. Highly recommended for all businesses.", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Michael Chen", role: "Business Owner", text: "Best digital marketing agency we've worked with. Our ROI increased by 200% in just 3 months.", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" }
  ];

  useEffect(() => {
    const animateStats = () => {
      const targets = { clients: 8000, projects: 25000, years: 15 };
      const duration = 2000;
      const step = 20;
      let current = { clients: 0, projects: 0, years: 0 };
      
      const interval = setInterval(() => {
        let allCompleted = true;
        Object.keys(targets).forEach(key => {
          if (current[key] < targets[key]) {
            allCompleted = false;
            current[key] = Math.min(current[key] + Math.ceil(targets[key] / (duration / step)), targets[key]);
          }
        });
        setStats({ ...current });
        if (allCompleted) clearInterval(interval);
      }, step);
    };
    
    animateStats();
  }, []);

  const toggleVideo = () => {
    if (heroVideoRef.current) {
      if (isVideoPlaying) heroVideoRef.current.pause();
      else heroVideoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Scroll reveal effect
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => observer.observe(reveal));
    return () => reveals.forEach(reveal => observer.unobserve(reveal));
  }, []);

  const colors = {
    red: '#DC2626',
    redDark: '#B91C1C',
    redLight: '#FEE2E2',
    white: '#FFFFFF',
    silver: '#F3F4F6',
    silverDark: '#E5E7EB',
    greyDark: '#1F2937',
    greyMedium: '#4B5563',
    greyLight: '#6B7280'
  };

  return (
    <div style={{ backgroundColor: colors.white }}>
      {/* ========== ANIMATION STYLES ========== */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .reveal-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease-out;
        }
        
        .reveal-left.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .reveal-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease-out;
        }
        
        .reveal-right.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, ${colors.red}, ${colors.redDark});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      {/* ========== HERO SECTION ========== */}
<section style={{ 
  position: 'relative', 
  minHeight: '100vh', 
  display: 'flex', 
  alignItems: 'center', 
  overflow: 'hidden' 
}}>
  {/* Video Background */}
  <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
    <video
      ref={heroVideoRef}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    >
      <source src="https://cdn.pixabay.com/video/2022/08/07/126990-737419647_medium.mp4" type="video/mp4" />
    </video>
    {/* Overlay - Opacity kam kiya video dikhne ke liye */}
    <div style={{ 
      position: 'absolute', 
      inset: 0, 
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(236, 236, 236, 0.2) 100%)`,
    }}></div>
  </div>

  {/* Video Control Button */}
  <button 
    onClick={toggleVideo}
    style={{
      position: 'absolute',
      bottom: 30,
      right: 30,
      zIndex: 20,
      width: 52,
      height: 52,
      backgroundColor: colors.red,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s',
      boxShadow: `0 4px 15px rgba(220,38,38,0.4)`
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.backgroundColor = colors.redDark;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.backgroundColor = colors.red;
    }}
  >
    {isVideoPlaying ? <Pause size={22} color="white" /> : <Play size={22} color="white" />}
  </button>


        {/* Hero Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, width: '100%' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Badge */}
            <div className="reveal" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              backgroundColor: colors.redLight, 
              borderRadius: '100px', 
              padding: '8px 24px', 
              marginBottom: '28px',
              border: `1px solid ${colors.silverDark}`
            }}>
              <Sparkles size={18} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>WELCOME TO FAST GROUP</span>
            </div>
            
            {/* Heading */}
            <h1 className="reveal" style={{ 
              fontSize: 'clamp(44px, 8vw, 84px)', 
              fontWeight: '800', 
              color: colors.greyDark, 
              marginBottom: '24px', 
              lineHeight: '1.15',
              letterSpacing: '-0.02em'
            }}>
              Fast Group of <br />
              <span className="gradient-text">International Agencies</span>
            </h1>
            
            {/* Description */}
            <p className="reveal" style={{ 
              fontSize: '20px', 
              color: colors.greyMedium, 
              marginBottom: '36px', 
              maxWidth: '650px', 
              margin: '0 auto 36px',
              lineHeight: '1.6'
            }}>
              Your gateway to premium printing, digital marketing, and business solutions. 
              Three powerful platforms, one unified experience.
            </p>
            
            {/* Buttons */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <Link to="/websites">
                <button style={{
                  background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                  color: colors.white,
                  padding: '16px 36px',
                  borderRadius: '14px',
                  fontWeight: '700',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: `0 6px 20px rgba(220,38,38,0.35)`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 8px 25px rgba(220,38,38,0.45)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 6px 20px rgba(220,38,38,0.35)`;
                }}>
                  Explore Our Websites <ArrowRight size={18} />
                </button>
              </Link>
              <a href="tel:16042396141">
                <button style={{
                  border: `2px solid ${colors.red}`,
                  backgroundColor: 'transparent',
                  color: colors.red,
                  padding: '16px 36px',
                  borderRadius: '14px',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.red;
                  e.currentTarget.style.color = colors.white;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.red;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <Phone size={18} /> Call +1 (604) 239-6141
                </button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '50px' }}>
              {[
                { text: "5000+ Happy Clients", icon: Users },
                { text: "15+ Years Experience", icon: Award },
                { text: "24/7 Support", icon: Clock }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <item.icon size={16} color={colors.greyLight} />
                  <span style={{ fontSize: '13px', color: colors.greyLight }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          zIndex: 10
        }}>
          <div style={{
            width: 32,
            height: 52,
            border: `2px solid ${colors.red}`,
            borderRadius: 30,
            display: 'flex',
            justifyContent: 'center',
            opacity: 0.7
          }}>
            <div style={{
              width: 4,
              height: 12,
              backgroundColor: colors.red,
              borderRadius: 2,
              marginTop: 10,
              animation: 'pulse 1.5s infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section style={{ padding: '70px 0', background: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px' }}>
            {[
              { icon: Users, value: stats.clients, label: "Happy Clients", suffix: "+", color: colors.red },
              { icon: Award, value: stats.projects, label: "Projects Completed", suffix: "+", color: colors.red },
              { icon: Calendar, value: stats.years, label: "Years Experience", suffix: "+", color: colors.red }
            ].map((item, index) => (
              <div key={index} className="reveal" style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: colors.white, borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 70, height: 70, background: colors.redLight, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <item.icon size={36} color={colors.red} />
                </div>
                <div style={{ fontSize: '52px', fontWeight: '800', color: colors.greyDark, marginBottom: '12px', letterSpacing: '-0.02em' }}>
                  {item.value.toLocaleString()}{item.suffix}
                </div>
                <div style={{ color: colors.greyLight, fontSize: '16px', fontWeight: '500' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WEBSITES SECTION ========== */}
      <section style={{ padding: '100px 0', background: colors.white }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: colors.redLight, borderRadius: '100px', padding: '6px 20px', marginBottom: '20px' }}>
              <Globe size={16} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>OUR DIGITAL ECOSYSTEM</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.greyDark, marginBottom: '16px' }}>
              Explore Our <span className="gradient-text">Websites</span>
            </h2>
            <p style={{ color: colors.greyMedium, maxWidth: '650px', margin: '0 auto', fontSize: '18px' }}>
              Three specialized platforms serving different aspects of your business needs
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '35px' }}>
            {websites.map((website, index) => (
              <div key={index} className="reveal hover-lift" style={{
                backgroundColor: colors.white,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                border: `1px solid ${colors.silverDark}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.red;
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(220,38,38,0.12)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.silverDark;
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.06)';
              }}>
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img 
                    src={website.image} 
                    alt={website.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16, 
                    backgroundColor: colors.red, 
                    color: colors.white, 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                  }}>
                    FEATURED
                  </div>
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                    <div style={{ width: 52, height: 52, background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <website.icon size={26} color={colors.white} />
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: '700', color: colors.greyDark }}>{website.name}</h3>
                  </div>
                  <p style={{ color: colors.greyMedium, marginBottom: '22px', lineHeight: '1.6' }}>{website.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                    {website.features.map((feature, i) => (
                      <span key={i} style={{ fontSize: '12px', backgroundColor: colors.silver, color: colors.greyMedium, padding: '5px 14px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={12} color={colors.red} /> {feature}
                      </span>
                    ))}
                  </div>
                  <a href={website.url} target="_blank" rel="noopener noreferrer">
                    <button style={{
                      width: '100%',
                      background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                      color: colors.white,
                      padding: '14px',
                      borderRadius: '14px',
                      fontWeight: '600',
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      Visit Website →
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section style={{ padding: '90px 0', background: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '55px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: '800', color: colors.greyDark, marginBottom: '16px' }}>
              Why Choose <span className="gradient-text">Fast Group</span>
            </h2>
            <p style={{ color: colors.greyMedium, maxWidth: '650px', margin: '0 auto', fontSize: '18px' }}>
              We deliver excellence across all our platforms with unmatched quality and service
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {features.map((feature, index) => (
              <div key={index} className="reveal" style={{
                backgroundColor: colors.white,
                padding: '32px 24px',
                borderRadius: '20px',
                textAlign: 'center',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                border: `1px solid ${colors.silverDark}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = colors.red;
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(220,38,38,0.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.silverDark;
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
              }}>
                <div style={{ width: 64, height: 64, background: colors.redLight, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <feature.icon size={32} color={colors.red} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ color: colors.greyLight, fontSize: '14px', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section style={{ padding: '100px 0', background: colors.white }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '55px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: colors.redLight, borderRadius: '100px', padding: '6px 20px', marginBottom: '20px' }}>
              <Star size={16} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>CLIENT TESTIMONIALS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: '800', color: colors.greyDark, marginBottom: '16px' }}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p style={{ color: colors.greyMedium, maxWidth: '650px', margin: '0 auto', fontSize: '18px' }}>
              Real stories from real clients who trust Fast Group
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="reveal" style={{
                backgroundColor: colors.silver,
                padding: '32px',
                borderRadius: '24px',
                transition: 'all 0.3s',
                border: `1px solid ${colors.silverDark}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = colors.red;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.silverDark;
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={colors.red} color={colors.red} />
                  ))}
                </div>
                <p style={{ color: colors.greyDark, fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: 50, height: 50, background: colors.redLight, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={24} color={colors.red} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: colors.greyDark }}>{testimonial.name}</h4>
                    <p style={{ fontSize: '13px', color: colors.greyLight }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{ 
        padding: '90px 0', 
        background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.redDark} 100%)`, 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600")', 
          opacity: 0.08, 
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}></div>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: '800', color: colors.white, marginBottom: '20px' }}>
            Ready to Work With Us?
          </h2>
          <p className="reveal" style={{ fontSize: '19px', color: 'rgba(255,255,255,0.92)', marginBottom: '36px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Let's bring your ideas to life. Contact us today for a free consultation.
          </p>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <a href="https://wa.me/16042396141" target="_blank" rel="noopener noreferrer">
              <button style={{
                backgroundColor: '#25D366',
                color: colors.white,
                padding: '16px 38px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                📱 WhatsApp Now
              </button>
            </a>
            <Link to="/contact">
              <button style={{
                backgroundColor: colors.white,
                color: colors.red,
                padding: '16px 38px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                Contact Us →
              </button>
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;