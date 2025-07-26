import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineNode = ({ node, isLeft, isActive, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
    onClick(node.id);
  };

  return (
    <div className={`relative flex items-center mb-8 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-surface-secondary -z-10"></div>
      
      {/* Node Circle */}
      <div 
        className={`relative z-10 w-12 h-12 rounded-full border-4 cursor-pointer transition-all duration-300 ${
          isActive 
            ? 'bg-accent border-accent shadow-lg scale-110' 
            : 'bg-background border-surface-secondary hover:border-accent hover:scale-105'
        }`}
        onClick={handleExpand}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon 
            name={node.icon} 
            size={20} 
            className={isActive ? 'text-white' : 'text-text-secondary'}
          />
        </div>
        {node.isHighlight && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-conversion-accent rounded-full border-2 border-background"></div>
        )}
      </div>

      {/* Content Card */}
      <div className={`flex-1 mx-8 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div 
          className={`card p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
            isExpanded ? 'ring-2 ring-accent ring-opacity-50' : ''
          }`}
          onClick={handleExpand}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={isLeft ? 'text-right' : 'text-left'}>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {node.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-2">
                {node.company} • {node.period}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {node.technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-accent-50 text-accent text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {node.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md">
                    +{node.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-text-secondary ml-4"
            />
          </div>

          {/* Summary */}
          <p className="text-text-secondary text-sm mb-4 leading-relaxed">
            {node.summary}
          </p>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-surface-secondary space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="Trophy" size={16} className="mr-2 text-conversion-accent" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {node.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-sm text-text-secondary">
                      <Icon name="CheckCircle" size={14} className="mr-2 mt-0.5 text-conversion-accent flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                  <Icon name="Code" size={16} className="mr-2 text-brand-primary" />
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {node.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-surface text-text-secondary text-xs rounded-full border border-surface-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              {node.lessons && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Lightbulb" size={16} className="mr-2 text-warning" />
                    Key Learnings
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {node.lessons}
                  </p>
                </div>
              )}

              {/* Project Images */}
              {node.images && node.images.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Image" size={16} className="mr-2 text-brand-secondary" />
                    Project Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {node.images.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg bg-surface">
                        <Image 
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <p className="text-white text-xs p-2 font-medium">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineNode;