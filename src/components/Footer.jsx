import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer style={{ 
      backgroundColor: colors.greyDark, 
      paddingTop: '60px', 
      paddingBottom: '30px',
      borderTop: `1px solid ${colors.greyMedium}`
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Main Footer Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px', 
          marginBottom: '50px' 
        }}>
          
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`, 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: `0 4px 12px rgba(220,38,38,0.3)`
              }}>
                <Printer size={24} color={colors.white} />
              </div>
              <div>
                <span style={{ fontSize: '20px', fontWeight: '800', color: colors.white }}>
                  Fast <span style={{ color: colors.red }}>Group</span>
                </span>
                <p style={{ fontSize: '10px', color: colors.greyLight, marginTop: '-2px' }}>of International Agencies</p>
              </div>
            </Link>
            <p style={{ color: colors.greyLight, fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              Leading international agency network providing printing, digital marketing, and business solutions worldwide.
            </p>
            
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1877F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E4405F';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A66C2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z"/>
                </svg>
              </a>
              <a 
                href="#" 
                style={{ 
                  width: '36px', 
                  height: '36px', 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1DA1F2';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.913-12.084c0-.213-.004-.426-.015-.637.786-.569 1.467-1.276 2.005-2.082z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.white, marginBottom: '24px', position: 'relative' }}>
              Quick Links
              <span style={{ 
                position: 'absolute', 
                bottom: '-8px', 
                left: 0, 
                width: '40px', 
                height: '3px', 
                background: `linear-gradient(90deg, ${colors.red}, ${colors.redDark})`,
                borderRadius: '2px'
              }}></span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/websites', label: 'Our Websites' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact' }
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={item.path} 
                    style={{ 
                      color: colors.greyLight, 
                      textDecoration: 'none', 
                      transition: 'all 0.3s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.red;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.greyLight;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={12} style={{ opacity: 0, transition: 'opacity 0.3s' }} 
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Websites */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.white, marginBottom: '24px', position: 'relative' }}>
              Our Websites
              <span style={{ 
                position: 'absolute', 
                bottom: '-8px', 
                left: 0, 
                width: '40px', 
                height: '3px', 
                background: `linear-gradient(90deg, ${colors.red}, ${colors.redDark})`,
                borderRadius: '2px'
              }}></span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <a 
                  href="https://fast-group-frontend-clean.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: colors.greyLight, 
                    textDecoration: 'none', 
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}
                >
                  <Globe size={14} color={colors.red} /> Fast Group Main
                </a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a 
                  href="https://fast-printing-frontend.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: colors.greyLight, 
                    textDecoration: 'none', 
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}
                >
                  <Printer size={14} color={colors.red} /> Fast Printing
                </a>
              </li>
              <li>
                <a 
                  href="https://fast-marketing-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: colors.greyLight, 
                    textDecoration: 'none', 
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}
                >
                  <Globe size={14} color={colors.red} /> Fast Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.white, marginBottom: '24px', position: 'relative' }}>
              Get In Touch
              <span style={{ 
                position: 'absolute', 
                bottom: '-8px', 
                left: 0, 
                width: '40px', 
                height: '3px', 
                background: `linear-gradient(90deg, ${colors.red}, ${colors.redDark})`,
                borderRadius: '2px'
              }}></span>
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <MapPin size={18} color={colors.red} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: colors.greyLight, fontSize: '14px', lineHeight: '1.5' }}>
                  101 Queen Street, West Toronto ON M5H 2N1 CANADA
                </span>
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <Phone size={18} color={colors.red} />
                <a 
                  href="tel:16042396141" 
                  style={{ color: colors.greyLight, textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}
                >
                  +1 (604) 239-6141
                </a>
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <Mail size={18} color={colors.red} />
                <a 
                  href="mailto:fastmediaagencyofficial@gmail.com" 
                  style={{ color: colors.greyLight, textDecoration: 'none', transition: 'color 0.3s', fontSize: '14px' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}
                >
                  fastmediaagencyofficial@gmail.com
                </a>
              </li>
            </ul>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/16042396141" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: colors.white,
                padding: '10px 20px',
                borderRadius: '40px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.588 2.014.9 3.069.9h.002c3.18 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.766-5.767-5.766zm0 9.554c-.949 0-1.852-.261-2.645-.717l-.19-.113-1.401.368.376-1.366-.123-.198c-.504-.804-.771-1.735-.771-2.689.001-2.335 1.9-4.234 4.235-4.234 1.133 0 2.197.442 2.996 1.244.8.802 1.241 1.866 1.24 3-.001 2.335-1.9 4.235-4.236 4.235z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: `1px solid ${colors.greyMedium}`, 
          paddingTop: '30px', 
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          <p style={{ color: colors.greyLight, fontSize: '13px' }}>
            © {currentYear} Fast Group of International Agencies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: colors.greyLight, fontSize: '12px', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: colors.greyLight, fontSize: '12px', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}>
              Terms of Service
            </a>
            <a href="#" style={{ color: colors.greyLight, fontSize: '12px', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = colors.red}
              onMouseLeave={(e) => e.currentTarget.style.color = colors.greyLight}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;