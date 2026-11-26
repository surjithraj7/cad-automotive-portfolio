import React from 'react';
import { Box, Eye } from 'lucide-react';
import { CadProject } from '../types/portfolio';

interface ProjectCardProps {
  project: CadProject;
  onOpen: (project: CadProject, initialTab?: 'gallery' | '3d' | 'compare') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  return (
    <article className="project-card">
      <div className="project-thumb-wrap">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-thumb"
          loading="lazy"
        />
        <div className="project-thumb-badges">
          <span className="badge-cat">{project.primaryCategory}</span>
          {project.modelGlb && <span className="badge-3d">3D GLB</span>}
        </div>
      </div>

      <div className="project-body">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <p style={{ margin: '0 0 0.55rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {project.subtitle}
          </p>
          <div className="project-software-row">
            {project.software.map((sw) => (
              <span key={sw} className="software-chip">
                {sw}
              </span>
            ))}
          </div>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="card-meta-block">
          <div className="card-meta-item">
            <strong>Design Objectives</strong>
            <span>{project.designObjectives[0]}</span>
          </div>
          <div className="card-meta-item">
            <strong>Engineering Concepts</strong>
            <span>{project.engineeringConcepts[0]}</span>
          </div>
          <div className="card-meta-item">
            <strong>Technical Features</strong>
            <span>{project.technicalFeatures[0]}</span>
          </div>
          <div className="card-meta-item">
            <strong>My Contribution</strong>
            <span>{project.myContribution}</span>
          </div>
        </div>

        <div className="project-footer">
          <button
            type="button"
            className="btn-view-project"
            onClick={() => onOpen(project, 'gallery')}
          >
            <Eye size={16} />
            View Project
          </button>
          {project.modelGlb && (
            <button
              type="button"
              className="btn-3d-quick"
              onClick={() => onOpen(project, '3d')}
              aria-label={`Inspect 3D model of ${project.title}`}
            >
              <Box size={15} />
              3D
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
