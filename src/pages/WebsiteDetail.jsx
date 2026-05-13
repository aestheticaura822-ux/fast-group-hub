import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Globe, Printer, TrendingUp, ExternalLink, ArrowRight,
  CheckCircle, Star, Users, Clock, Zap, Shield,
  Phone, Mail, MapPin, Award, Heart, Leaf,
  Play, Pause, Calendar, Truck, DollarSign
} from 'lucide-react';

const WebsiteDetail = () => {
  const { id } = useParams();
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  const websites = {
    1: {
      name: "Fast Group Main",
      domain: "fast-group-frontend-clean.vercel.app",
      url: "https://fast-group-frontend-clean.vercel.app/",
      description: "Complete business solutions and corporate services for modern enterprises.",
      fullDescription: "Fast Group Main is your premier destination for comprehensive business solutions. We offer a wide range of corporate services including business consulting, project management, and strategic planning. Our team of experts helps businesses grow and succeed in competitive markets. With years of experience across multiple industries, we provide tailored solutions that drive real results.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      video: "https://cdn.pixabay.com/video/2024/01/09/197493-900040304_tiny.mp4",
      features: [
        "Business Consulting & Strategy",
        "Project Management Services",
        "Strategic Planning & Execution",
        "Corporate Training Programs",
        "Market Research & Analysis",
        "Risk Management Solutions"
      ],
      benefits: [
        "Increase operational efficiency by 40%",
        "Reduce costs with smart strategies",
        "Expert guidance from industry veterans",
        "Data-driven decision making"
      ],
      stats: { clients: "1000+", success: "98%", team: "50+", years: "10+" },
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      testimonials: [
        { name: "Ahmed Raza", role: "CEO, Tech Solutions", text: "Fast Group transformed our business operations completely. Their strategic insights helped us grow 200% in just one year.", rating: 5 },
        { name: "Sarah Khan", role: "Director, Future Corp", text: "Professional, efficient, and results-driven team. Highly recommended for any business looking to scale.", rating: 5 },
        { name: "Michael Chen", role: "Operations Manager", text: "The consulting services provided were top-notch. They understood our needs perfectly.", rating: 5 }
      ],
      icon: Globe
    },
    2: {
      name: "Fast Printing",
      domain: "fast-printing-frontend.vercel.app",
      url: "https://fast-printing-frontend.vercel.app/",
      description: "Premium printing and packaging solutions for businesses of all sizes.",
      fullDescription: "Fast Printing is Pakistan's leading printing and packaging company. We specialize in business cards, brochures, banners, custom packaging, and large format printing. With state-of-the-art machinery and expert team, we deliver quality that exceeds expectations.",
      image: "https://images.unsplash.com/photo-1562329261-7c6b5b3f6d1c?w=800",
      video: "https://cdn.pixabay.com/video/2023/07/12/173289-843297948_tiny.mp4",
      features: [
        "Business Cards & Stationery",
        "Brochures & Flyers",
        "Banners & Large Format",
        "Custom Packaging Boxes",
        "Labels & Stickers",
        "Wedding Cards & Invitations"
      ],
      benefits: [
        "Free design assistance",
        "Fast 24-48 hour turnaround",
        "Premium quality materials",
        "Eco-friendly options available"
      ],
      stats: { clients: "5000+", products: "100+", years: "15+", satisfaction: "99%" },
      technologies: ["Offset Printing", "Digital Printing", "UV Printing", "Eco Solvent"],
      testimonials: [
        { name: "Imran Ali", role: "Marketing Manager", text: "Best printing quality in town! The colors are vibrant and delivery was super fast.", rating: 5 },
        { name: "Fatima Zafar", role: "Business Owner", text: "Fast delivery and excellent customer service. My packaging boxes look amazing!", rating: 5 },
        { name: "Omar Farooq", role: "Event Planner", text: "They printed our wedding cards and they turned out perfect.", rating: 5 }
      ],
      icon: Printer
    },
    3: {
      name: "Fast Marketing",
      domain: "fast-marketing-app.vercel.app",
      url: "https://fast-marketing-app.vercel.app/",
      description: "Digital marketing agency that drives real results for your business.",
      fullDescription: "Fast Marketing is a results-driven digital marketing agency. We provide SEO, social media marketing, PPC campaigns, content marketing, and web development services. Our data-driven approach ensures maximum ROI for our clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      video: "https://cdn.pixabay.com/video/2023/06/21/168927-836174401_tiny.mp4",
      features: [
        "SEO & Search Engine Optimization",
        "Social Media Marketing",
        "PPC & Google Ads Campaigns",
        "Content Marketing Strategy",
        "Web Design & Development",
        "Email Marketing Automation"
      ],
      benefits: [
        "Increase website traffic by 200%",
        "Higher conversion rates",
        "Better ROI on ad spend",
        "Data-driven insights"
      ],
      stats: { clients: "2000+", campaigns: "5000+", growth: "200%", roi: "300%" },
      technologies: ["Google Analytics", "Meta Ads", "SEO Tools", "CRM Systems"],
      testimonials: [
        { name: "Omar Farooq", role: "E-commerce Owner", text: "Our sales doubled within 3 months of working with them. Their SEO strategy is outstanding!", rating: 5 },
        { name: "Zainab Malik", role: "Brand Manager", text: "Professional team with exceptional results. Our social media engagement increased by 300%.", rating: 5 },
        { name: "David Wilson", role: "Startup Founder", text: "Best digital marketing agency we've worked with.", rating: 5 }
      ],
      icon: TrendingUp
    }
  };

  const website = websites[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  if (!website) {
    return (
      <div style={{ 
        backgroundColor: colors.white, 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <Globe size={80} color={colors.greyLight} style={{ margin: '0 auto 20px' }} />
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: colors.greyDark, marginBottom: '8px' }}>Website Not Found</h1>
          <p style={{ color: colors.greyMedium, marginBottom: '24px' }}>The website you're looking for doesn't exist.</p>
          <Link to="/websites">
            <button style={{
              background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
              color: colors.white,
              padding: '12px 28px',
              borderRadius: '12px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer'
            }}>
              Back to Websites
            </button>
          </Link>
        </div>
      </div>
    );
  }

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
            <source src={website.video} type="video/mp4" />
          </video>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: `linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(243,244,246,0.88) 100%)`
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
          <div style={{ maxWidth: '700px' }}>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 8px 20px rgba(220,38,38,0.2)`
              }}>
                <website.icon size={36} color={colors.white} />
              </div>
              <div>
                <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: colors.greyDark }}>{website.name}</h1>
                <p style={{ color: colors.greyLight, fontSize: '14px' }}>{website.domain}</p>
              </div>
            </div>
            <p className="reveal" style={{ fontSize: '18px', color: colors.greyMedium, marginBottom: '32px', lineHeight: '1.6' }}>
              {website.fullDescription}
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={website.url} target="_blank" rel="noopener noreferrer">
                <button style={{
                  background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                  color: colors.white,
                  padding: '14px 32px',
                  borderRadius: '14px',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: `0 4px 15px rgba(220,38,38,0.3)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 20px rgba(220,38,38,0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 15px rgba(220,38,38,0.3)`;
                }}>
                  Visit Website <ExternalLink size={16} />
                </button>
              </a>
              <a href="https://wa.me/16042396141" target="_blank" rel="noopener noreferrer">
                <button style={{
                  backgroundColor: colors.silver,
                  color: colors.greyDark,
                  padding: '14px 32px',
                  borderRadius: '14px',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: `1px solid ${colors.silverDark}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.red;
                  e.currentTarget.style.color = colors.white;
                  e.currentTarget.style.borderColor = colors.red;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.silver;
                  e.currentTarget.style.color = colors.greyDark;
                  e.currentTarget.style.borderColor = colors.silverDark;
                }}>
                  <Phone size={16} /> Contact Sales
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section style={{ padding: '50px 0', backgroundColor: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {Object.entries(website.stats).map(([key, value]) => (
              <div key={key} className="reveal" style={{ textAlign: 'center', padding: '20px', backgroundColor: colors.white, borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '32px', fontWeight: '800', color: colors.red, marginBottom: '8px' }}>{value}</div>
                <div style={{ fontSize: '13px', color: colors.greyLight, textTransform: 'capitalize', fontWeight: '500' }}>{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES & BENEFITS SECTION ========== */}
      <section style={{ padding: '70px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '50px' }}>
            
            {/* Features Column */}
            <div className="reveal-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '48px', height: '48px', background: colors.redLight, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={24} color={colors.red} />
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.greyDark }}>Key Features</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                {website.features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: colors.silver,
                    padding: '14px 18px',
                    borderRadius: '14px',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.redLight;
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.silver;
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    <CheckCircle size={18} color={colors.red} />
                    <span style={{ color: colors.greyMedium, fontSize: '14px', fontWeight: '500' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Column */}
            <div className="reveal-right">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div style={{ width: '48px', height: '48px', background: colors.redLight, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Star size={24} color={colors.red} />
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.greyDark }}>Benefits</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {website.benefits.map((benefit, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    backgroundColor: colors.white,
                    padding: '16px 20px',
                    borderRadius: '14px',
                    border: `1px solid ${colors.silverDark}`,
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.red;
                    e.currentTarget.style.boxShadow = `0 4px 15px rgba(220,38,38,0.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.silverDark;
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <Zap size={20} color={colors.red} />
                    <span style={{ color: colors.greyMedium, fontSize: '15px' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TECHNOLOGIES SECTION ========== */}
      <section style={{ padding: '60px 0', backgroundColor: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              Technologies We Use
            </h2>
            <p style={{ color: colors.greyMedium }}>Cutting-edge tools and platforms for best results</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            {website.technologies.map((tech, index) => (
              <span key={index} className="reveal" style={{
                background: colors.white,
                color: colors.greyDark,
                padding: '10px 24px',
                borderRadius: '40px',
                fontWeight: '500',
                fontSize: '14px',
                border: `1px solid ${colors.silverDark}`,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.red;
                e.currentTarget.style.color = colors.white;
                e.currentTarget.style.borderColor = colors.red;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.white;
                e.currentTarget.style.color = colors.greyDark;
                e.currentTarget.style.borderColor = colors.silverDark;
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section style={{ padding: '70px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              What Our <span style={{ color: colors.red }}>Clients Say</span>
            </h2>
            <p style={{ color: colors.greyMedium }}>Real stories from real clients</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="reveal" style={{
              backgroundColor: colors.white,
              borderRadius: '24px',
              padding: '40px',
              border: `1px solid ${colors.silverDark}`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '24px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill={colors.red} color={colors.red} />
                ))}
              </div>
              <p style={{ fontSize: '18px', color: colors.greyDark, lineHeight: '1.7', marginBottom: '28px', fontStyle: 'italic' }}>
                "{website.testimonials[activeTestimonial].text}"
              </p>
              <div style={{
                width: '56px',
                height: '56px',
                background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px'
              }}>
                <span style={{ fontSize: '22px', fontWeight: '700', color: colors.white }}>
                  {website.testimonials[activeTestimonial].name.charAt(0)}
                </span>
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', color: colors.greyDark }}>{website.testimonials[activeTestimonial].name}</h4>
              <p style={{ fontSize: '13px', color: colors.greyLight }}>{website.testimonials[activeTestimonial].role}</p>
            </div>

            {/* Dots Navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
              {website.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  style={{
                    width: activeTestimonial === index ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: activeTestimonial === index ? colors.red : colors.silverDark,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section style={{ 
        padding: '70px 0', 
        background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.redDark} 100%)`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '800', color: colors.white, marginBottom: '16px' }}>
              Ready to Get Started with {website.name}?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.92)', marginBottom: '32px' }}>
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <a href={website.url} target="_blank" rel="noopener noreferrer">
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
                  Visit Website Now →
                </button>
              </a>
              <Link to="/contact">
                <button style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: colors.white,
                  padding: '14px 36px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '16px',
                  border: `1px solid rgba(255,255,255,0.3)`,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.white;
                  e.currentTarget.style.color = colors.red;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = colors.white;
                }}>
                  Contact Us
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

export default WebsiteDetail;