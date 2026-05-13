import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageCircle,
  CheckCircle, ArrowRight, Globe,
  Printer, TrendingUp, Users, Award, Heart,
  Play, Pause, Zap, Star, Shield
} from 'lucide-react';

const Contact = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare WhatsApp message
    const message = `📋 *New Contact Form Submission* 📋%0A%0A` +
      `👤 *Name:* ${formData.name}%0A` +
      `📧 *Email:* ${formData.email}%0A` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}%0A` +
      `🎯 *Service:* ${formData.service || 'Not selected'}%0A` +
      `💬 *Message:* ${formData.message}%0A%0A` +
      `🕐 *Time:* ${new Date().toLocaleString()}%0A` +
      `🌐 *From:* Fast Group Website`;

    // WhatsApp number
    const whatsappNumber = '16042396141';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    
    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", details: ["+1 (604) 239-6141"], action: "Call Now", link: "tel:16042396141", color: colors.red },
    { icon: Mail, title: "Email Us", details: ["fastmediaagencyofficial@gmail.com"], action: "Send Email", link: "mailto:fastmediaagencyofficial@gmail.com", color: colors.red },
    { icon: MapPin, title: "Visit HQ", details: ["101 Queen Street, West Toronto ON M5H 2N1 CANADA"], action: "Get Directions", link: "https://maps.google.com", color: colors.red },
    { icon: MessageCircle, title: "WhatsApp", details: ["+1 (604) 239-6141"], action: "Chat Now", link: "https://wa.me/16042396141", color: colors.red }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const services = [
    { name: "Printing Services", icon: Printer, value: "printing" },
    { name: "Digital Marketing", icon: TrendingUp, value: "marketing" },
    { name: "Corporate Solutions", icon: Users, value: "corporate" },
    { name: "General Inquiry", icon: Heart, value: "general" }
  ];

  // Social Media Icons as SVG Components
  const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.913-12.084c0-.213-.004-.426-.015-.637.786-.569 1.467-1.276 2.005-2.082z"/>
    </svg>
  );

  const YoutubeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

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
        minHeight: '50vh', 
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
            <source src="https://cdn.pixabay.com/video/2024/01/09/197493-900040304_tiny.mp4" type="video/mp4" />
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
              <Phone size={16} color={colors.red} />
              <span style={{ color: colors.red, fontSize: '13px', fontWeight: '600' }}>GET IN TOUCH</span>
            </div>
            <h1 style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)', 
              fontWeight: '800', 
              color: colors.greyDark, 
              marginBottom: '20px' 
            }}>
              Contact <span style={{ color: colors.red }}>Us</span>
            </h1>
            <p style={{ fontSize: '18px', color: colors.greyMedium, lineHeight: '1.6' }}>
              Have a question or ready to start a project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT CARDS ========== */}
      <section style={{ padding: '50px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {contactInfo.map((info, index) => (
              <div key={index} className="reveal">
                <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div style={{
                    backgroundColor: colors.white,
                    borderRadius: '20px',
                    padding: '28px',
                    textAlign: 'center',
                    border: `1px solid ${colors.silverDark}`,
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = colors.red;
                    e.currentTarget.style.boxShadow = `0 20px 35px rgba(220,38,38,0.1)`;
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
                      margin: '0 auto 16px',
                      transition: 'transform 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                      <info.icon size={28} color={colors.red} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: colors.greyDark, marginBottom: '8px' }}>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} style={{ color: colors.greyMedium, fontSize: '13px', marginBottom: '4px' }}>{detail}</p>
                    ))}
                    <span style={{ display: 'inline-block', marginTop: '12px', color: colors.red, fontSize: '13px', fontWeight: '600' }}>
                      {info.action} →
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT FORM & MAP SECTION ========== */}
      <section style={{ padding: '50px 0', backgroundColor: colors.silver }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
            
            {/* Contact Form */}
            <div className="reveal-left">
              <div style={{
                backgroundColor: colors.white,
                borderRadius: '24px',
                padding: '32px',
                border: `1px solid ${colors.silverDark}`
              }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.greyDark, marginBottom: '24px' }}>Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div style={{
                    marginBottom: '24px',
                    padding: '16px',
                    backgroundColor: colors.redLight,
                    border: `1px solid ${colors.red}`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <CheckCircle size={20} color={colors.red} />
                    <span style={{ color: colors.red }}>Thank you! Redirecting to WhatsApp...</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', color: colors.greyMedium, marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: colors.silver,
                        border: `1px solid ${colors.silverDark}`,
                        borderRadius: '12px',
                        color: colors.greyDark,
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.3s'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = colors.red;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.redLight}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = colors.silverDark;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', color: colors.greyMedium, marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          backgroundColor: colors.silver,
                          border: `1px solid ${colors.silverDark}`,
                          borderRadius: '12px',
                          color: colors.greyDark,
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = colors.red;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.redLight}`;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = colors.silverDark;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: colors.greyMedium, marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          backgroundColor: colors.silver,
                          border: `1px solid ${colors.silverDark}`,
                          borderRadius: '12px',
                          color: colors.greyDark,
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = colors.red;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.redLight}`;
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = colors.silverDark;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                        placeholder="+1 (604) 239-6141"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', color: colors.greyMedium, marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: colors.silver,
                        border: `1px solid ${colors.silverDark}`,
                        borderRadius: '12px',
                        color: colors.greyDark,
                        fontSize: '14px',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>{service.name}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', color: colors.greyMedium, marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        backgroundColor: colors.silver,
                        border: `1px solid ${colors.silverDark}`,
                        borderRadius: '12px',
                        color: colors.greyDark,
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = colors.red;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.redLight}`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = colors.silverDark;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      background: `linear-gradient(135deg, ${colors.red}, ${colors.redDark})`,
                      color: colors.white,
                      padding: '14px',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 6px 20px rgba(220,38,38,0.3)`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {isSubmitting ? (
                      <>Sending... <Send size={16} /></>
                    ) : (
                      <>Send via WhatsApp <MessageCircle size={16} /></>
                    )}
                  </button>
                  
                  <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: colors.greyLight }}>
                    Your message will be sent directly to our WhatsApp
                  </p>
                </form>
              </div>
            </div>

            {/* Office Info & Map */}
            <div className="reveal-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Office Hours */}
                <div style={{
                  backgroundColor: colors.white,
                  borderRadius: '24px',
                  padding: '28px',
                  border: `1px solid ${colors.silverDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', background: colors.redLight, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Clock size={24} color={colors.red} />
                    </div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark }}>Office Hours</h2>
                  </div>
                  <div>
                    {officeHours.map((item, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: index < officeHours.length - 1 ? `1px solid ${colors.silverDark}` : 'none' }}>
                        <span style={{ color: colors.greyMedium }}>{item.day}</span>
                        <span style={{ color: colors.red, fontWeight: '600' }}>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <div style={{
                  backgroundColor: colors.white,
                  borderRadius: '24px',
                  padding: '28px',
                  border: `1px solid ${colors.silverDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', background: colors.redLight, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <MapPin size={24} color={colors.red} />
                    </div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark }}>Our Location</h2>
                  </div>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', marginBottom: '16px' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.976543210987!2d-79.3832!3d43.6532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7582!2sQueen%20St%20W%2C%20Toronto%2C%20ON%20M5H%202N1%2C%20Canada!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Office Location"
                    ></iframe>
                  </div>
                  <p style={{ color: colors.greyMedium, fontSize: '14px' }}>101 Queen Street, West Toronto ON M5H 2N1 CANADA</p>
                </div>

                {/* Social Links */}
                <div style={{
                  backgroundColor: colors.white,
                  borderRadius: '24px',
                  padding: '28px',
                  border: `1px solid ${colors.silverDark}`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{ width: '48px', height: '48px', background: colors.redLight, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Heart size={24} color={colors.red} />
                    </div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: colors.greyDark }}>Follow Us</h2>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: colors.silver,
                      borderRadius: '12px',
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
                      e.currentTarget.style.backgroundColor = colors.silver;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <FacebookIcon />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: colors.silver,
                      borderRadius: '12px',
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
                      e.currentTarget.style.backgroundColor = colors.silver;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <InstagramIcon />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: colors.silver,
                      borderRadius: '12px',
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
                      e.currentTarget.style.backgroundColor = colors.silver;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <LinkedinIcon />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: colors.silver,
                      borderRadius: '12px',
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
                      e.currentTarget.style.backgroundColor = colors.silver;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <TwitterIcon />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: colors.silver,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF0000';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.silver;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}>
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '700', color: colors.greyDark, marginBottom: '12px' }}>
              Frequently Asked <span style={{ color: colors.red }}>Questions</span>
            </h2>
            <p style={{ color: colors.greyMedium }}>Find quick answers to common questions</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { q: "How quickly can I expect a response?", a: "We typically respond within 24 hours during business days." },
              { q: "Do you offer international services?", a: "Yes, we serve clients worldwide with our digital services." },
              { q: "What is your pricing structure?", a: "We offer custom quotes based on your specific requirements." },
              { q: "Can I get a free consultation?", a: "Absolutely! Contact us for a free no-obligation consultation." }
            ].map((item, idx) => (
              <details key={idx} style={{
                marginBottom: '16px',
                backgroundColor: colors.white,
                border: `1px solid ${colors.silverDark}`,
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}>
                <summary style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '20px 24px',
                  fontWeight: '600',
                  color: colors.greyDark,
                  listStyle: 'none'
                }}>
                  {item.q}
                  <ArrowRight size={18} style={{ transition: 'transform 0.3s', color: colors.red }} />
                </summary>
                <div style={{ padding: '0 24px 20px 24px', color: colors.greyMedium, lineHeight: '1.6', borderTop: `1px solid ${colors.silverDark}` }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EMERGENCY CONTACT SECTION ========== */}
      <section style={{ 
        padding: '60px 0', 
        background: `linear-gradient(135deg, ${colors.red} 0%, ${colors.redDark} 100%)`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal">
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '800', color: colors.white, marginBottom: '16px' }}>
              Need Immediate Assistance?
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.92)', marginBottom: '32px' }}>
              For urgent inquiries, please call us directly or send a WhatsApp message
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <a href="tel:16042396141">
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
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <Phone size={18} /> Call Now
                </button>
              </a>
              <a href="https://wa.me/16042396141" target="_blank" rel="noopener noreferrer">
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
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <MessageCircle size={18} /> WhatsApp Us
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
        details summary::-webkit-details-marker {
          display: none;
        }
        details[open] summary svg {
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
};

export default Contact;