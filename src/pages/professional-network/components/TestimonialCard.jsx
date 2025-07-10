import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-surface border border-surface-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <Icon name="Quote" size={12} color="white" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
          <p className="text-accent text-sm font-medium">{testimonial.position}</p>
          <p className="text-text-secondary text-sm">{testimonial.company}</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < testimonial.rating ? 'text-warning fill-current' : 'text-surface-tertiary'}
            />
          ))}
        </div>
      </div>

      <blockquote className="text-text-secondary italic mb-4 leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      <div className="flex items-center justify-between pt-4 border-t border-surface-secondary">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Icon name="Calendar" size={14} />
          <span>{testimonial.date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-2 py-1 bg-surface-secondary text-text-secondary rounded-md text-xs">
            {testimonial.relationship}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;