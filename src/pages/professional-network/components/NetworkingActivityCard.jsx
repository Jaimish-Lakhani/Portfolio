import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const NetworkingActivityCard = ({ activity }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-text-primary mb-1">
                {activity.title}
              </h3>
              <p className="text-accent text-sm font-medium">
                {activity.organization}
              </p>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              activity.type === 'conference' ? 'bg-accent-100 text-accent-700' :
              activity.type === 'meetup' ? 'bg-success-100 text-success-700' :
              activity.type === 'workshop'? 'bg-warning-100 text-warning-700' : 'bg-surface-secondary text-text-secondary'
            }`}>
              {activity.type}
            </span>
          </div>

          <p className="text-text-secondary text-sm mb-3 line-clamp-2">
            {activity.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              <span>{activity.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={14} />
              <span>{activity.location}</span>
            </div>
          </div>

          {/* Key Connections */}
          {activity.connections && activity.connections.length > 0 && (
            <div className="mb-3">
              <p className="text-xs text-text-secondary mb-2">Key Connections:</p>
              <div className="flex flex-wrap gap-2">
                {activity.connections.map((connection, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded-md"
                  >
                    {connection}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes */}
          {activity.outcomes && (
            <div className="flex items-center gap-2 text-sm">
              <Icon name="TrendingUp" size={14} className="text-success" />
              <span className="text-text-secondary">{activity.outcomes}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NetworkingActivityCard;