import React from 'react';
import {
  Boxes,
  Code2,
  Cpu,
  DraftingCompass,
  Eye,
  Wrench,
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { SkillGroup } from '../types/portfolio';

const renderIcon = (key: SkillGroup['iconKey']) => {
  switch (key) {
    case 'cad':
      return <Boxes size={20} />;
    case 'render':
      return <Eye size={20} />;
    case 'drafting':
      return <DraftingCompass size={20} />;
    case 'cnc':
      return <Wrench size={20} />;
    case 'mechanics':
      return <Cpu size={20} />;
    case 'code':
      return <Code2 size={20} />;
  }
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <span className="eyebrow">Technical Capabilities</span>
        <h2 className="section-title">CAD Software &amp; Engineering Skills</h2>
        <p className="section-lead">
          Focused capability stack spanning parametric 3D CAD modelling, studio visualization,
          2D engineering drafting, metrology inspection, and CNC G-code execution.
        </p>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.id} className="skill-card">
              <div className="skill-card-head">
                <div className="skill-icon-box">{renderIcon(group.iconKey)}</div>
                <div>
                  <h3 className="skill-card-title">{group.title}</h3>
                  <span className="skill-card-sub">{group.subtitle}</span>
                </div>
              </div>

              <div className="skill-list">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <div className="skill-item-top">
                      <span className="skill-item-name">{item.name}</span>
                      {item.tag && <span className="skill-item-tag">{item.tag}</span>}
                    </div>
                    <p className="skill-item-ctx">{item.context}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
