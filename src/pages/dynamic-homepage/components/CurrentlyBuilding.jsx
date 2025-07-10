import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CurrentlyBuilding = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [commitCount, setCommitCount] = useState(0);
  const [isLive, setIsLive] = useState(true);

  const currentProjects = [
    {
      id: 1,
      name: "AI-Powered Code Review Tool",
      description: "Building an intelligent code review system that provides automated feedback and suggestions using machine learning.",
      progress: 75,
      status: "In Development",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      lastUpdate: "2 hours ago",
      priority: "High",
      github: "https://github.com/username/ai-code-review",
      estimatedCompletion: "March 2024"
    },
    {
      id: 2,
      name: "Blockchain Voting Platform",
      description: "Secure, transparent voting system using blockchain technology for enhanced election integrity.",
      progress: 45,
      status: "Planning",
      tech: ["Solidity", "Web3.js", "React", "Node.js"],
      lastUpdate: "1 day ago",
      priority: "Medium",
      github: "https://github.com/username/blockchain-voting",
      estimatedCompletion: "May 2024"
    },
    {
      id: 3,
      name: "Real-time Collaboration IDE",
      description: "Web-based IDE with real-time collaboration features, similar to Google Docs but for code.",
      progress: 30,
      status: "Research",
      tech: ["WebRTC", "Socket.io", "Monaco Editor", "Docker"],
      lastUpdate: "3 days ago",
      priority: "Low",
      github: "https://github.com/username/collab-ide",
      estimatedCompletion: "July 2024"
    }
  ];

  const learningGoals = [
    {
      id: 1,
      skill: "Rust Programming",
      description: "Learning systems programming with Rust for high-performance applications",
      progress: 60,
      resources: ["The Rust Book", "Rustlings", "Rust by Example"],
      timeSpent: "45 hours",
      nextMilestone: "Build a CLI tool"
    },
    {
      id: 2,
      skill: "Kubernetes",
      description: "Mastering container orchestration and cloud-native deployment strategies",
      progress: 40,
      resources: ["Kubernetes Documentation", "CKA Course", "Hands-on Labs"],
      timeSpent: "32 hours",
      nextMilestone: "Deploy multi-tier app"
    },
    {
      id: 3,
      skill: "Machine Learning",
      description: "Deep diving into ML algorithms and neural network architectures",
      progress: 70,
      resources: ["Coursera ML Course", "Kaggle Competitions", "Research Papers"],
      timeSpent: "68 hours",
      nextMilestone: "Complete NLP project"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "commit",
      message: "Implement user authentication with JWT",
      repo: "ai-code-review",
      time: "2 hours ago",
      additions: 156,
      deletions: 23
    },
    {
      id: 2,
      type: "pr",
      message: "Add real-time notifications feature",
      repo: "collab-ide",
      time: "1 day ago",
      status: "merged"
    },
    {
      id: 3,
      type: "issue",
      message: "Fix memory leak in WebSocket connections",
      repo: "blockchain-voting",
      time: "2 days ago",
      status: "closed"
    },
    {
      id: 4,
      type: "commit",
      message: "Optimize database queries for better performance",
      repo: "ai-code-review",
      time: "3 days ago",
      additions: 89,
      deletions: 45
    }
  ];

  useEffect(() => {
    // Simulate real-time commit counter
    const interval = setInterval(() => {
      setCommitCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    // Simulate online status
    const statusInterval = setInterval(() => {
      setIsLive(Math.random() > 0.1); // 90% chance of being online
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-error bg-error-50 border-error-200';
      case 'Medium': return 'text-warning bg-warning-50 border-warning-200';
      case 'Low': return 'text-success bg-success-50 border-success-200';
      default: return 'text-text-secondary bg-surface border-surface-secondary';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'issue': return 'AlertCircle';
      default: return 'Activity';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success-50 text-success-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-success animate-pulse' : 'bg-text-tertiary'}`} />
            <span>{isLive ? 'Currently Active' : 'Recently Active'}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            What I'm <span className="text-gradient">Building Now</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real-time insights into my current projects, learning journey, and development activity. Always pushing boundaries and exploring new technologies.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary">
            <div className="text-2xl font-bold text-accent mb-1">{commitCount + 247}</div>
            <div className="text-sm text-text-secondary">Commits This Month</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary">
            <div className="text-2xl font-bold text-success mb-1">3</div>
            <div className="text-sm text-text-secondary">Active Projects</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary">
            <div className="text-2xl font-bold text-warning mb-1">145</div>
            <div className="text-sm text-text-secondary">Learning Hours</div>
          </div>
          <div className="bg-surface rounded-xl p-6 text-center border border-surface-secondary">
            <div className="text-2xl font-bold text-brand-secondary mb-1">12</div>
            <div className="text-sm text-text-secondary">New Skills</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface rounded-lg p-1 border border-surface-secondary">
            {[
              { id: 'current', label: 'Current Projects', icon: 'Code' },
              { id: 'learning', label: 'Learning Goals', icon: 'BookOpen' },
              { id: 'activity', label: 'Recent Activity', icon: 'Activity' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-background'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Projects Tab */}
        {activeTab === 'current' && (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-surface rounded-xl p-6 border border-surface-secondary hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{project.name}</h3>
                    <p className="text-sm text-text-secondary mb-3">{project.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-text-primary">Progress</span>
                    <span className="text-sm text-accent font-semibold">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-surface-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-accent to-brand-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-background text-text-secondary rounded text-xs border border-surface-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="space-y-2 text-xs text-text-secondary mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={12} />
                    <span>Last updated: {project.lastUpdate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={12} />
                    <span>Est. completion: {project.estimatedCompletion}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    className="flex-1"
                  >
                    View Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                  >
                    <Icon name="ExternalLink" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Learning Goals Tab */}
        {activeTab === 'learning' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {learningGoals.map((goal) => (
              <div
                key={goal.id}
                className="bg-surface rounded-xl p-6 border border-surface-secondary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{goal.skill}</h3>
                    <p className="text-sm text-text-secondary">{goal.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-accent">{goal.progress}%</div>
                    <div className="text-xs text-text-secondary">Complete</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-surface-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-success to-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>

                {/* Resources */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-text-primary mb-2">Learning Resources</h4>
                  <div className="space-y-1">
                    {goal.resources.map((resource, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="BookOpen" size={12} />
                        <span>{resource}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex justify-between items-center text-xs text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={12} />
                    <span>{goal.timeSpent} invested</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Target" size={12} />
                    <span>Next: {goal.nextMilestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent Activity Tab */}
        {activeTab === 'activity' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-xl border border-surface-secondary overflow-hidden">
              <div className="p-6 border-b border-surface-secondary">
                <h3 className="text-lg font-semibold text-text-primary">Recent GitHub Activity</h3>
              </div>
              <div className="divide-y divide-surface-secondary">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-6 hover:bg-background transition-colors duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-accent-50 rounded-full flex items-center justify-center">
                          <Icon name={getActivityIcon(activity.type)} size={16} className="text-accent" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-text-primary">{activity.message}</span>
                          {activity.status && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              activity.status === 'merged' ?'bg-success-50 text-success-700' :'bg-accent-50 text-accent-700'
                            }`}>
                              {activity.status}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-text-secondary">
                          <span className="font-mono">{activity.repo}</span>
                          <span>{activity.time}</span>
                          {activity.additions && (
                            <span className="text-success">+{activity.additions}</span>
                          )}
                          {activity.deletions && (
                            <span className="text-error">-{activity.deletions}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentlyBuilding;