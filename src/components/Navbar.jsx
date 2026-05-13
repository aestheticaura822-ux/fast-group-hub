import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Printer, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/websites', label: 'Websites' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Theme Colors
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
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }
        
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>

      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: scrolled ? colors.white : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: scrolled ? 'none' : 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.06)' : 'none',
        borderBottom: scrolled ? `1px solid ${colors.silverDark}` : 'none',
        padding: scrolled ? '10px 0' : '18px 0'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            
            {/* Logo */}
            <Link to="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 12px rgba(220, 38, 38, 0.25)`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = `0 6px 16px rgba(220, 38, 38, 0.35)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = `0 4px 12px rgba(220, 38, 38, 0.25)`;
              }}>
                <Printer size={22} color={colors.white} />
              </div>
              <div>
                <span style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: colors.greyDark,
                  letterSpacing: '-0.02em'
                }}>
                  Fast <span style={{ color: colors.red }}>Group</span>
                </span>
                <p style={{
                  fontSize: '10px',
                  color: colors.greyLight,
                  marginTop: '-2px',
                  fontWeight: '500'
                }}>of International Agencies</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px'
            }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: isActive(link.path) ? colors.red : colors.greyMedium,
                    fontWeight: isActive(link.path) ? '600' : '500',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    paddingBottom: '4px'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.color = colors.red;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.color = colors.greyMedium;
                    }
                  }}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      background: `linear-gradient(90deg, ${colors.red}, ${colors.redDark})`,
                      borderRadius: '2px'
                    }} />
                  )}
                </Link>
              ))}
              
              {/* Get Quote Button */}
              <a
                href="https://wa.me/16042396141"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                  color: colors.white,
                  padding: '10px 28px',
                  borderRadius: '40px',
                  fontWeight: '600',
                  fontSize: '14px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  boxShadow: `0 4px 12px rgba(220, 38, 38, 0.25)`,
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 6px 16px rgba(220, 38, 38, 0.35)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 12px rgba(220, 38, 38, 0.25)`;
                }}
              >
                Get Quote →
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: colors.greyDark,
                padding: '8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.silver;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="mobile-menu" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              marginTop: '20px',
              padding: '20px',
              backgroundColor: colors.white,
              borderRadius: '20px',
              boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.1)',
              border: `1px solid ${colors.silverDark}`
            }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: isActive(link.path) ? colors.red : colors.greyMedium,
                    fontWeight: isActive(link.path) ? '600' : '500',
                    padding: '12px 16px',
                    display: 'block',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    backgroundColor: isActive(link.path) ? colors.redLight : 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.backgroundColor = colors.silver;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path)) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/16042396141"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                  color: colors.white,
                  padding: '14px 24px',
                  borderRadius: '40px',
                  fontWeight: '600',
                  textAlign: 'center',
                  textDecoration: 'none',
                  marginTop: '8px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                Get Free Quote
              </a>
            </div>
          )}
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding under navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default Navbar;