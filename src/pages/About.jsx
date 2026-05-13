import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Award, Globe, Target, Heart, Leaf, 
  Zap, Shield, Star, TrendingUp, Calendar, Printer, Eye,
  CheckCircle, ArrowRight, Play, Pause,
  Phone, Mail, MapPin, Clock, Briefcase
} from 'lucide-react';

const About = () => {
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

  const milestones = [
    { year: "2010", title: "Company Founded", desc: "Fast Group started with a vision to revolutionize business services", icon: Calendar },
    { year: "2015", title: "Fast Printing Launched", desc: "Expanded into printing and packaging solutions", icon: Printer },
    { year: "2018", title: "International Expansion", desc: "Opened office in Canada for North American operations", icon: Globe },
    { year: "2020", title: "Fast Marketing Founded", desc: "Launched digital marketing agency division", icon: TrendingUp },
    { year: "2023", title: "10000+ Clients", desc: "Reached milestone of serving over 10,000 satisfied clients", icon: Users },
    { year: "2024", title: "Global Recognition", desc: "Received multiple industry awards for excellence", icon: Award }
  ];

  const teamMembers = [
    { name: "Ahmed Raza", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", bio: "15+ years of experience in business leadership" },
    { name: "Sarah Khan", role: "COO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", bio: "Operations expert with global experience" },
    { name: "Imran Ali", role: "Head of Printing", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", bio: "Printing industry veteran for 12 years" },
    { name: "Fatima Zafar", role: "Marketing Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", bio: "Digital marketing specialist" }
  ];

  const values = [
    { icon: Heart, title: "Customer First", desc: "Our clients' success is our success. We prioritize your needs above everything." },
    { icon: Zap, title: "Innovation", desc: "Constantly evolving with latest technologies and trends." },
    { icon: Shield, title: "Integrity", desc: "Honest, transparent, and ethical business practices." },
    { icon: Leaf, title: "Sustainability", desc: "Committed to eco-friendly practices and materials." },
    { icon: Users, title: "Teamwork", desc: "Collaborative approach delivering the best results." },
    { icon: Star, title: "Excellence", desc: "Never settling for anything less than the best." }
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
            <source src="https://cdn.pixabay.com/video/2016/12/15/6785-195986684_medium.mp4" type="video/mp4" />
          </video>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: `linear-gradient(135deg, rgba(255, 255, 255, 0.42) 0%, rgba(243, 244, 246, 0.37) 100%)`
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
              <Globe size={16} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '13px', fontWeight: '600' }}>OUR STORY</span>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)', 
              fontWeight: '800', 
              color: colors.greyDark, 
              marginBottom: '20px' 
            }}>
              About <span style={{ color: colors.red }}>Fast Group</span>
            </h1>
            <p style={{ fontSize: '18px', color: colors.greyMedium, lineHeight: '1.6' }}>
              We are a global network of specialized agencies committed to delivering excellence 
              in printing, marketing, and business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ========== MISSION & VISION ========== */}
      <section style={{ padding: '70px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            
            {/* Mission Card */}
            <div className="reveal-left" style={{
              backgroundColor: colors.white,
              borderRadius: '24px',
              padding: '36px',
              border: `1px solid ${colors.silverDark}`,
              transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.red;
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(220,38,38,0.08)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.silverDark;
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: colors.redLight,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Target size={32} color={colors.red} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.greyDark, marginBottom: '16px' }}>Our Mission</h2>
              <p style={{ color: colors.greyMedium, lineHeight: '1.7' }}>
                To empower businesses of all sizes with premium quality printing, innovative marketing 
                solutions, and comprehensive business services that drive growth and success. We strive 
                to be the most trusted partner for businesses worldwide.
              </p>
            </div>

            {/* Vision Card */}
            <div className="reveal-right" style={{
              backgroundColor: colors.white,
              borderRadius: '24px',
              padding: '36px',
              border: `1px solid ${colors.silverDark}`,
              transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.red;
              e.currentTarget.style.boxShadow = `0 20px 40px rgba(220,38,38,0.08)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.silverDark;
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: colors.redLight,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Eye size={32} color={colors.red} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.greyDark, marginBottom: '16px' }}>Our Vision</h2>
              <p style={{ color: colors.greyMedium, lineHeight: '1.7' }}>
                To become the world's leading network of integrated business agencies, known for 
                innovation, quality, and customer-centric approach. We envision a future where every 
                business has access to world-class services at competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section style={{ padding: '60px 0', backgroundColor: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            {[
              { value: "15+", label: "Years Experience", icon: Calendar },
              { value: "10000+", label: "Happy Clients", icon: Users },
              { value: "25000+", label: "Projects Done", icon: Award },
              { value: "3", label: "Global Agencies", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="reveal" style={{ textAlign: 'center', padding: '30px 20px', backgroundColor: colors.white, borderRadius: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: colors.redLight,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <stat.icon size={28} color={colors.red} />
                </div>
                <div style={{ fontSize: '36px', fontWeight: '800', color: colors.greyDark, marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ color: colors.greyLight, fontSize: '14px', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section style={{ padding: '70px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              Our Core <span style={{ color: colors.red }}>Values</span>
            </h2>
            <p style={{ color: colors.greyMedium }}>The principles that guide everything we do</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {values.map((value, index) => (
              <div key={index} className="reveal" style={{
                backgroundColor: colors.white,
                padding: '28px',
                borderRadius: '20px',
                border: `1px solid ${colors.silverDark}`,
                transition: 'all 0.3s',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = colors.red;
                e.currentTarget.style.boxShadow = `0 15px 30px rgba(220,38,38,0.08)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.silverDark;
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: colors.redLight,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <value.icon size={32} color={colors.red} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>{value.title}</h3>
                <p style={{ color: colors.greyMedium, lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MILESTONES TIMELINE ========== */}
      <section style={{ padding: '70px 0', backgroundColor: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              Our <span style={{ color: colors.red }}>Journey</span>
            </h2>
            <p style={{ color: colors.greyMedium }}>Key milestones that shaped our success story</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: `linear-gradient(to bottom, ${colors.red}, ${colors.redLight})`,
              display: 'none'
            }}
            className="timeline-line"></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {milestones.map((milestone, index) => (
                <div key={index} className={`reveal-${index % 2 === 0 ? 'left' : 'right'}`} style={{
                  display: 'flex',
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                }}>
                  <div style={{
                    width: 'calc(50% - 30px)',
                    backgroundColor: colors.white,
                    borderRadius: '20px',
                    padding: '24px',
                    border: `1px solid ${colors.silverDark}`,
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.red;
                    e.currentTarget.style.boxShadow = `0 10px 25px rgba(220,38,38,0.1)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = colors.silverDark;
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <milestone.icon size={24} color={colors.white} />
                      </div>
                      <div>
                        <span style={{ color: colors.red, fontWeight: '700', fontSize: '20px' }}>{milestone.year}</span>
                        <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.greyDark }}>{milestone.title}</h3>
                      </div>
                    </div>
                    <p style={{ color: colors.greyMedium, lineHeight: '1.6' }}>{milestone.desc}</p>
                  </div>
                </div>
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
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: colors.white, marginBottom: '16px' }}>
              Join the <span style={{ color: colors.white }}>Fast Group</span> Family
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.92)', marginBottom: '32px' }}>
              Be part of our growing community of successful businesses
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }}>
                  Get Started <ArrowRight size={16} />
                </button>
              </Link>
              <a href="https://wa.me/16042396141" target="_blank" rel="noopener noreferrer">
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
                  Talk to Our Team
                </button>
              </a>
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
        
        @media (max-width: 768px) {
          .timeline-line {
            display: none !important;
          }
          .reveal-left > div, .reveal-right > div {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;