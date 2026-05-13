import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Printer, TrendingUp, Search, 
  ExternalLink, ArrowRight, CheckCircle, 
  Award, Users, Clock, Phone, Play, Pause
} from 'lucide-react';

const Websites = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = () => {
    if (heroVideoRef.current) {
      if (isVideoPlaying) heroVideoRef.current.pause();
      else heroVideoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

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

  const websites = [
    {
      id: 1,
      name: "Fast Group Main",
      domain: "fast-group-frontend-clean.vercel.app",
      url: "https://fast-group-frontend-clean.vercel.app/",
      description: "Complete business solutions and corporate services for modern enterprises.",
      fullDescription: "Fast Group Main is your premier destination for comprehensive business solutions. We offer a wide range of corporate services including business consulting, project management, and strategic planning. Our team of experts helps businesses grow and succeed in competitive markets.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      category: "corporate",
      features: [
        "Business Consulting & Strategy",
        "Project Management Services",
        "Strategic Planning & Execution",
        "Corporate Training Programs",
        "Market Research & Analysis",
        "Risk Management Solutions"
      ],
      stats: { clients: "1000+", success: "98%", team: "50+", years: "10+" },
      icon: Globe
    },
    {
      id: 2,
      name: "Fast Printing",
      domain: "fast-printing-frontend.vercel.app",
      url: "https://fast-printing-frontend.vercel.app/",
      description: "Premium printing and packaging solutions for businesses of all sizes.",
      fullDescription: "Fast Printing is Pakistan's leading printing and packaging company. We specialize in business cards, brochures, banners, custom packaging, and large format printing. With state-of-the-art machinery and expert team, we deliver quality that exceeds expectations.",
      image: "https://pixabay.com/get/g5ded3a9645be0d978cad6e80dd7d9bfe072c0e1d842df2b4bbebf2fb1e129fb83f9a3f6117507b1c449c886bfffde5b6_1920.jpg",
      category: "printing",
      features: [
        "Business Cards & Stationery",
        "Brochures & Flyers",
        "Banners & Large Format",
        "Custom Packaging Boxes",
        "Labels & Stickers",
        "Wedding Cards & Invitations"
      ],
      stats: { clients: "5000+", products: "100+", years: "15+", satisfaction: "99%" },
      icon: Printer
    },
    {
      id: 3,
      name: "Fast Marketing",
      domain: "fast-marketing-app.vercel.app",
      url: "https://fast-marketing-app.vercel.app/",
      description: "Digital marketing agency that drives real results for your business.",
      fullDescription: "Fast Marketing is a results-driven digital marketing agency. We provide SEO, social media marketing, PPC campaigns, content marketing, and web development services. Our data-driven approach ensures maximum ROI for our clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "marketing",
      features: [
        "SEO & Search Engine Optimization",
        "Social Media Marketing",
        "PPC & Google Ads Campaigns",
        "Content Marketing Strategy",
        "Web Design & Development",
        "Email Marketing Automation"
      ],
      stats: { clients: "2000+", campaigns: "5000+", growth: "200%", roi: "300%" },
      icon: TrendingUp
    }
  ];

  const categories = [
    { value: 'all', label: 'All Websites', icon: Globe, count: 3 },
    { value: 'corporate', label: 'Corporate Solutions', icon: Users, count: 1 },
    { value: 'printing', label: 'Printing Services', icon: Printer, count: 1 },
    { value: 'marketing', label: 'Digital Marketing', icon: TrendingUp, count: 1 }
  ];

  const filteredWebsites = websites.filter(website => {
    const matchesSearch = website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          website.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || website.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Scroll reveal effect
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
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
    <div style={{ backgroundColor: colors.white }}>
      
      {/* ========== HERO SECTION WITH VIDEO ========== */}
      <section style={{ 
        position: 'relative', 
        minHeight: '70vh', 
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden',
        paddingTop: '80px'
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
            <source src="https://cdn.pixabay.com/video/2019/12/06/29879-377759955_medium.mp4" type="video/mp4" />
          </video>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.46) 0%, rgba(243, 244, 246, 0.51) 100%)`
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
              marginBottom: '24px',
              border: `1px solid ${colors.silverDark}`
            }}>
              <Globe size={18} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '13px', fontWeight: '600', letterSpacing: '1px' }}>OUR DIGITAL ECOSYSTEM</span>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)', 
              fontWeight: '800', 
              color: colors.greyDark, 
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
              Explore Our <span style={{ color: colors.red }}>Websites</span>
            </h1>
            <p style={{ fontSize: '18px', color: colors.greyMedium, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Three powerful platforms, one unified mission - delivering excellence across all services
            </p>
            
            {/* Stats Row */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '40px', 
              marginTop: '40px',
              flexWrap: 'wrap'
            }}>
              {[
                { value: "3", label: "Platforms", icon: Globe },
                { value: "15+", label: "Years Experience", icon: Award },
                { value: "10000+", label: "Happy Clients", icon: Users }
              ].map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <stat.icon size={28} color={colors.red} style={{ marginBottom: '8px' }} />
                  <div style={{ fontSize: '28px', fontWeight: '700', color: colors.greyDark }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: colors.greyLight }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SEARCH AND FILTER SECTION ========== */}
      <section style={{ 
        padding: '20px 0', 
        position: 'sticky', 
        top: '0', 
        zIndex: 100,
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.silverDark}`,
        boxShadow: scrolled ? `0 4px 20px rgba(0,0,0,0.05)` : 'none'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '20px',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
              <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: colors.greyLight }} />
              <input
                type="text"
                placeholder="Search websites..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 20px 14px 48px',
                  backgroundColor: colors.silver,
                  border: `1px solid ${colors.silverDark}`,
                  borderRadius: '14px',
                  color: colors.greyDark,
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = colors.red;
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.redLight}`;
                  e.currentTarget.style.backgroundColor = colors.white;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = colors.silverDark;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = colors.silver;
                }}
              />
            </div>

            {/* Category Filters */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 24px',
                    borderRadius: '40px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    backgroundColor: selectedCategory === category.value ? colors.red : colors.silver,
                    color: selectedCategory === category.value ? colors.white : colors.greyMedium,
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category.value) {
                      e.currentTarget.style.backgroundColor = colors.silverDark;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category.value) {
                      e.currentTarget.style.backgroundColor = colors.silver;
                    }
                  }}
                >
                  <category.icon size={16} />
                  {category.label}
                  <span style={{
                    marginLeft: '4px',
                    fontSize: '12px',
                    opacity: 0.7
                  }}>({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== WEBSITES GRID ========== */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          {filteredWebsites.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <Globe size={80} color={colors.greyLight} style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '20px', color: colors.greyDark, marginBottom: '8px' }}>No websites found</h3>
              <p style={{ color: colors.greyMedium }}>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
              {filteredWebsites.map((website, index) => (
                <div
                  key={website.id}
                  className="reveal"
                  style={{
                    backgroundColor: colors.white,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s',
                    border: `1px solid ${colors.silverDark}`,
                    animationDelay: `${index * 150}ms`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 25px 40px rgba(220,38,38,0.12)`;
                    e.currentTarget.style.borderColor = colors.red;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = colors.silverDark;
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img
                      src={website.image}
                      alt={website.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: `linear-gradient(to top, ${colors.greyDark} 0%, transparent 100%)`,
                      opacity: 0.6
                    }}></div>
                    
                    {/* Category Badge */}
                    <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                      <span style={{
                        backgroundColor: colors.red,
                        color: colors.white,
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                      }}>
                        {categories.find(c => c.value === website.category)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <website.icon size={24} color={colors.white} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark }}>{website.name}</h3>
                        <p style={{ color: colors.greyLight, fontSize: '12px' }}>{website.domain}</p>
                      </div>
                    </div>

                    <p style={{ color: colors.greyMedium, fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                      {website.description}
                    </p>

                    {/* Features Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {website.features.slice(0, 3).map((feature, i) => (
                        <span key={i} style={{
                          fontSize: '11px',
                          backgroundColor: colors.silver,
                          color: colors.greyMedium,
                          padding: '4px 12px',
                          borderRadius: '20px'
                        }}>
                          {feature}
                        </span>
                      ))}
                      {website.features.length > 3 && (
                        <span style={{
                          fontSize: '11px',
                          backgroundColor: colors.silver,
                          color: colors.greyMedium,
                          padding: '4px 12px',
                          borderRadius: '20px'
                        }}>
                          +{website.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Stats Mini */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '24px',
                      padding: '12px 0',
                      borderTop: `1px solid ${colors.silverDark}`,
                      borderBottom: `1px solid ${colors.silverDark}`
                    }}>
                      {Object.entries(website.stats).slice(0, 3).map(([key, value]) => (
                        <div key={key} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '16px', fontWeight: '700', color: colors.red }}>{value}</div>
                          <div style={{ fontSize: '10px', color: colors.greyLight, textTransform: 'capitalize' }}>{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <a
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                          color: colors.white,
                          padding: '10px 16px',
                          borderRadius: '12px',
                          fontWeight: '600',
                          fontSize: '13px',
                          textDecoration: 'none',
                          textAlign: 'center',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = `0 4px 12px rgba(220,38,38,0.3)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        Visit Website <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                      </a>
                      <Link
                        to={`/website/${website.id}`}
                        style={{
                          flex: 1,
                          backgroundColor: colors.silver,
                          color: colors.greyDark,
                          padding: '10px 16px',
                          borderRadius: '12px',
                          fontWeight: '600',
                          fontSize: '13px',
                          textDecoration: 'none',
                          textAlign: 'center',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.red;
                          e.currentTarget.style.color = colors.white;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = colors.silver;
                          e.currentTarget.style.color = colors.greyDark;
                        }}
                      >
                        Learn More <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                      </Link>  
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========== FEATURES BANNER ========== */}
      <section style={{ padding: '50px 0', backgroundColor: colors.redLight }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            gap: '20px'
          }}>
            {[
              { icon: Clock, text: "24/7 Customer Support" },
              { icon: Award, text: "15+ Years Experience" },
              { icon: Users, text: "10000+ Happy Clients" },
              { icon: Phone, text: "Free Consultation" }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: colors.red,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon size={22} color={colors.white} />
                </div>
                <span style={{ fontWeight: '500', color: colors.greyDark }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{ 
        padding: '70px 0', 
        background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.redDark} 100%)`,
        textAlign: 'center',
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
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
          <div className="reveal">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: colors.white, marginBottom: '16px' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.92)', marginBottom: '32px' }}>
              Choose the platform that fits your needs and start your journey with us today.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
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
                  📱 Start Free Consultation
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
                  Contact Sales →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Reveal Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
      `}</style>
    </div>
  );
};

export default Websites;