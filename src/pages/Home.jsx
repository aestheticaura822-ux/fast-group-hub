import React, { useState } from 'react';

const FastGroupPanel = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const websites = [
    {
      name: "Fast Group Main",
      url: "https://fast-group-frontend-clean.vercel.app/",
      description: "Complete business solutions and corporate services for modern enterprises.",
      features: ["Business Consulting", "Project Management", "Strategic Planning"],
      icon: "🏢",
      bgColor: "#DC2626"
    },
    {
      name: "Fast Printing",
      url: "https://fast-printing-frontend.vercel.app/",
      description: "Premium printing and packaging solutions for businesses of all sizes.",
      features: ["Free Design", "Fast Delivery", "Premium Quality"],
      icon: "🖨️",
      bgColor: "#DC2626"
    },
    {
      name: "Fast Marketing",
      url: "https://fast-marketing-app.vercel.app/",
      description: "Digital marketing agency that drives real results for your business.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns"],
      icon: "📈",
      bgColor: "#DC2626"
    }
  ];

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
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      {/* White/Silver Overlay - Light Theme */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(243, 244, 246, 0.34) 100%)'
      }}></div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px'
      }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          {/* Logo Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: colors.redLight,
            padding: '8px 24px',
            borderRadius: '100px',
            marginBottom: '24px',
            border: `1px solid ${colors.silverDark}`
          }}>
            <span style={{ fontSize: '20px' }}>⚡</span>
            <span style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: colors.red,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>Fast Group Enterprise</span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: '800',
            color: colors.greyDark,
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Fast Group of <span style={{ color: colors.red }}>International</span> Agencies
          </h1>
          
          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <div style={{ width: '60px', height: '2px', background: colors.red, borderRadius: '2px' }}></div>
            <span style={{ color: colors.greyMedium, fontSize: '13px', fontWeight: '500', letterSpacing: '1px' }}>CORPORATE ACCESS PANEL</span>
            <div style={{ width: '60px', height: '2px', background: colors.red, borderRadius: '2px' }}></div>
          </div>

          {/* Subtitle */}
          <p style={{
            fontSize: '16px',
            color: colors.greyMedium,
            maxWidth: '550px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            One unified platform delivering excellence across printing, marketing, and corporate solutions
          </p>
        </div>

        {/* 3 Professional Cards - New Design */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '35px',
          maxWidth: '1280px',
          margin: '0 auto'
        }}>
          {websites.map((site, index) => (
            <div
              key={index}
              onClick={() => window.open(site.url, '_blank')}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                width: '340px',
                backgroundColor: colors.white,
                borderRadius: '24px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: hoveredCard === index 
                  ? `2px solid ${colors.red}`
                  : `1px solid ${colors.silverDark}`,
                transform: hoveredCard === index ? 'translateY(-12px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? `0 25px 40px rgba(220,38,38,0.15)`
                  : '0 5px 20px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Top Red Strip */}
              <div style={{
                height: '6px',
                background: `linear-gradient(90deg, ${colors.red}, ${colors.redLight}, ${colors.red})`,
                width: '100%'
              }}></div>

              {/* Card Content */}
              <div style={{ padding: '32px 28px 38px' }}>
                {/* Icon with Circle Background */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: hoveredCard === index ? colors.red : colors.redLight,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'all 0.3s',
                  transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                }}>
                  <span style={{ fontSize: '42px' }}>{site.icon}</span>
                </div>

                {/* Card Number */}
                <div style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: '600',
                  color: colors.red,
                  background: colors.redLight,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  marginBottom: '16px',
                  letterSpacing: '1px'
                }}>
                  PLATFORM 0{index + 1}
                </div>

                {/* Title */}
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: colors.greyDark,
                  marginBottom: '12px'
                }}>
                  {site.name}
                </h2>

                {/* Description */}
                <p style={{
                  fontSize: '13px',
                  color: colors.greyLight,
                  marginBottom: '20px',
                  lineHeight: '1.5'
                }}>
                  {site.description}
                </p>

                {/* Features with Check Icons */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '28px'
                }}>
                  {site.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '18px',
                        height: '18px',
                        background: colors.redLight,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ fontSize: '10px', color: colors.red }}>✓</span>
                      </div>
                      <span style={{ fontSize: '13px', color: colors.greyMedium }}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Launch Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 20px',
                  background: hoveredCard === index ? colors.red : colors.silver,
                  borderRadius: '16px',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: hoveredCard === index ? colors.white : colors.greyDark
                  }}>
                    Launch Website
                  </span>
                  <span style={{
                    fontSize: '18px',
                    color: hoveredCard === index ? colors.white : colors.red,
                    transition: 'transform 0.3s',
                    transform: hoveredCard === index ? 'translateX(5px)' : 'translateX(0)'
                  }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Clean Design */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '50px',
          marginTop: '70px',
          padding: '30px 50px',
          background: colors.white,
          borderRadius: '30px',
          boxShadow: '0 5px 25px rgba(0,0,0,0.05)',
          border: `1px solid ${colors.silverDark}`,
          maxWidth: '1000px',
          width: '100%'
        }}>
          {[
            { value: "15+", label: "Years Experience", icon: "⭐" },
            { value: "10,000+", label: "Happy Clients", icon: "👥" },
            { value: "25,000+", label: "Projects Done", icon: "📊" },
            { value: "24/7", label: "Support Available", icon: "🕒" }
          ].map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ 
                fontSize: '28px', 
                fontWeight: '800', 
                color: colors.red
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: colors.greyLight, fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '50px',
          textAlign: 'center',
          color: colors.greyLight,
          fontSize: '12px'
        }}>
          <span>© 2024 Fast Group of International Agencies</span>
          <span style={{ margin: '0 12px' }}>•</span>
          <span>Global Headquarters: Toronto, Canada</span>
          <span style={{ margin: '0 12px' }}>•</span>
          <span>info@fastgroup.com</span>
        </div>
      </div>
    </div>
  );
};

export default FastGroupPanel;