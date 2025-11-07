'use client';

import React from 'react';
import './ExperienceSection.css';

// Icon untuk experience
const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"></path>
  </svg>
);

const UniversityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 10v6m0 0v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4m20 0H2m20 0l-9-6-9 6"></path>
    <polyline points="6 12 12 16 18 12"></polyline>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Fullstack Website Developer Intern',
      company: 'PT. Sido Muncul Tbk',
      period: 'Jan 2025 - Feb 2025',
      icon: BriefcaseIcon,
      description: [
        'Developed a fullstack web-based network monitoring system using Laravel and MySQL.',
        'Implemented backend automation for device ping checks and uptime/downtime logs.',
        'Built a responsive dashboard for real-time device status visualization.',
        'Collaborated with the IT team to test, debug, and deploy the system.',
      ],
    },
    {
      id: 2,
      title: 'Laboratory Assistant – Informatics Department',
      company: 'UPN "Veteran" Yogyakarta',
      period: 'Aug 2022 – Jul 2023',
      icon: UniversityIcon,
      description: [
        'Taught C++ programming fundamentals.',
        'Assisted students in network configuration using Cisco Packet Tracer.',
        'Helped prepare and deliver lab materials for practical sessions.',
      ],
    },
  ];

  return (
    <div className="experience-section">
      <div className="experience-timeline">
        {experiences.map((exp, idx) => {
          const IconComponent = exp.icon;
          return (
            <div key={exp.id} className="experience-item">
              <div className="experience-marker">
                <div className="marker-icon">
                  <IconComponent />
                </div>
                {idx !== experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <div className="experience-period">
                    <CalendarIcon />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="experience-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
