import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineFilter = ({ activeFilter, onFilterChange, viewMode, onViewModeChange }) => {
  const filters = [
    { id: 'all', label: 'Complete Journey', icon: 'MapPin', description: 'Full career timeline' },
    { id: 'career', label: 'Career Path', icon: 'Briefcase', description: 'Professional roles' },
    { id: 'skills', label: 'Skill Evolution', icon: 'TrendingUp', description: 'Technology learning' },
    { id: 'projects', label: 'Major Projects', icon: 'Folder', description: 'Key deliverables' },
    { id: 'education', label: 'Learning Journey', icon: 'GraduationCap', description: 'Continuous education' }
  ];

  const viewModes = [
    { id: 'timeline', label: 'Timeline View', icon: 'Clock' },
    { id: 'grid', label: 'Grid View', icon: 'Grid3x3' },
    { id: 'compact', label: 'Compact View', icon: 'List' }
  ];

  return (
    <div className="bg-surface rounded-xl p-6 mb-8 border border-surface-secondary">
      {/* Filter Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Filter" size={20} className="mr-2 text-accent" />
          Explore My Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left group ${
                activeFilter === filter.id
                  ? 'border-accent bg-accent-50 shadow-md'
                  : 'border-surface-secondary bg-background hover:border-accent hover:bg-accent-50'
              }`}
            >
              <div className="flex items-center mb-2">
                <Icon 
                  name={filter.icon} 
                  size={18} 
                  className={`mr-2 transition-colors duration-300 ${
                    activeFilter === filter.id ? 'text-accent' : 'text-text-secondary group-hover:text-accent'
                  }`}
                />
                <span className={`font-medium text-sm ${
                  activeFilter === filter.id ? 'text-accent' : 'text-text-primary'
                }`}>
                  {filter.label}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {filter.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center justify-between pt-4 border-t border-surface-secondary">
        <div className="flex items-center space-x-2">
          <Icon name="Eye" size={16} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-secondary">View Mode:</span>
        </div>
        <div className="flex items-center space-x-2">
          {viewModes.map((mode) => (
            <Button
              key={mode.id}
              variant={viewMode === mode.id ? "primary" : "ghost"}
              size="sm"
              onClick={() => onViewModeChange(mode.id)}
              iconName={mode.icon}
              className="text-xs"
            >
              {mode.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineFilter;