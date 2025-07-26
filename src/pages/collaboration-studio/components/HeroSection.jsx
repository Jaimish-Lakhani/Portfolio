import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-brand-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-conversion-accent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} color="white" />
                </div>
                <span className="text-accent font-semibold text-lg">Collaboration Studio</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Building Success Through
                <span className="text-gradient block">Meaningful Partnerships</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                Discover how effective communication, transparent processes, and collaborative leadership 
                create exceptional outcomes for clients, teams, and projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Collaboration
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
                onClick={() => document.getElementById('testimonials-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-text-secondary">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-conversion-accent">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary">25+</div>
                <div className="text-sm text-text-secondary">Team Members Mentored</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-surface rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-conversion-accent rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} color="white" />
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">Project Delivered</div>
                      <div className="text-sm text-text-secondary">E-commerce Platform</div>
                    </div>
                  </div>
                  <div className="text-2xl">🎉</div>
                </div>
                
                <div className="bg-surface rounded-lg p-4">
                  <div className="text-sm text-text-secondary mb-2">Client Feedback</div>
                  <div className="text-text-primary font-medium">
                    "Exceptional communication and delivery. The team exceeded our expectations!"
                  </div>
                  <div className="flex items-center mt-3 space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Timeline: On Schedule</span>
                  <span className="text-conversion-accent font-semibold">Budget: Under Target</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Zap" size={32} className="text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-secondary/10 rounded-full flex items-center justify-center">
              <Icon name="Heart" size={24} className="text-brand-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;