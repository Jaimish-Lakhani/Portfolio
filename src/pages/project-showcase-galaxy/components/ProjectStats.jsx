import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: stats.totalProjects,
      color: 'text-accent'
    },
    {
      icon: 'Globe',
      label: 'Live Projects',
      value: stats.liveProjects,
      color: 'text-success'
    },
    {
      icon: 'Users',
      label: 'Happy Clients',
      value: stats.happyClients,
      color: 'text-brand-secondary'
    },
    {
      icon: 'Code',
      label: 'Technologies',
      value: stats.technologies,
      color: 'text-warning-600'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="bg-surface border border-surface-secondary rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-current/10 mb-4 ${item.color}`}>
            <Icon name={item.icon} size={24} className={item.color} />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {item.value}
          </div>
          <div className="text-sm text-text-secondary">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;