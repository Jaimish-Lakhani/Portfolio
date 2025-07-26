import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical', icon: 'Code' },
    { id: 'impact', label: 'Impact', icon: 'TrendingUp' },
    { id: 'lessons', label: 'Lessons', icon: 'BookOpen' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Challenge</h4>
              <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Approach</h4>
              <p className="text-text-secondary leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Solution</h4>
              <p className="text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
          </div>
        );
      
      case 'technical':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Architecture</h4>
              <div className="bg-primary text-primary-foreground p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{project.architecture}</pre>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Code Snippet</h4>
              <div className="bg-primary text-primary-foreground p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{project.codeSnippet}</pre>
              </div>
            </div>
          </div>
        );
      
      case 'impact':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.impactMetrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent mb-1">{metric.value}</div>
                  <div className="text-sm text-text-secondary">{metric.label}</div>
                  <div className="text-xs text-success mt-1">{metric.change}</div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Business Impact</h4>
              <p className="text-text-secondary leading-relaxed">{project.businessImpact}</p>
            </div>
            {project.testimonial && (
              <div className="bg-surface-secondary p-6 rounded-lg border-l-4 border-accent">
                <p className="text-text-secondary italic mb-4">"{project.testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-medium text-text-primary">{project.testimonial.author}</div>
                    <div className="text-sm text-text-secondary">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'lessons':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">What I Learned</h4>
              <ul className="space-y-3">
                {project.lessons.map((lesson, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-warning-500 mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-3">Future Improvements</h4>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="ArrowUpRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text-secondary">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 transition-opacity bg-primary/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-background shadow-xl rounded-2xl">
          {/* Header */}
          <div className="relative">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-primary/80" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-surface/90 hover:bg-surface rounded-lg shadow-md transition-colors duration-200 border border-border"
            >
              <Icon name="X" size={20} className="text-text-primary" />
            </button>

            {/* Project Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                  <div className="flex items-center space-x-4 text-white/90">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} />
                      <span>{project.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      iconName="Github"
                      iconPosition="left"
                    >
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      iconName="ExternalLink"
                      iconPosition="left"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-surface rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-background text-text-primary shadow-sm'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;