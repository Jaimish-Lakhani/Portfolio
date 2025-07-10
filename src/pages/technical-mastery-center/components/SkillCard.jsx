import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, index }) => {
  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'text-success-600 bg-success-50';
      case 'Advanced':
        return 'text-accent-600 bg-accent-50';
      case 'Intermediate':
        return 'text-warning-600 bg-warning-50';
      default:
        return 'text-text-secondary bg-surface';
    }
  };

  const getRecencyColor = (recency) => {
    if (recency === 'Current') return 'bg-success-500';
    if (recency === 'Recent') return 'bg-accent-500';
    return 'bg-text-tertiary';
  };

  return (
    <div className="group bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-brand-secondary rounded-lg flex items-center justify-center shadow-md">
            <Icon name={skill.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{skill.name}</h3>
            <p className="text-sm text-text-secondary">{skill.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
            {skill.proficiency}
          </span>
          <div className={`w-2 h-2 rounded-full ${getRecencyColor(skill.recency)}`}></div>
        </div>
      </div>

      <p className="text-text-secondary text-sm mb-4">{skill.description}</p>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">Experience</span>
          <span className="text-sm font-medium text-text-primary">{skill.experience}</span>
        </div>
        
        <div className="w-full bg-surface-secondary rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-accent-500 to-brand-secondary h-2 rounded-full transition-all duration-500"
            style={{ width: `${skill.proficiencyLevel}%` }}
          ></div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {skill.projects.map((project, idx) => (
            <span key={idx} className="px-2 py-1 bg-background text-text-secondary text-xs rounded-md">
              {project}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-surface-secondary">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-tertiary">Last used: {skill.lastUsed}</span>
          <button className="text-accent-600 hover:text-accent-700 text-sm font-medium transition-colors">
            View Examples
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;