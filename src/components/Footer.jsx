'use client';

import React from 'react';
import './Footer.css';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2s9 5 20 0a9.50 9.50 0 0 0 8-4.5"></path>
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

// Contact icons (moved from ContactSection)
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GitHubIcon,
      label: 'GitHub',
      href: 'https://github.com/Lupse',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/luthfiardinata',
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      href: 'https://twitter.com',
    },
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const contactLinks = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'lardinatafirman@gmail.com',
      href: 'mailto:lardinatafirman@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'WhatsApp',
      value: '+62 895-0987-8729',
      href: 'https://wa.me/6289509878729',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/luthfiardinata',
      href: 'https://linkedin.com/in/luthfiardinata',
    },
  ];

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-title">Get in Touch</h3>
            <p className="footer-description">Let's collaborate and create something amazing together.</p>
            <div className="footer-contact-links">
              {contactLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="footer-contact-link"
                  >
                    <div className="footer-contact-link-icon"><IconComponent /></div>
                    <div className="footer-contact-link-content">
                      <p className="footer-contact-link-label">{link.label}</p>
                      <p className="footer-contact-link-value">{link.value}</p>
                    </div>
                    <div className="footer-contact-link-arrow">→</div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Navigation</h4>
            <nav className="footer-nav">
              {footerLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="footer-nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Follow</h4>
            <div className="footer-social">
              {socialLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    title={link.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Luthfi Ardinata. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
