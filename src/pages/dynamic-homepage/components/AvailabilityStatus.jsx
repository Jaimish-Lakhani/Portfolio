import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAvailable, setIsAvailable] = useState(true);
  const [nextAvailability, setNextAvailability] = useState(null);

  const availabilityData = {
    status: "Available for New Projects",
    statusType: "available", // available, busy, limited
    responseTime: "Within 24 hours",
    timezone: "EST (UTC-5)",
    workingHours: "9:00 AM - 6:00 PM",
    nextOpenSlot: "March 15, 2024",
    currentProjects: 2,
    maxProjects: 4,
    preferredProjectTypes: ["Backend Development", "Microservices Architecture", "API Development", "Cloud Infrastructure"],
    minimumBudget: "$5,000",
    estimatedStartDate: "Within 2 weeks"
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate availability based on working hours
    const checkAvailability = () => {
      const now = new Date();
      const hour = now.getHours();
      const isWorkingHours = hour >= 9 && hour <= 18;
      const isWeekday = now.getDay() >= 1 && now.getDay() <= 5;
      
      setIsAvailable(isWorkingHours && isWeekday);
      
      if (!isAvailable) {
        const nextDay = new Date(now);
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay.setHours(9, 0, 0, 0);
        setNextAvailability(nextDay);
      }
    };

    checkAvailability();
    const availabilityTimer = setInterval(checkAvailability, 60000); // Check every minute

    return () => {
      clearInterval(timer);
      clearInterval(availabilityTimer);
    };
  }, [isAvailable]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return {
          bg: 'bg-success-50',
          text: 'text-success-700',
          border: 'border-success-200',
          dot: 'bg-success'
        };
      case 'busy':
        return {
          bg: 'bg-error-50',
          text: 'text-error-700',
          border: 'border-error-200',
          dot: 'bg-error'
        };
      case 'limited':
        return {
          bg: 'bg-warning-50',
          text: 'text-warning-700',
          border: 'border-warning-200',
          dot: 'bg-warning'
        };
      default:
        return {
          bg: 'bg-surface',
          text: 'text-text-secondary',
          border: 'border-surface-secondary',
          dot: 'bg-text-tertiary'
        };
    }
  };

  const statusColors = getStatusColor(availabilityData.statusType);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  };

  const calculateProjectCapacity = () => {
    const percentage = (availabilityData.currentProjects / availabilityData.maxProjects) * 100;
    return Math.min(percentage, 100);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Status Card */}
        <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-lg border border-surface-secondary mb-8">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full border ${statusColors.bg} ${statusColors.text} ${statusColors.border} mb-4`}>
              <div className={`w-3 h-3 rounded-full ${statusColors.dot} animate-pulse`} />
              <span className="font-semibold">{availabilityData.status}</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Let's Build Something
              <span className="text-gradient"> Amazing Together</span>
            </h2>
            
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              I'm currently accepting new projects and would love to discuss how we can bring your ideas to life.
            </p>
          </div>

          {/* Current Time & Status */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-background rounded-xl p-6 border border-surface-secondary">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Clock" size={20} className="text-accent" />
                <h3 className="font-semibold text-text-primary">Current Time</h3>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-mono font-bold text-text-primary">
                  {formatTime(currentTime)}
                </div>
                <div className="text-sm text-text-secondary">
                  Working Hours: {availabilityData.workingHours} {availabilityData.timezone}
                </div>
                <div className={`flex items-center space-x-2 text-sm ${isAvailable ? 'text-success' : 'text-warning'}`}>
                  <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-success' : 'bg-warning'} animate-pulse`} />
                  <span>{isAvailable ? 'Online Now' : 'Currently Offline'}</span>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 border border-surface-secondary">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="MessageCircle" size={20} className="text-accent" />
                <h3 className="font-semibold text-text-primary">Response Time</h3>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-text-primary">
                  {availabilityData.responseTime}
                </div>
                <div className="text-sm text-text-secondary">
                  Average response time for new inquiries
                </div>
                <div className="flex items-center space-x-2 text-sm text-success">
                  <Icon name="CheckCircle" size={16} />
                  <span>Fast Response Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Capacity */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-text-primary">Current Project Capacity</h3>
              <span className="text-sm text-text-secondary">
                {availabilityData.currentProjects} of {availabilityData.maxProjects} projects
              </span>
            </div>
            <div className="w-full bg-surface-secondary rounded-full h-3 mb-2">
              <div
                className="bg-success h-3 rounded-full transition-all duration-500"
                style={{ width: `${calculateProjectCapacity()}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-text-secondary">
              <span>Available Slots</span>
              <span>{availabilityData.maxProjects - availabilityData.currentProjects} remaining</span>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Calendar" size={24} className="text-accent" />
              </div>
              <div className="font-semibold text-text-primary mb-1">Start Date</div>
              <div className="text-sm text-text-secondary">{availabilityData.estimatedStartDate}</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="DollarSign" size={24} className="text-success" />
              </div>
              <div className="font-semibold text-text-primary mb-1">Minimum Budget</div>
              <div className="text-sm text-text-secondary">{availabilityData.minimumBudget}</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Zap" size={24} className="text-brand-secondary" />
              </div>
              <div className="font-semibold text-text-primary mb-1">Next Opening</div>
              <div className="text-sm text-text-secondary">{availabilityData.nextOpenSlot}</div>
            </div>
          </div>

          {/* Preferred Project Types */}
          <div className="mb-8">
            <h3 className="font-semibold text-text-primary mb-4">Preferred Project Types</h3>
            <div className="flex flex-wrap gap-3">
              {availabilityData.preferredProjectTypes.map((type, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-200"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/collaboration-studio">
              <Button
                variant="primary"
                size="lg"
                iconName="Send"
                iconPosition="left"
              >
                Start Project Discussion
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule a Call
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              iconName="FileText"
              iconPosition="left"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" size={24} className="text-accent" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Email</h3>
            <p className="text-sm text-text-secondary mb-4">For detailed project discussions</p>
            <Button variant="outline" size="sm" fullWidth>
              Send Email
            </Button>
          </div>

          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageSquare" size={24} className="text-success" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Live Chat</h3>
            <p className="text-sm text-text-secondary mb-4">Quick questions &amp; consultations</p>
            <Button variant="outline" size="sm" fullWidth>
              Start Chat
            </Button>
          </div>

          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name="Video" size={24} className="text-brand-secondary" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">Video Call</h3>
            <p className="text-sm text-text-secondary mb-4">Face-to-face project planning</p>
            <Button variant="outline" size="sm" fullWidth>
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityStatus;