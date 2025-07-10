import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GivingBackCard = ({ initiative }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-conversion-accent to-success-600 rounded-lg flex items-center justify-center">
          <Icon name={initiative.icon} size={24} color="white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {initiative.title}
          </h3>
          <p className="text-accent font-medium">{initiative.category}</p>
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          initiative.status === 'active' ? 'bg-success-100 text-success-700' :
          initiative.status === 'completed'? 'bg-surface-secondary text-text-secondary' : 'bg-accent-100 text-accent-700'
        }`}>
          {initiative.status}
        </span>
      </div>

      <p className="text-text-secondary mb-4">
        {initiative.description}
      </p>

      {/* Impact Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {initiative.impact.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-xl font-bold text-conversion-accent mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-text-secondary">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Technologies/Skills */}
      <div className="mb-4">
        <p className="text-sm font-medium text-text-primary mb-2">Technologies Used:</p>
        <div className="flex flex-wrap gap-2">
          {initiative.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="flex items-center justify-between pt-4 border-t border-surface-secondary">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Icon name="Clock" size={14} />
          <span>{initiative.duration}</span>
        </div>
        {initiative.link && (
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(initiative.link, '_blank')}
          >
            View Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default GivingBackCard;