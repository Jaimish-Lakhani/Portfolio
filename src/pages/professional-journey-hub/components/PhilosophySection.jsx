import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const PhilosophySection = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      id: 'problem-solving',
      title: 'Problem-First Approach',
      icon: 'Target',
      description: `I believe in understanding the problem deeply before writing a single line of code. Technology should serve the solution, not drive it.`,
      principles: [
        'Ask "why" before "how" - understanding the root cause leads to better solutions',
        'Prototype quickly to validate assumptions and gather feedback early',
        'Consider the human impact of every technical decision',
        'Measure success by problem resolution, not lines of code written'
      ],
      example: {
        scenario: 'E-commerce Performance Crisis',
        challenge: 'Customer complaints about slow checkout process affecting conversion rates',
        approach: `Instead of immediately optimizing code, I spent time analyzing user behavior data and discovered the real issue was a complex multi-step form causing abandonment. The solution was UX redesign with technical optimization, not just performance tuning.`,
        outcome: '40% improvement in checkout completion rates'
      }
    },
    {
      id: 'code-quality',
      title: 'Sustainable Code Craftsmanship',
      icon: 'Code2',
      description: `Quality code is not just about working software - it's about creating systems that teams can understand, maintain, and evolve confidently.`,
      principles: [
        'Write code that tells a story - clear naming and structure over clever tricks','Test-driven development ensures reliability and design clarity','Refactor continuously to prevent technical debt accumulation','Document decisions, not just implementations'
      ],
      example: {
        scenario: 'Legacy System Modernization',challenge: 'Inherited a critical system with no tests and unclear business logic',
        approach: `Implemented a strangler fig pattern, gradually replacing components while maintaining full backward compatibility. Each new component included comprehensive tests and clear documentation of business rules.`,
        outcome: '90% reduction in production bugs and 60% faster feature delivery'
      }
    },
    {
      id: 'collaboration',title: 'Human-Centered Development',icon: 'Users',
      description: `The best technical solutions emerge from diverse perspectives and clear communication. Code is written for humans first, computers second.`,
      principles: [
        'Facilitate understanding through clear communication and documentation','Embrace diverse viewpoints to identify blind spots and edge cases','Mentor others by sharing knowledge, not just solutions','Build consensus through demonstration and collaborative problem-solving'
      ],
      example: {
        scenario: 'Cross-Team API Integration',challenge: 'Multiple teams needed to integrate with a new service with different technical backgrounds',
        approach: `Created interactive documentation with live examples, hosted workshops for different skill levels, and established a feedback loop for continuous improvement of the integration experience.`,
        outcome: 'Reduced integration time from weeks to days across 8 different teams'
      }
    },
    {
      id: 'growth',title: 'Continuous Evolution Mindset',icon: 'TrendingUp',
      description: `Technology evolves rapidly, but the fundamentals of good engineering remain constant. I focus on principles that transcend specific tools.`,
      principles: [
        'Learn technologies by building real projects, not just tutorials','Understand the "why" behind new tools and frameworks','Share knowledge through teaching and open-source contributions','Stay curious about adjacent fields that influence software development'
      ],
      example: {
        scenario: 'Team Skill Development Initiative',challenge: 'Team needed to adopt modern React patterns while maintaining productivity',approach: `Organized weekly "learning labs" where team members taught each other new concepts through small projects. Created a shared knowledge base of patterns and anti-patterns discovered during the transition.`,outcome: 'Entire team proficient in modern React within 3 months with zero productivity loss'
      }
    }
  ];

  return (
    <div className="bg-gradient-to-br from-background via-surface to-background-secondary rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Development Philosophy
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
          My approach to software development is grounded in principles that prioritize human needs, 
          sustainable practices, and continuous learning. These philosophies guide every technical decision I make.
        </p>
      </div>

      {/* Philosophy Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {philosophies.map((philosophy, index) => (
          <button
            key={philosophy.id}
            onClick={() => setActivePhilosophy(index)}
            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
              activePhilosophy === index
                ? 'bg-accent text-white shadow-lg scale-105'
                : 'bg-background text-text-secondary hover:bg-surface hover:text-text-primary'
            }`}
          >
            <Icon 
              name={philosophy.icon} 
              size={18} 
              className="mr-2"
            />
            <span className="font-medium text-sm">
              {philosophy.title}
            </span>
          </button>
        ))}
      </div>

      {/* Active Philosophy Content */}
      <div className="bg-background rounded-xl p-8 shadow-md">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Philosophy Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                <Icon 
                  name={philosophies[activePhilosophy].icon} 
                  size={24} 
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                {philosophies[activePhilosophy].title}
              </h3>
            </div>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              {philosophies[activePhilosophy].description}
            </p>

            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Core Principles
            </h4>
            <ul className="space-y-3">
              {philosophies[activePhilosophy].principles.map((principle, index) => (
                <li key={index} className="flex items-start">
                  <Icon 
                    name="CheckCircle" 
                    size={16} 
                    className="mr-3 mt-1 text-conversion-accent flex-shrink-0"
                  />
                  <span className="text-text-secondary text-sm leading-relaxed">
                    {principle}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real-World Example */}
          <div className="bg-surface rounded-lg p-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Lightbulb" size={20} className="mr-2 text-warning" />
              Real-World Application
            </h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-text-primary mb-2">Scenario</h5>
                <p className="text-sm text-text-secondary">
                  {philosophies[activePhilosophy].example.scenario}
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-text-primary mb-2">Challenge</h5>
                <p className="text-sm text-text-secondary">
                  {philosophies[activePhilosophy].example.challenge}
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-text-primary mb-2">My Approach</h5>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {philosophies[activePhilosophy].example.approach}
                </p>
              </div>
              
              <div className="bg-conversion-accent/10 rounded-lg p-4">
                <h5 className="font-medium text-conversion-accent mb-2 flex items-center">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  Outcome
                </h5>
                <p className="text-sm text-text-primary font-medium">
                  {philosophies[activePhilosophy].example.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;