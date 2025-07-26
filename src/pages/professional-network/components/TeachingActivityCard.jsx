import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeachingActivityCard = ({ activity }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
            <Icon name={activity.icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              {activity.title}
            </h3>
            <p className="text-accent font-medium">{activity.platform}</p>
          </div>
        </div>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          activity.status === 'ongoing' ? 'bg-success-100 text-success-700' :
          activity.status === 'completed'? 'bg-surface-secondary text-text-secondary' : 'bg-accent-100 text-accent-700'
        }`}>
          {activity.status}
        </span>
      </div>

      <p className="text-text-secondary mb-4">
        {activity.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {activity.metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-xl font-bold text-accent mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-text-secondary">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Topics Covered */}
      <div className="mb-4">
        <p className="text-sm font-medium text-text-primary mb-2">Topics Covered:</p>
        <div className="flex flex-wrap gap-2">
          {activity.topics.map((topic, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded-md"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-surface-secondary">
        {activity.materials && (
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
            onClick={() => window.open(activity.materials, '_blank')}
          >
            Materials
          </Button>
        )}
        {activity.feedback && (
          <Button
            variant="outline"
            size="sm"
            iconName="MessageSquare"
            iconPosition="left"
            onClick={() => window.open(activity.feedback, '_blank')}
          >
            Feedback
          </Button>
        )}
      </div>
    </div>
  );
};

export default TeachingActivityCard;