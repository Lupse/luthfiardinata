'use client';

import React from 'react';
import './SkillsSection.css';

// Icon components untuk Hard Skills
const ProgrammingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const FrontendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="2" y1="20" x2="22" y2="20"></line>
  </svg>
);

const BackendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
  </svg>
);

const NetworkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"></circle>
    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
  </svg>
);

const DataIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3"></path>
    <rect x="3" y="10" width="18" height="1"></rect>
    <path d="M6 10V5M12 10V3M18 10V5"></path>
  </svg>
);

// Icon components untuk Soft Skills
const BrainIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9.5 2a3.5 3.5 0 0 1 3.5 3.5V10a3.5 3.5 0 0 1-7 0V5.5A3.5 3.5 0 0 1 9.5 2M11 13v5a5 5 0 0 1-10 0v-5"></path>
  </svg>
);

const ThinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const FlexIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3h18v18H3z"></path>
    <path d="M9 9h6v6H9z"></path>
  </svg>
);

const TeamsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const iconMap = {
  Programming: ProgrammingIcon,
  Frontend: FrontendIcon,
  Backend: BackendIcon,
  Database: DatabaseIcon,
  Networking: NetworkIcon,
  Data: DataIcon,
};

const softSkillIconMap = {
  'Critical Thinking': BrainIcon,
  'Problem Solving': ThinkIcon,
  'Communication': HeartIcon,
  'Time Management': ClockIcon,
  'Adaptability': FlexIcon,
  'Teamwork': TeamsIcon,
};

export default function SkillsSection() {
  const hardSkills = {
    Programming: 'C++, Python, JavaScript',
    Frontend: 'HTML, CSS, ReactJS, Flutter, NextJS, Laravel',
    Backend: 'Laravel, Express, NestJS',
    Database: 'MySQL, Firebase',
    Networking: 'Cisco Packet Tracer',
    Data: 'Tableau, Orange',
  };

  const softSkills = [
    'Critical Thinking',
    'Problem Solving',
    'Communication',
    'Time Management',
    'Adaptability',
    'Teamwork',
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-hard">
          <h2 className="skills-title">Hard Skills</h2>
          <div className="hard-skills-list">
            {Object.entries(hardSkills).map(([category, skills]) => {
              const IconComponent = iconMap[category];
              return (
                <div key={category} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">
                      {IconComponent && <IconComponent />}
                    </div>
                    <p className="skill-label">{category}</p>
                  </div>
                  <p className="skill-text">{skills}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-soft">
          <h2 className="skills-title">Soft Skills</h2>
          <div className="soft-skills-list">
            {softSkills.map((skill, idx) => {
              const IconComponent = softSkillIconMap[skill];
              return (
                <div key={idx} className="soft-skill-item">
                  <div className="soft-icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <p className="skill-text">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
