import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CollaborationContexts = () => {
  const [activeContext, setActiveContext] = useState('client');

  const contexts = [
    {
      id: 'client',
      title: 'Client Projects',
      icon: 'Briefcase',
      description: 'Direct client engagement and project delivery',
      color: 'accent'
    },
    {
      id: 'team',
      title: 'Team Leadership',
      icon: 'Users',
      description: 'Leading development teams and cross-functional collaboration',
      color: 'brand-primary'
    },
    {
      id: 'mentoring',
      title: 'Mentoring',
      icon: 'GraduationCap',
      description: 'Guiding junior developers and knowledge sharing',
      color: 'conversion-accent'
    },
    {
      id: 'partnership',
      title: 'Partnerships',
      icon: 'Handshake',
      description: 'Strategic partnerships and vendor relationships',
      color: 'brand-secondary'
    }
  ];

  const contextContent = {
    client: {
      examples: [
        {
          title: "E-commerce Platform Redesign",
          client: "TechCorp Solutions",
          duration: "6 months",
          team: "8 members",
          outcome: "40% increase in conversion rate",
          highlights: [
            "Weekly stakeholder meetings with C-level executives",
            "Agile methodology with 2-week sprints",
            "Real-time progress dashboard for transparency",
            "Post-launch support and optimization"
          ]
        },
        {
          title: "Mobile Banking App",
          client: "FinanceFirst Bank",
          duration: "8 months",
          team: "12 members",
          outcome: "1M+ downloads in first quarter",
          highlights: [
            "Security-first development approach",
            "Compliance with banking regulations",
            "User testing with 500+ beta users",
            "24/7 monitoring and support setup"
          ]
        }
      ]
    },
    team: {
      examples: [
        {
          title: "Development Team Restructure",
          scope: "15-person engineering team",
          duration: "3 months",
          impact: "50% faster delivery cycles",
          outcome: "Improved team satisfaction by 35%",
          highlights: [
            "Implemented code review best practices",
            "Established mentorship programs",
            "Created technical documentation standards",
            "Introduced pair programming sessions"
          ]
        },
        {
          title: "Cross-functional Collaboration",
          scope: "Engineering, Design, Product teams",
          duration: "Ongoing",
          impact: "Reduced miscommunication by 60%",
          outcome: "Faster feature delivery",
          highlights: [
            "Daily standups with all stakeholders",
            "Shared project management tools",
            "Regular retrospectives and improvements",
            "Clear communication protocols"
          ]
        }
      ]
    },
    mentoring: {
      examples: [
        {
          title: "Junior Developer Program",
          mentees: "8 developers",
          duration: "12 months",
          progression: "6 promoted to mid-level",
          outcome: "100% retention rate",
          highlights: [
            "Personalized learning paths for each mentee",
            "Weekly one-on-one coaching sessions",
            "Code review and feedback processes",
            "Career development planning"
          ]
        },
        {
          title: "Bootcamp Graduate Integration",
          mentees: "12 new graduates",
          duration: "6 months",
          success: "10 secured full-time positions",
          outcome: "Average 40% salary increase",
          highlights: [
            "Real-world project assignments",
            "Industry best practices training",
            "Interview preparation and mock sessions",
            "Professional network introductions"
          ]
        }
      ]
    },
    partnership: {
      examples: [
        {
          title: "Technology Vendor Partnership",
          partner: "CloudTech Solutions",
          scope: "Infrastructure modernization",
          duration: "18 months",
          outcome: "60% cost reduction",
          highlights: [
            "Joint technical architecture planning",
            "Shared responsibility model",
            "Regular performance reviews",
            "Continuous optimization processes"
          ]
        },
        {
          title: "Strategic Alliance",
          partner: "DesignStudio Pro",
          scope: "Full-stack development services",
          duration: "2 years",
          outcome: "25+ successful joint projects",
          highlights: [
            "Complementary skill set integration",
            "Shared project management processes",
            "Joint client presentations",
            "Revenue sharing agreements"
          ]
        }
      ]
    }
  };

  const activeContent = contextContent[activeContext];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Collaboration Contexts
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore different collaboration scenarios and see how effective communication 
            and partnership drive exceptional results across various contexts.
          </p>
        </div>

        {/* Context Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contexts.map((context) => (
            <button
              key={context.id}
              onClick={() => setActiveContext(context.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeContext === context.id
                  ? `bg-${context.color} text-white shadow-lg`
                  : 'bg-surface text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
              }`}
            >
              <Icon 
                name={context.icon} 
                size={20} 
                className={activeContext === context.id ? 'text-white' : 'text-current'}
              />
              <div className="text-left">
                <div className="font-semibold">{context.title}</div>
                <div className={`text-sm ${activeContext === context.id ? 'text-white/80' : 'text-text-tertiary'}`}>
                  {context.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Context Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {activeContent.examples.map((example, index) => (
            <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {example.title}
                    </h3>
                    {example.client && (
                      <p className="text-text-secondary">Client: {example.client}</p>
                    )}
                    {example.scope && (
                      <p className="text-text-secondary">Scope: {example.scope}</p>
                    )}
                    {example.partner && (
                      <p className="text-text-secondary">Partner: {example.partner}</p>
                    )}
                  </div>
                  <div className="text-right text-sm text-text-secondary">
                    <div>Duration: {example.duration}</div>
                    {example.team && <div>Team: {example.team}</div>}
                  </div>
                </div>

                <div className="bg-surface-secondary rounded-lg p-4">
                  <div className="text-sm font-semibold text-text-secondary mb-2">Key Outcome</div>
                  <div className="text-text-primary font-semibold">{example.outcome}</div>
                  {example.impact && (
                    <div className="text-conversion-accent font-medium mt-1">{example.impact}</div>
                  )}
                </div>

                <div>
                  <div className="text-sm font-semibold text-text-secondary mb-3">Collaboration Highlights</div>
                  <ul className="space-y-2">
                    {example.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-conversion-accent mt-0.5 flex-shrink-0" />
                        <span className="text-text-primary text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationContexts;