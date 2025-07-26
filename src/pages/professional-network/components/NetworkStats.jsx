import React from 'react';
import Icon from '../../../components/AppIcon';

const NetworkStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "500+",
      label: "Professional Connections",
      description: "Active network across tech industry",
      color: "accent"
    },
    {
      icon: "Mic",
      value: "25+",
      label: "Speaking Engagements",
      description: "Conferences, workshops, and panels",
      color: "success"
    },
    {
      icon: "Heart",
      value: "15+",
      label: "Community Projects",
      description: "Pro bono and volunteer initiatives",
      color: "conversion-accent"
    },
    {
      icon: "GraduationCap",
      value: "200+",
      label: "Developers Mentored",
      description: "Through various programs and initiatives",
      color: "warning"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-surface border border-surface-secondary rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
        >
          <div className={`w-16 h-16 mx-auto mb-4 bg-${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon name={stat.icon} size={28} color="white" />
          </div>
          <div className="text-3xl font-bold text-text-primary mb-2">
            {stat.value}
          </div>
          <div className="font-semibold text-text-primary mb-2">
            {stat.label}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NetworkStats;