import React, { useState } from 'react';
import { motion } from 'motion/react';
import Icon from '../../../components/AppIcon';

const PartnershipPhilosophy = () => {
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);
  
  // Function to open Gmail directly with email pre-filled
  const openGmailCompose = (subject = 'Partnership Inquiry') => {
    const email = 'jaimish.work@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
  };

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

  return (
    <section id="partnership-philosophy" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Partnership Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Core values and principles that guide every collaboration, creating lasting 
            partnerships built on trust, transparency, and mutual success.
          </p>
        </motion.div>

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
      </div>
    </section>
  );
};

export default PartnershipPhilosophy;