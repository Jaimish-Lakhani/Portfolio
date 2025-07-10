import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails, onViewDemo }) => {
  return (
    <div className="bg-gradient-to-br from-accent-50 to-brand-secondary/10 border border-accent-200 rounded-2xl overflow-hidden mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-accent rounded-lg">
              <Icon name="Star" size={20} className="text-white" />
            </div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">
              Featured Project
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {project.title}
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-accent mb-1">
                {project.metrics.performance}
              </div>
              <div className="text-sm text-text-secondary">Performance Score</div>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl font-bold text-success mb-1">
                {project.metrics.impact}
              </div>
              <div className="text-sm text-text-secondary">Business Impact</div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onViewDetails(project)}
              iconName="ArrowRight"
              iconPosition="right"
              className="flex-1"
            >
              View Case Study
            </Button>
            {project.demoUrl && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => onViewDemo(project)}
                iconName="ExternalLink"
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative lg:min-h-[500px]">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay with Quick Stats */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">
                  {project.metrics.users}
                </div>
                <div className="text-xs text-white/80">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">
                  {project.year}
                </div>
                <div className="text-xs text-white/80">Year Built</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white mb-1">
                  {project.rating}★
                </div>
                <div className="text-xs text-white/80">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-6 right-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              project.status === 'Live' ?'bg-success text-success-foreground' 
                : project.status === 'In Development' ?'bg-warning text-warning-foreground' :'bg-secondary text-secondary-foreground'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;