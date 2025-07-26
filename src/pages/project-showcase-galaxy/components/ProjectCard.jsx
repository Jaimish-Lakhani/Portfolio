import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onViewDemo }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ?'bg-success text-success-foreground' 
              : project.status === 'In Development' ?'bg-warning text-warning-foreground' :'bg-secondary text-secondary-foreground'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demoUrl && (
            <button
              onClick={() => onViewDemo(project)}
              className="p-2 bg-surface/90 hover:bg-surface rounded-lg shadow-md transition-colors duration-200 border border-border"
              title="View Live Demo"
            >
              <Icon name="ExternalLink" size={16} className="text-text-primary" />
            </button>
          )}
          <button
            onClick={() => onViewDetails(project)}
            className="p-2 bg-surface/90 hover:bg-surface rounded-lg shadow-md transition-colors duration-200 border border-border"
            title="View Details"
          >
            <Icon name="Eye" size={16} className="text-text-primary" />
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-primary mb-1 line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary">
              {project.category} • {project.year}
            </p>
          </div>
          <div className="flex items-center space-x-1 ml-4">
            <Icon name="Star" size={16} className="text-warning-500" />
            <span className="text-sm font-medium text-text-secondary">
              {project.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent-50 text-accent text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs font-medium rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-surface-secondary">
          <div className="text-center">
            <div className="text-lg font-semibold text-text-primary">
              {project.metrics.performance}
            </div>
            <div className="text-xs text-text-secondary">Performance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-text-primary">
              {project.metrics.users}
            </div>
            <div className="text-xs text-text-secondary">Users</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-text-primary">
              {project.metrics.impact}
            </div>
            <div className="text-xs text-text-secondary">Impact</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="ArrowRight"
            iconPosition="right"
            className="flex-1"
          >
            Case Study
          </Button>
          {project.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDemo(project)}
              iconName="ExternalLink"
              iconPosition="right"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;