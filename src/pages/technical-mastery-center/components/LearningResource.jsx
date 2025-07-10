import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningResource = ({ resource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getResourceTypeIcon = (type) => {
    const icons = {
      'article': 'FileText',
      'video': 'Play',
      'course': 'GraduationCap',
      'tool': 'Wrench',
      'book': 'Book',
      'documentation': 'FileCode',
      'tutorial': 'Monitor'
    };
    return icons[type] || 'Link';
  };

  const getResourceTypeColor = (type) => {
    const colors = {
      'article': 'text-violet-600 bg-violet-50',
      'video': 'text-red-600 bg-red-50',
      'course': 'text-purple-600 bg-purple-50',
      'tool': 'text-green-600 bg-green-50',
      'book': 'text-orange-600 bg-orange-50',
      'documentation': 'text-gray-600 bg-gray-50',
      'tutorial': 'text-indigo-600 bg-indigo-50'
    };
    return colors[type] || 'text-gray-600 bg-gray-50';
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'text-success-600 bg-success-50',
      'Intermediate': 'text-warning-600 bg-warning-50',
      'Advanced': 'text-error-600 bg-error-50',
      'Expert': 'text-purple-600 bg-purple-50'
    };
    return colors[difficulty] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getResourceTypeColor(resource.type)}`}>
              <Icon name={getResourceTypeIcon(resource.type)} size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary mb-1">{resource.title}</h3>
              <p className="text-text-secondary text-sm mb-2">{resource.description}</p>
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                  {resource.difficulty}
                </span>
                <span className="text-xs text-text-tertiary">{resource.duration}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-warning-500" />
                  <span className="text-xs text-text-tertiary">{resource.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {resource.tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-background text-text-secondary text-xs rounded border border-surface-secondary">
              {tag}
            </span>
          ))}
        </div>

        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-surface-secondary">
            <div>
              <h4 className="font-semibold text-text-primary mb-2">What You'll Learn</h4>
              <ul className="space-y-1">
                {resource.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-success-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {resource.keyTakeaways && (
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Key Takeaways</h4>
                <div className="bg-accent-50 border border-accent-200 rounded-lg p-3">
                  <p className="text-accent-700 text-sm">{resource.keyTakeaways}</p>
                </div>
              </div>
            )}

            {resource.prerequisites && resource.prerequisites.length > 0 && (
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Prerequisites</h4>
                <div className="flex flex-wrap gap-2">
                  {resource.prerequisites.map((prereq, idx) => (
                    <span key={idx} className="px-2 py-1 bg-warning-50 text-warning-700 text-xs rounded border border-warning-200">
                      {prereq}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Why I Recommend This</h4>
                <p className="text-sm text-text-secondary">{resource.personalNote}</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-2">Best For</h4>
                <p className="text-sm text-text-secondary">{resource.bestFor}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-surface-secondary mt-4">
          <div className="flex items-center space-x-4">
            <span className="text-xs text-text-tertiary">Added: {resource.dateAdded}</span>
            <span className="text-xs text-text-tertiary">Updated: {resource.lastUpdated}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-1 px-3 py-1 text-sm text-text-secondary hover:text-text-primary transition-colors">
              <Icon name="Bookmark" size={14} />
              <span>Save</span>
            </button>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-1 bg-accent-600 text-white text-sm rounded-lg hover:bg-accent-700 transition-colors"
            >
              <Icon name="ExternalLink" size={14} />
              <span>Visit</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningResource;