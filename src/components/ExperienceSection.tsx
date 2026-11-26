import React from 'react';
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react';
import { EDUCATION_AND_CERTS, EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="eyebrow">Background &amp; Credentials</span>
        <h2 className="section-title">Shop-Floor Experience, Internships &amp; Education</h2>
        <p className="section-lead">
          Practical CNC production and spring/steel design support experience paired with
          automotive measurement, frontend development, and B.Tech CSE training.
        </p>

        <div className="resume-grid">
          <div className="panel">
            <h3 className="panel-title">
              <Briefcase size={19} color="#60a5fa" />
              Work Experience &amp; Internships
            </h3>
            <div className="timeline">
              {EXPERIENCE.map((item) => (
                <div key={`${item.role}-${item.org}`} className="timeline-item">
                  <div className="timeline-head">
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-date">{item.period}</span>
                  </div>
                  <div className="timeline-org">{item.org}</div>
                  <ul className="timeline-bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.25rem', alignContent: 'start' }}>
            <div className="panel">
              <h3 className="panel-title">
                <GraduationCap size={19} color="#60a5fa" />
                Education
              </h3>
              <div className="timeline">
                {EDUCATION_AND_CERTS.education.map((edu) => (
                  <div key={edu.degree} className="timeline-item">
                    <div className="timeline-role">{edu.degree}</div>
                    <div className="timeline-org" style={{ marginBottom: '0.15rem' }}>
                      {edu.institution}
                    </div>
                    <div className="timeline-date">{edu.meta}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <h3 className="panel-title">
                <Code size={19} color="#60a5fa" />
                Software Engineering Project
              </h3>
              <div style={{ fontWeight: 600, fontSize: '0.96rem', marginBottom: '0.35rem' }}>
                {EDUCATION_AND_CERTS.softwareProject.title}
              </div>
              <div className="project-software-row" style={{ marginBottom: '0.6rem' }}>
                {EDUCATION_AND_CERTS.softwareProject.stack.map((tech) => (
                  <span key={tech} className="software-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
                {EDUCATION_AND_CERTS.softwareProject.summary}
              </p>
            </div>

            <div className="panel">
              <h3 className="panel-title">
                <Award size={19} color="#60a5fa" />
                Certifications &amp; Languages
              </h3>
              <ul className="timeline-bullets" style={{ marginBottom: '0.85rem' }}>
                {EDUCATION_AND_CERTS.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                Languages: <span style={{ color: 'var(--text-primary)' }}>{EDUCATION_AND_CERTS.languages.join(' • ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
