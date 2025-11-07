'use client';

import React, { useState } from 'react';
import './ContactSection.css';

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"></path>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/xyzqknon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

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
    <div className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtitle">Let's collaborate and create something amazing together.</p>

          <div className="contact-links">
            {contactLinks.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="contact-link"
                >
                  <div className="contact-link-icon">
                    <IconComponent />
                  </div>
                  <div className="contact-link-content">
                    <p className="contact-link-label">{link.label}</p>
                    <p className="contact-link-value">{link.value}</p>
                  </div>
                  <div className="contact-link-arrow">→</div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Send me a message</h2>

          {submitted && (
            <div className="form-success">
              <p>✓ Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Your message here..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" disabled={loading} className="form-button">
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <SendIcon />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
