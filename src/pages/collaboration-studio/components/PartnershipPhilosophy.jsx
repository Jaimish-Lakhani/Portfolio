import React from 'react';
import Icon from '../../../components/AppIcon';

const PartnershipPhilosophy = () => {
  const philosophyPrinciples = [
    {
      title: "Transparency First",
      icon: "Eye",
      description: "Open communication about progress, challenges, and decisions",
      examples: [
        "Daily progress updates with detailed status reports",
        "Honest assessment of project risks and mitigation strategies",
        "Clear documentation of all technical decisions and trade-offs",
        "Regular budget and timeline reviews with stakeholders"
      ],
      evidence: "98% client satisfaction rate over 5+ years",
      color: "accent"
    },
    {
      title: "Shared Accountability",
      icon: "Shield",
      description: "Taking ownership of outcomes and shared responsibility for success",
      examples: [
        "Joint responsibility for project milestones and deliverables",
        "Proactive identification and resolution of potential issues",
        "Collaborative problem-solving when challenges arise",
        "Commitment to long-term relationship success beyond project completion"
      ],
      evidence: "85% of clients engage for multiple projects",
      color: "conversion-accent"
    },
    {
      title: "Mutual Growth",
      icon: "TrendingUp",
      description: "Partnerships that create value and learning opportunities for all parties",
      examples: [
        "Knowledge transfer sessions to empower client teams",
        "Collaborative learning and skill development initiatives",
        "Strategic technology recommendations for business growth",
        "Long-term partnership planning and roadmap development"
      ],
      evidence: "Average 40% improvement in client team capabilities",
      color: "brand-primary"
    },
    {
      title: "Quality Excellence",
      icon: "Award",
      description: "Uncompromising commitment to delivering exceptional results",
      examples: [
        "Comprehensive testing and quality assurance processes",
        "Code reviews and best practice implementation",
        "Performance optimization and security considerations",
        "Continuous improvement and iterative enhancement"
      ],
      evidence: "99.9% uptime across all deployed applications",
      color: "brand-secondary"
    }
  ];

  const longTermRelationships = [
    {
      client: "TechFlow Solutions",
      duration: "3+ years",
      projects: 8,
      relationship: "Strategic Technology Partner",
      growth: "Helped scale from startup to $50M revenue",
      testimonial: "More than a developer - a true business partner who understands our vision and helps us achieve it.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=150&h=150&fit=crop&crop=face"
    },
    {
      client: "InnovateLabs",
      duration: "2+ years",
      projects: 5,
      relationship: "Lead Technical Consultant",
      growth: "Modernized legacy systems, improved efficiency by 60%",
      testimonial: "Consistent delivery, innovative solutions, and genuine care for our success. A partnership we value deeply.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?w=150&h=150&fit=crop&crop=face"
    },
    {
      client: "DataDriven Corp",
      duration: "4+ years",
      projects: 12,
      relationship: "Technical Advisory Board Member",
      growth: "Built entire engineering culture and processes",
      testimonial: "Transformed our technical capabilities and team culture. An invaluable long-term partner.",
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Partnership Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Core values and principles that guide every collaboration, creating lasting 
            partnerships built on trust, transparency, and mutual success.
          </p>
        </div>

        {/* Philosophy Principles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {philosophyPrinciples.map((principle, index) => (
            <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-${principle.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={principle.icon} size={24} color="white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {principle.title}
                    </h3>
                    <p className="text-text-secondary">
                      {principle.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-text-primary">How This Works in Practice:</h4>
                  <ul className="space-y-2">
                    {principle.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className={`text-${principle.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-text-secondary text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-${principle.color}/10 rounded-lg p-4`}>
                  <div className="flex items-center space-x-2">
                    <Icon name="BarChart" size={16} className={`text-${principle.color}`} />
                    <span className={`text-${principle.color} font-semibold text-sm`}>
                      Proven Results: {principle.evidence}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Long-term Relationships */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Long-term Partnership Success
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Evidence of partnership philosophy in action through sustained, 
              multi-year relationships that create lasting value.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {longTermRelationships.map((relationship, index) => (
              <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {relationship.client.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-conversion-accent rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={14} color="white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">
                        {relationship.client}
                      </h4>
                      <p className="text-text-secondary text-sm">
                        {relationship.relationship}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-secondary rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-accent">{relationship.duration}</div>
                      <div className="text-xs text-text-secondary">Partnership</div>
                    </div>
                    <div className="bg-surface-secondary rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-brand-primary">{relationship.projects}</div>
                      <div className="text-xs text-text-secondary">Projects</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-semibold text-text-secondary mb-1">Business Impact</div>
                      <div className="text-text-primary text-sm">{relationship.growth}</div>
                    </div>

                    <div className="bg-surface-secondary rounded-lg p-4">
                      <Icon name="Quote" size={16} className="text-accent/50 mb-2" />
                      <p className="text-text-primary text-sm italic">
                        "{relationship.testimonial}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-text-secondary">Active Partnership</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-conversion-accent rounded-full animate-pulse"></div>
                      <span className="text-xs text-conversion-accent font-semibold">Ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card p-8 lg:p-12 bg-gradient-to-br from-accent/5 to-brand-primary/5">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-primary rounded-full flex items-center justify-center">
                  <Icon name="Handshake" size={32} color="white" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Ready to Build a Lasting Partnership?
                </h3>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Let's discuss how these partnership principles can drive success 
                  for your next project and create long-term value for your organization.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>Start a Conversation</span>
                </button>
                <button
                  onClick={() => window.open('mailto:jaimish.lakhani@gmail.com?subject=Partnership Inquiry', '_blank')}
                  className="btn-secondary px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <Icon name="Mail" size={20} />
                  <span>Send Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPhilosophy;