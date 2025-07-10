import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WorkingStyleShowcase = () => {
  const [activeStyle, setActiveStyle] = useState('communication');

  const workingStyles = {
    communication: {
      title: 'Communication & Documentation',
      icon: 'MessageSquare',
      description: 'Clear, proactive communication that keeps everyone aligned and informed',
      examples: [
        {
          type: 'Daily Standups',
          approach: 'Structured updates focusing on blockers, progress, and next steps',
          tools: ['Slack', 'Jira', 'Confluence'],
          sample: `Yesterday: Completed user authentication API endpoints\nToday: Working on password reset flow, may need design clarification\nBlockers: Waiting for security review on token expiration strategy`
        },
        {
          type: 'Technical Documentation',
          approach: 'Living documentation that evolves with the codebase',
          tools: ['GitBook', 'Notion', 'README files'],
          sample: `# Authentication Service\n\n## Quick Start\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\n\n## Architecture Decisions\n- JWT tokens for stateless authentication\n- Redis for session management\n- Rate limiting to prevent brute force attacks`
        },
        {
          type: 'Code Reviews',
          approach: 'Constructive feedback focused on learning and improvement',
          tools: ['GitHub', 'GitLab', 'Bitbucket'],
          sample: `Great work on the error handling! Consider extracting the validation logic into a separate utility function for reusability. Also, we might want to add a test case for the edge case where the user ID is null.`
        }
      ]
    },
    collaboration: {
      title: 'Team Collaboration',
      icon: 'Users',
      description: 'Building consensus through inclusive decision-making and knowledge sharing',
      examples: [
        {
          type: 'Architecture Discussions',
          approach: 'Facilitate technical decisions through collaborative design sessions',
          tools: ['Miro', 'Figma', 'Lucidchart'],
          sample: `Led weekly architecture reviews where team members present different approaches to complex problems. We use decision matrices to evaluate options based on maintainability, performance, and team expertise.`
        },
        {
          type: 'Pair Programming',
          approach: 'Knowledge transfer through collaborative coding sessions',
          tools: ['VS Code Live Share', 'Tuple', 'Screen sharing'],
          sample: `Regular pairing sessions with junior developers, focusing on problem-solving techniques rather than just syntax. We alternate between driver and navigator roles to ensure active participation.`
        },
        {
          type: 'Cross-team Integration',
          approach: 'Bridge technical and business requirements through clear communication',
          tools: ['Slack channels', 'Regular sync meetings', 'Shared documentation'],
          sample: `Created shared API documentation and hosted integration workshops for dependent teams. Established feedback channels for continuous improvement of developer experience.`
        }
      ]
    },
    problemSolving: {
      title: 'Problem-Solving Process',
      icon: 'Target',
      description: 'Systematic approach to breaking down complex challenges into manageable solutions',
      examples: [
        {
          type: 'Issue Investigation',
          approach: 'Methodical debugging using data-driven analysis',
          tools: ['Application logs', 'Monitoring dashboards', 'Profiling tools'],
          sample: `1. Reproduce the issue in a controlled environment\n2. Gather relevant logs and metrics\n3. Form hypotheses based on evidence\n4. Test each hypothesis systematically\n5. Document findings and solution`
        },
        {
          type: 'Feature Planning',
          approach: 'Break down complex features into deliverable increments',
          tools: ['User story mapping', 'Technical spike investigations', 'Prototyping'],
          sample: `For the new dashboard feature:\n- Week 1: Data layer and API endpoints\n- Week 2: Basic UI components and layout\n- Week 3: Interactive features and real-time updates\n- Week 4: Performance optimization and testing`
        },
        {
          type: 'Technical Debt Management',
          approach: 'Balance new feature development with system maintenance',
          tools: ['Code quality metrics', 'Technical debt tracking', 'Refactoring sprints'],
          sample: `Maintain a technical debt backlog with impact/effort scoring. Dedicate 20% of each sprint to addressing high-impact technical debt items. Track metrics like code coverage and cyclomatic complexity.`
        }
      ]
    },
    mentorship: {
      title: 'Mentorship & Knowledge Sharing',
      icon: 'GraduationCap',
      description: 'Empowering team members through guidance, feedback, and growth opportunities',
      examples: [
        {
          type: 'Code Mentoring',
          approach: 'Guide junior developers through hands-on learning experiences',
          tools: ['Code reviews', 'Pair programming', 'Technical discussions'],
          sample: `Weekly one-on-ones focusing on career goals and technical growth. Provide challenging but achievable tasks with clear success criteria. Celebrate learning milestones and encourage experimentation.`
        },
        {
          type: 'Knowledge Sharing Sessions',
          approach: 'Regular tech talks and learning sessions for the team',
          tools: ['Internal presentations', 'Workshop facilitation', 'Documentation'],
          sample: `Monthly "Tech Talk Fridays" where team members present new technologies, share project learnings, or discuss industry trends. Created a shared knowledge base of common patterns and solutions.`
        },
        {
          type: 'Career Development',
          approach: 'Support team members in achieving their professional goals',
          tools: ['Goal setting', 'Skill assessment', 'Growth planning'],
          sample: `Help team members identify skill gaps and create learning plans. Provide opportunities to lead projects and present to stakeholders. Connect them with relevant conferences and learning resources.`
        }
      ]
    }
  };

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Product Manager',
      company: 'TechFlow Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: `Working with Alex transformed how our team approaches technical challenges. His ability to translate complex technical concepts into clear business value helped us make better product decisions. The documentation and communication standards he established are still used across our entire engineering organization.`,
      highlight: 'Communication & Business Alignment'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Junior Full Stack Developer',
      company: 'InnovateLab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: `Alex's mentorship was instrumental in my growth as a developer. He didn't just show me how to code - he taught me how to think about problems, design solutions, and communicate effectively with the team. The pair programming sessions and code reviews helped me develop confidence and best practices that I use every day.`,
      highlight: 'Mentorship & Skill Development'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Engineering Director',
      company: 'DataDriven Corp',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      quote: `Alex consistently delivered high-quality solutions while fostering a collaborative team environment. His systematic approach to problem-solving and commitment to knowledge sharing elevated the entire team's performance. He's the kind of engineer who makes everyone around him better.`,
      highlight: 'Technical Leadership & Team Building'
    }
  ];

  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Working Style & Collaboration
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
          How I approach teamwork, communication, and knowledge sharing to create 
          productive and inclusive development environments.
        </p>
      </div>

      {/* Style Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(workingStyles).map(([key, style]) => (
          <button
            key={key}
            onClick={() => setActiveStyle(key)}
            className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
              activeStyle === key
                ? 'bg-accent text-white shadow-lg'
                : 'bg-surface text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
            }`}
          >
            <Icon 
              name={style.icon} 
              size={18} 
              className="mr-2"
            />
            <span className="font-medium text-sm">
              {style.title}
            </span>
          </button>
        ))}
      </div>

      {/* Active Style Content */}
      <div className="card p-8 mb-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
            <Icon 
              name={workingStyles[activeStyle].icon} 
              size={24} 
              className="text-white"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">
              {workingStyles[activeStyle].title}
            </h3>
            <p className="text-text-secondary">
              {workingStyles[activeStyle].description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {workingStyles[activeStyle].examples.map((example, index) => (
            <div key={index} className="bg-surface rounded-lg p-6">
              <h4 className="font-semibold text-text-primary mb-3">
                {example.type}
              </h4>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {example.approach}
              </p>
              
              <div className="mb-4">
                <h5 className="text-xs font-medium text-text-primary mb-2">Tools Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {example.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-2 py-1 bg-accent-50 text-accent text-xs rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-background rounded-lg p-4">
                <h5 className="text-xs font-medium text-text-primary mb-2">Example:</h5>
                <pre className="text-xs text-text-secondary whitespace-pre-wrap font-mono leading-relaxed">
                  {example.sample}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-r from-surface to-surface-secondary rounded-xl p-8">
        <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
          What Colleagues Say
        </h3>
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-accent font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-sm text-text-secondary leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <Icon name="Star" size={14} className="text-warning mr-1" />
                <span className="text-xs font-medium text-warning">
                  {testimonial.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingStyleShowcase;