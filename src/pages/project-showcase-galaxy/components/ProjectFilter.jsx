import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTech, 
  selectedStatus,
  onCategoryChange, 
  onTechChange, 
  onStatusChange,
  onClearFilters,
  projectCount 
}) => {
  const statusOptions = ['All', 'Live', 'In Development', 'Completed'];

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-accent" />
          <h3 className="text-lg font-semibold text-text-primary">
            Filter Projects
          </h3>
          <span className="px-3 py-1 bg-accent-50 text-accent text-sm font-medium rounded-full">
            {projectCount} projects
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
        >
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'bg-background text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Technology
          </label>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => onTechChange(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTech === tech
                    ? 'bg-brand-secondary text-white shadow-sm'
                    : 'bg-background text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedStatus === status
                    ? 'bg-success text-success-foreground shadow-sm'
                    : 'bg-background text-text-secondary hover:bg-surface hover:text-text-primary'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;