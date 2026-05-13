import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, Globe, TrendingUp, Package, Zap, Shield, Star, Users, Briefcase,
  CheckCircle, Truck, Layout, Phone, Award, Heart, Leaf,
  Play, Pause, ArrowRight, Clock, DollarSign
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const services = {
    printing: {
      title: "Printing Services",
      icon: Printer,
      gradient: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
      services: [
        { name: "Business Cards", desc: "Premium quality business cards with various finishes", price: "PKR 3,000", features: ["Matte/Gloss finish", "Spot UV available", "Free design"] },
        { name: "Brochures & Flyers", desc: "Eye-catching marketing materials", price: "PKR 5,000", features: ["Tri-fold available", "Premium paper", "Fast delivery"] },
        { name: "Banners & Posters", desc: "Large format printing for events", price: "PKR 2,500", features: ["Waterproof", "UV protected", "Custom sizes"] },
        { name: "Custom Packaging", desc: "Branded boxes and packaging", price: "PKR 15,000", features: ["Eco-friendly", "Custom shapes", "Bulk discounts"] },
        { name: "Labels & Stickers", desc: "Custom stickers for branding", price: "PKR 4,000", features: ["Waterproof", "Die-cut options", "Holographic"] },
        { name: "Wedding Cards", desc: "Elegant wedding invitations", price: "PKR 8,000", features: ["Foil stamping", "Embossing", "Custom designs"] }
      ]
    },
    marketing: {
      title: "Digital Marketing Services",
      icon: TrendingUp,
      gradient: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
      services: [
        { name: "SEO Optimization", desc: "Rank higher on search engines", price: "$500/mo", features: ["Keyword research", "On-page SEO", "Link building"] },
        { name: "Social Media Marketing", desc: "Grow your social presence", price: "$400/mo", features: ["Content creation", "Paid ads", "Analytics"] },
        { name: "PPC Campaigns", desc: "Google & Meta ads management", price: "$600/mo", features: ["Ad creation", "A/B testing", "ROI tracking"] },
        { name: "Content Marketing", desc: "Engaging content strategy", price: "$300/mo", features: ["Blog writing", "Video content", "Email marketing"] },
        { name: "Web Development", desc: "Professional websites", price: "$2,000", features: ["Responsive design", "SEO friendly", "Fast hosting"] },
        { name: "Email Marketing", desc: "Automated email campaigns", price: "$200/mo", features: ["Newsletters", "Automation", "Analytics"] }
      ]
    },
    corporate: {
      title: "Corporate Solutions",
      icon: Globe,
      gradient: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
      services: [
        { name: "Business Consulting", desc: "Strategic business advice", price: "Custom", features: ["Market analysis", "Growth strategy", "Risk assessment"] },
        { name: "Project Management", desc: "End-to-end project delivery", price: "Custom", features: ["Planning", "Execution", "Reporting"] },
        { name: "Training Programs", desc: "Employee development", price: "Custom", features: ["Workshops", "Online courses", "Certification"] },
        { name: "Market Research", desc: "Data-driven insights", price: "Custom", features: ["Surveys", "Competitor analysis", "Trends"] }
      ]
    }
  };

  const processSteps = [
    { step: "01", title: "Consultation", desc: "Understanding your needs and goals", icon: Users },
    { step: "02", title: "Planning", desc: "Creating customized strategy", icon: Layout },
    { step: "03", title: "Execution", desc: "Professional implementation", icon: Zap },
    { step: "04", title: "Delivery", desc: "Quality assurance & delivery", icon: Truck },
    { step: "05", title: "Support", desc: "Ongoing maintenance & support", icon: Heart }
  ];

  const whyChooseUs = [
    { icon: Zap, title: "Fast Turnaround", desc: "Quick delivery without compromising quality" },
    { icon: Shield, title: "Quality Guaranteed", desc: "100% satisfaction or money back" },
    { icon: Star, title: "Expert Team", desc: "Skilled professionals with years of experience" },
    { icon: Heart, title: "Customer First", desc: "Dedicated support for every client" },
    { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable practices and materials" },
    { icon: Award, title: "Award Winning", desc: "Recognized for excellence in service" }
  ];

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

  return (
    <div style={{ backgroundColor: colors.white, paddingTop: '80px' }}>
      
      {/* ========== HERO SECTION WITH VIDEO ========== */}
      <section style={{ 
        position: 'relative', 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden' 
      }}>
        {/* Video Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="https://cdn.pixabay.com/video/2019/09/04/26533-357855242_medium.mp4" type="video/mp4" />
          </video>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(243, 244, 246, 0.4) 100%)`
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
            width: 48,
            height: 48,
            backgroundColor: colors.red,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: `0 4px 15px rgba(220,38,38,0.3)`
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
          {isVideoPlaying ? <Pause size={20} color="white" /> : <Play size={20} color="white" />}
        </button>

        {/* Hero Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, width: '100%' }}>
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              backgroundColor: colors.redLight, 
              borderRadius: '100px', 
              padding: '8px 24px', 
              marginBottom: '24px' 
            }}>
              <Zap size={16} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '13px', fontWeight: '600' }}>WHAT WE OFFER</span>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)', 
              fontWeight: '800', 
              color: colors.greyDark, 
              marginBottom: '20px' 
            }}>
              Our <span style={{ color: colors.red }}>Services</span>
            </h1>
            <p style={{ fontSize: '18px', color: colors.greyMedium, lineHeight: '1.6' }}>
              Comprehensive solutions tailored to meet your business needs across printing, 
              marketing, and corporate services.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SERVICE TABS ========== */}
      <section style={{ 
        padding: '16px 0', 
        position: 'sticky', 
        top: '80px', 
        zIndex: 100,
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.silverDark}`,
        boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 28px',
                borderRadius: '40px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === 'all' ? colors.red : colors.silver,
                color: activeTab === 'all' ? colors.white : colors.greyMedium,
                border: 'none'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== 'all') {
                  e.currentTarget.style.backgroundColor = colors.silverDark;
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'all') {
                  e.currentTarget.style.backgroundColor = colors.silver;
                }
              }}
            >
              <Globe size={16} /> All Services
            </button>
            <button
              onClick={() => setActiveTab('printing')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 28px',
                borderRadius: '40px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === 'printing' ? colors.red : colors.silver,
                color: activeTab === 'printing' ? colors.white : colors.greyMedium,
                border: 'none'
              }}
            >
              <Printer size={16} /> Printing
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 28px',
                borderRadius: '40px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === 'marketing' ? colors.red : colors.silver,
                color: activeTab === 'marketing' ? colors.white : colors.greyMedium,
                border: 'none'
              }}
            >
              <TrendingUp size={16} /> Digital Marketing
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 28px',
                borderRadius: '40px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backgroundColor: activeTab === 'corporate' ? colors.red : colors.silver,
                color: activeTab === 'corporate' ? colors.white : colors.greyMedium,
                border: 'none'
              }}
            >
              <Briefcase size={16} /> Corporate
            </button>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {(activeTab === 'all' ? Object.keys(services) : [activeTab]).map((category) => {
            const service = services[category];
            if (!service) return null;
            
            return (
              <div key={category} style={{ marginBottom: activeTab === 'all' ? '60px' : '0' }}>
                {activeTab === 'all' && (
                  <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: service.gradient,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <service.icon size={24} color={colors.white} />
                    </div>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.greyDark }}>{service.title}</h2>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '28px' }}>
                  {service.services.map((item, idx) => (
                    <div key={idx} className="reveal" style={{
                      backgroundColor: colors.white,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: `1px solid ${colors.silverDark}`,
                      transition: 'all 0.3s',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = colors.red;
                      e.currentTarget.style.boxShadow = `0 20px 35px rgba(220,38,38,0.08)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = colors.silverDark;
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                    }}>
                      <div style={{ padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                          <div style={{
                            width: '52px',
                            height: '52px',
                            background: colors.redLight,
                            borderRadius: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <Package size={24} color={colors.red} />
                          </div>
                          <span style={{
                            backgroundColor: colors.redLight,
                            color: colors.red,
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '700'
                          }}>{item.price}</span>
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark, marginBottom: '10px' }}>{item.name}</h3>
                        <p style={{ color: colors.greyMedium, fontSize: '14px', lineHeight: '1.5', marginBottom: '16px' }}>{item.desc}</p>
                        <div style={{ marginBottom: '20px' }}>
                          {item.features.map((feature, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                              <CheckCircle size={14} color={colors.red} />
                              <span style={{ color: colors.greyLight, fontSize: '13px' }}>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a href="https://wa.me/16042396141" target="_blank" rel="noopener noreferrer">
                          <button style={{
                            width: '100%',
                            background: service.gradient,
                            color: colors.white,
                            padding: '12px',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '14px',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '0.9';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '1';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}>
                            Get Quote →
                          </button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section style={{ padding: '60px 0', backgroundColor: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              How We <span style={{ color: colors.red }}>Work</span>
            </h2>
            <p style={{ color: colors.greyMedium }}>A streamlined process designed for your convenience and satisfaction</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {processSteps.map((step, index) => (
              <div key={index} className="reveal" style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <step.icon size={36} color={colors.white} />
                </div>
                <div style={{ color: colors.red, fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{step.step}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: colors.greyDark, marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ color: colors.greyLight, fontSize: '13px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              Why <span style={{ color: colors.red }}>Choose Us</span>
            </h2>
            <p style={{ color: colors.greyMedium }}>What makes Fast Group the preferred choice for businesses worldwide</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className="reveal" style={{
                display: 'flex',
                gap: '16px',
                backgroundColor: colors.white,
                padding: '24px',
                borderRadius: '20px',
                border: `1px solid ${colors.silverDark}`,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.red;
                e.currentTarget.style.boxShadow = `0 10px 25px rgba(220,38,38,0.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.silverDark;
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: colors.redLight,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <item.icon size={28} color={colors.red} />
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.greyDark, marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: colors.greyLight, fontSize: '14px', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{ 
        padding: '60px 0', 
        background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.redDark} 100%)`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '800', color: colors.white, marginBottom: '16px' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.92)', marginBottom: '32px' }}>
              Let's discuss your project and create something amazing together.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <a href="https://wa.me/16042396141" target="_blank" rel="noopener noreferrer">
                <button style={{
                  backgroundColor: '#25D366',
                  color: colors.white,
                  padding: '14px 36px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  📱 Contact Sales
                </button>
              </a>
              <Link to="/contact">
                <button style={{
                  backgroundColor: colors.white,
                  color: colors.red,
                  padding: '14px 36px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  Get Free Quote →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Reveal Styles */}
      <style>{`
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
      `}</style>
    </div>
  );
};

export default Services;