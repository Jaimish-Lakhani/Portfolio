import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    collaborationType: 'project'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const collaborationTypes = [
    { id: 'project', label: 'Project Development', icon: 'Code' },
    { id: 'consulting', label: 'Technical Consulting', icon: 'Lightbulb' },
    { id: 'mentoring', label: 'Team Mentoring', icon: 'GraduationCap' },
    { id: 'partnership', label: 'Long-term Partnership', icon: 'Handshake' }
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'API Development',
    'System Integration',
    'Legacy Modernization',
    'Technical Audit',
    'Other'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible'
  ];

  const budgetRanges = [
    'Under $10K',
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K+',
    'Discuss Budget'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          timeline: '',
          budget: '',
          message: '',
          collaborationType: 'project'
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      method: 'Email',
      value: 'jaimish.lakhani@gmail.com',
      icon: 'Mail',
      description: 'Best for detailed project discussions',
      action: () => window.open('mailto:jaimish.lakhani@gmail.com?subject=Collaboration Inquiry', '_blank')
    },
    {
      method: 'LinkedIn',
      value: '/in/jaimish-lakhani',
      icon: 'Linkedin',
      description: 'Professional networking and updates',
      action: () => window.open('https://linkedin.com/in/jaimish-lakhani', '_blank')
    },
    {
      method: 'Schedule Call',
      value: 'Book 30-min consultation',
      icon: 'Calendar',
      description: 'Direct conversation about your needs',
      action: () => window.open('https://calendly.com/jaimish-lakhani-consultation', '_blank')
    },
    {
      method: 'GitHub',
      value: '/jaimish-lakhani',
      icon: 'Github',
      description: 'View code samples and contributions',
      action: () => window.open('https://github.com/jaimish-lakhani', '_blank')
    }
  ];

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Let's Start Collaborating
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to bring your project to life? Choose your preferred way to connect 
            and let's discuss how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Project Inquiry Form
                </h3>
                <p className="text-text-secondary">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-conversion-accent/10 border border-conversion-accent/20 rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-conversion-accent" />
                  <div>
                    <div className="font-semibold text-conversion-accent">Message Sent Successfully!</div>
                    <div className="text-sm text-text-secondary">We'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Collaboration Type */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-3">
                    Type of Collaboration
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {collaborationTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, collaborationType: type.id }))}
                        className={`flex items-center space-x-2 p-3 rounded-lg border transition-all duration-300 ${
                          formData.collaborationType === type.id
                            ? 'border-accent bg-accent/10 text-accent' :'border-border bg-surface text-text-secondary hover:border-accent/50'
                        }`}
                      >
                        <Icon name={type.icon} size={16} />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Company/Organization
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    >
                      <option value="">Select Type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    >
                      <option value="">Select Timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-field w-full"
                    >
                      <option value="">Select Budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows={5}
                    required
                    className="input-field w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Project Inquiry'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Other Ways to Connect
              </h3>
              <p className="text-text-secondary">
                Choose the communication method that works best for you.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((contact, index) => (
                <button
                  key={index}
                  onClick={contact.action}
                  className="w-full card p-6 hover:shadow-lg transition-all duration-300 text-left group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent group-hover:text-white rounded-lg flex items-center justify-center transition-all duration-300">
                      <Icon name={contact.icon} size={24} className="text-accent group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                          {contact.method}
                        </h4>
                        <Icon name="ExternalLink" size={16} className="text-text-tertiary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <p className="text-text-secondary text-sm">{contact.value}</p>
                      <p className="text-text-tertiary text-xs mt-1">{contact.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Availability Status */}
            <div className="card p-6 bg-gradient-to-br from-conversion-accent/5 to-conversion-accent/10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-conversion-accent rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-text-primary">Current Availability</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">New Projects:</span>
                  <span className="text-conversion-accent font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Consulting:</span>
                  <span className="text-conversion-accent font-semibold">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Response Time:</span>
                  <span className="text-text-primary font-semibold">&lt; 24 hours</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-conversion-accent">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;