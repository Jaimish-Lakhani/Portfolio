import React from 'react';
import Icon from '../../../components/AppIcon';


const CommunityInvolvementCard = ({ involvement }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name={involvement.icon} size={24} color="white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {involvement.title}
          </h3>
          <p className="text-accent font-medium mb-2">{involvement.organization}</p>
          <p className="text-text-secondary text-sm mb-3">
            {involvement.description}
          </p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {involvement.metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-accent mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-text-secondary">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Duration and Status */}
      <div className="flex items-center justify-between pt-4 border-t border-surface-secondary">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Icon name="Clock" size={14} />
          <span>{involvement.duration}</span>
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          involvement.status === 'active' ? 'bg-success-100 text-success-700' :
          involvement.status === 'completed'? 'bg-surface-secondary text-text-secondary' : 'bg-warning-100 text-warning-700'
        }`}>
          {involvement.status}
        </span>
      </div>
    </div>
  );
};

export default CommunityInvolvementCard;