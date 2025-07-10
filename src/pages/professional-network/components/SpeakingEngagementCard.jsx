import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SpeakingEngagementCard = ({ engagement }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Event Image */}
        <div className="lg:w-48 flex-shrink-0">
          <div className="relative overflow-hidden rounded-lg h-32 lg:h-full">
            <Image
              src={engagement.image}
              alt={engagement.event}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3">
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                engagement.type === 'keynote' ? 'bg-accent text-accent-foreground' :
                engagement.type === 'workshop' ? 'bg-success text-success-foreground' :
                'bg-warning text-warning-foreground'
              }`}>
                {engagement.type}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {engagement.title}
              </h3>
              <p className="text-accent font-medium">{engagement.event}</p>
            </div>
            <div className="text-right text-sm text-text-secondary">
              <div className="flex items-center gap-1 mb-1">
                <Icon name="Calendar" size={14} />
                <span>{engagement.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="MapPin" size={14} />
                <span>{engagement.location}</span>
              </div>
            </div>
          </div>

          <p className="text-text-secondary mb-4 line-clamp-2">
            {engagement.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Users" size={16} className="text-accent" />
              <span className="text-text-secondary">
                {engagement.attendees} attendees
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Star" size={16} className="text-warning" />
              <span className="text-text-secondary">
                {engagement.rating}/5 rating
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="MessageSquare" size={16} className="text-success" />
              <span className="text-text-secondary">
                {engagement.feedback} feedback
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {engagement.topics.map((topic, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded-md"
              >
                {topic}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {engagement.slides && (
              <Button
                variant="outline"
                size="sm"
                iconName="FileText"
                iconPosition="left"
                onClick={() => window.open(engagement.slides, '_blank')}
              >
                View Slides
              </Button>
            )}
            {engagement.video && (
              <Button
                variant="outline"
                size="sm"
                iconName="Play"
                iconPosition="left"
                onClick={() => window.open(engagement.video, '_blank')}
              >
                Watch Video
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingEngagementCard;