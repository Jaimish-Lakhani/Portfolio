import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionCard = ({ recognition }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
          <Image
            src={recognition.image}
            alt={recognition.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-text-primary mb-1">
                {recognition.title}
              </h3>
              <p className="text-accent font-medium">{recognition.organization}</p>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Award" size={16} className="text-warning" />
              <span className="text-sm text-text-secondary">{recognition.year}</span>
            </div>
          </div>

          <p className="text-text-secondary text-sm mb-3">
            {recognition.description}
          </p>

          {/* Achievement Details */}
          {recognition.details && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-2">
                {recognition.details.map((detail, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-warning-100 text-warning-700 text-xs rounded-md"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Impact */}
          {recognition.impact && (
            <div className="flex items-center gap-2 text-sm">
              <Icon name="TrendingUp" size={14} className="text-success" />
              <span className="text-text-secondary">{recognition.impact}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecognitionCard;