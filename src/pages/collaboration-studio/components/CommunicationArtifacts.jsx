import React, { useState, useEffect, useMemo } from 'react';
import Icon from '../../../components/AppIcon';

const CommunicationArtifacts = () => {
  const [activeArtifact, setActiveArtifact] = useState('documentation');

  const artifacts = [
    {
      id: 'documentation',
      title: 'Project Documentation',
      icon: 'FileText',
      description: 'Technical specs, requirements, and project plans'
    },
    {
      id: 'reviews',
      title: 'Code Reviews',
      icon: 'GitPullRequest',
      description: 'Constructive feedback and knowledge sharing'
    },
    {
      id: 'presentations',
      title: 'Client Presentations',
      icon: 'Presentation',
      description: 'Progress updates and technical explanations'
    },
    {
      id: 'retrospectives',
      title: 'Team Retrospectives',
      icon: 'RotateCcw',
      description: 'Process improvements and team alignment'
    }
  ];

  const artifactContent = {
    documentation: {
      title: "Technical Documentation Examples",
      items: [
        {
          type: "API Documentation",
          audience: "Developers",
          example: `# User Authentication API\n\n## Overview\nSecure authentication system with JWT tokens and refresh mechanism.\n\n## Endpoints\n\n### POST /auth/login\nAuthenticates user credentials and returns access token.\n\n**Request Body:**\n\`\`\`json\n{\n  "email": "user@example.com",\n  "password": "securePassword123"\n}\n\`\`\`\n\n**Response:**\n\`\`\`json\n{\n  "success": true,\n  "token": "eyJhbGciOiJIUzI1NiIs...",\n  "refreshToken": "dGhpc0lzQVJlZnJlc2g...",\n  "expiresIn": 3600\n}\n\`\`\``,
          impact: "Reduced developer onboarding time by 60%"
        },
        {
          type: "Architecture Decision Record",
          audience: "Technical Team",
          example: `# ADR-001: Database Selection for User Management\n\n## Status\nAccepted\n\n## Context\nWe need to choose a database solution for our user management system that can handle:\n- 100k+ concurrent users\n- Complex user relationships\n- Real-time notifications\n- GDPR compliance requirements\n\n## Decision\nWe will use PostgreSQL with Redis for caching.\n\n## Consequences\n**Positive:**\n- ACID compliance for critical user data\n- Excellent performance with proper indexing\n- Strong ecosystem and community support\n\n**Negative:**\n- Higher operational complexity\n- Requires database administration expertise`,
          impact: "Prevented 3 months of technical debt"
        }
      ]
    },
    reviews: {
      title: "Code Review Examples",
      items: [
        {
          type: "Performance Optimization Review",
          audience: "Senior Developer",
          example: `## Code Review: User Dashboard Component\n\n### Summary\nGreat work on the dashboard implementation! The component structure is clean and the logic is well-organized. I have a few suggestions for performance optimization.\n\n### Feedback\n\n**🎯 Performance Improvements:**\n\`\`\`javascript\n// Current implementation\nconst UserDashboard = () => {\n  const [users, setUsers] = useState([]);\n  \n  useEffect(() => {\n    fetchUsers().then(setUsers);\n  }, []);\n  \n  return (\n    <div>\n      {users.map(user => <UserCard key={user.id} user={user} />)}\n    </div>\n  );\n};\n\n// Suggested optimization\nconst UserDashboard = () => {\n  const [users, setUsers] = useState([]);\n  \n  useEffect(() => {\n    fetchUsers().then(setUsers);\n  }, []);\n  \n  const memoizedUsers = useMemo(() => \n    users.map(user => <UserCard key={user.id} user={user} />), \n    [users]\n  );\n  \n  return <div>{memoizedUsers}</div>;\n};\n\`\`\`\n\n**✅ What's Working Well:**\n- Clean component structure\n- Proper error handling\n- Good variable naming\n\n**🔧 Suggestions:**\n- Consider implementing virtualization for large user lists\n- Add loading states for better UX\n- Extract user fetching logic to a custom hook`,
          impact: "Improved component render time by 40%"
        },
        {
          type: "Security Review",
          audience: "Junior Developer",
          example: `## Security Review: Authentication Module\n\n### Overview\nThanks for implementing the authentication system! The overall approach is solid. I've identified a few security considerations that we should address.\n\n### Critical Issues\n\n**🚨 Password Storage:**\n\`\`\`javascript\n// Current (INSECURE)\nconst user = {\n  email: email,\n  password: password // Plain text storage!\n};\n\n// Recommended (SECURE)\nconst bcrypt = require('bcrypt');\nconst saltRounds = 12;\n\nconst user = {\n  email: email,\n  password: await bcrypt.hash(password, saltRounds)\n};\n\`\`\`\n\n**🔒 JWT Token Handling:**\n- Store tokens in httpOnly cookies, not localStorage\n- Implement token rotation for enhanced security\n- Add proper token expiration handling\n\n### Learning Resources\n- [OWASP Authentication Cheat Sheet](https://example.com)\n- [JWT Security Best Practices](https://example.com)\n\nLet's pair program on the security fixes tomorrow!`,
          impact: "Prevented potential security vulnerabilities"
        }
      ]
    },
    presentations: {
      title: "Client Presentation Examples",
      items: [
        {
          type: "Executive Progress Update",
          audience: "C-Level Executives",
          example: `# Q2 Development Progress\n## Executive Summary\n\n### Key Achievements 🎯\n- **User Growth:** 150% increase in active users\n- **Performance:** 60% faster page load times\n- **Revenue Impact:** $2.3M additional revenue attributed to new features\n\n### Current Status\n✅ Phase 1: User Experience Overhaul (Complete)\n🔄 Phase 2: Mobile App Development (80% Complete)\n📋 Phase 3: Analytics Dashboard (Planning)\n\n### Business Impact\n- **Customer Satisfaction:** Up 35% (NPS Score: 72)\n- **Operational Efficiency:** 40% reduction in support tickets\n- **Market Position:** Gained 12% market share\n\n### Next Quarter Focus\n1. Mobile app launch (iOS & Android)\n2. Advanced analytics implementation\n3. API platform for third-party integrations\n\n### Investment Required\n- Additional mobile developer: $120K\n- Cloud infrastructure scaling: $50K/month\n- Third-party integrations: $80K`,
          impact: "Secured $500K additional budget approval"
        },
        {
          type: "Technical Architecture Review",
          audience: "Product Managers",
          example: `# System Architecture Overview\n## Making Complex Systems Simple\n\n### The Big Picture 🏗️\nThink of our system like a modern city:\n- **Frontend (User Interface)** = Storefronts and buildings\n- **API Gateway** = Traffic control system\n- **Microservices** = Specialized districts (shopping, residential, business)\n- **Database** = City records and infrastructure\n\n### Current Challenges & Solutions\n\n**Challenge:** System slowdowns during peak hours\n**Solution:** Load balancing (like adding more lanes to busy roads)\n**Timeline:** 2 weeks\n**Impact:** 3x better performance during peak usage\n\n**Challenge:** Data inconsistency across features\n**Solution:** Event-driven architecture (like a city-wide notification system)\n**Timeline:** 6 weeks\n**Impact:** Real-time data sync across all features\n\n### Technical Decisions Impact on Product\n- **Microservices Architecture** → Faster feature development\n- **Caching Strategy** → Better user experience\n- **API-First Design** → Easy third-party integrations`,
          impact: "Improved product team technical understanding by 80%"
        }
      ]
    },
    retrospectives: {
      title: "Team Retrospective Examples",
      items: [
        {
          type: "Sprint Retrospective",
          audience: "Development Team",
          example: `# Sprint 23 Retrospective\n## What Went Well 🎉\n\n### Team Collaboration\n- **Pair Programming Success:** Sarah & Mike's collaboration on the payment system resulted in zero bugs in production\n- **Knowledge Sharing:** Daily tech talks helped everyone learn React hooks\n- **Communication:** Slack threads kept discussions organized and searchable\n\n### Technical Achievements\n- **Performance:** Reduced API response time from 800ms to 200ms\n- **Code Quality:** Achieved 95% test coverage on new features\n- **Documentation:** All new APIs properly documented with examples\n\n## What Could Be Improved 🔧\n\n### Process Issues\n- **Meeting Overload:** Too many interruptions during deep work time\n- **Code Review Delays:** Average review time was 2 days (target: 24 hours)\n- **Deployment Process:** Manual steps caused 3 deployment delays\n\n### Technical Debt\n- **Legacy Code:** User authentication module needs refactoring\n- **Testing:** E2E tests are flaky and need stabilization\n- **Monitoring:** Need better error tracking and alerting\n\n## Action Items 📋\n\n**Immediate (Next Sprint):**\n1. Implement automated deployment pipeline (Owner: DevOps team)\n2. Establish "No Meeting Wednesdays" for focused work (Owner: Scrum Master)\n3. Set up code review SLA dashboard (Owner: Tech Lead)\n\n**Medium Term (Next Month):**\n1. Refactor authentication module (Owner: Security team)\n2. Stabilize E2E test suite (Owner: QA team)\n3. Implement comprehensive error monitoring (Owner: Platform team)`,
          impact: "Improved team velocity by 25% in following sprints"
        },
        {
          type: "Project Post-Mortem",
          audience: "Cross-functional Team",
          example: `# E-commerce Platform Launch Post-Mortem\n## Project Overview\n- **Duration:** 8 months\n- **Team Size:** 12 members (Engineering, Design, Product, QA)\n- **Budget:** $850K (Under budget by $150K)\n- **Launch Date:** On schedule\n\n## Success Metrics 📊\n- **Performance:** 99.9% uptime in first month\n- **User Adoption:** 40% higher than projected\n- **Revenue:** $1.2M in first quarter\n- **Customer Satisfaction:** 4.8/5 rating\n\n## What Made This Project Successful ✅\n\n### Communication Excellence\n- **Weekly All-Hands:** Kept everyone aligned on priorities\n- **Slack Channels:** Organized by feature, not team\n- **Documentation:** Living specs updated in real-time\n- **Client Updates:** Bi-weekly demos built trust and gathered feedback\n\n### Technical Decisions\n- **Microservices Architecture:** Enabled parallel development\n- **API-First Approach:** Frontend and backend teams worked independently\n- **Automated Testing:** Caught 95% of bugs before production\n- **Performance Monitoring:** Proactive issue detection\n\n## Lessons Learned 📚\n\n### What We'd Do Differently\n1. **Earlier Performance Testing:** Load testing should start in week 2, not week 20\n2. **More User Research:** Additional user interviews would have prevented 2 major redesigns\n3. **Better Scope Management:** Feature creep added 6 weeks to timeline\n\n### Best Practices to Replicate\n1. **Daily Standups Across Teams:** Not just within teams\n2. **Shared Definition of Done:** Prevented scope confusion\n3. **Regular Client Demos:** Built confidence and caught issues early`,
          impact: "Framework adopted for all future major projects"
        }
      ]
    }
  };

  const activeContent = artifactContent[activeArtifact];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Communication Artifacts
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real examples of how effective communication drives project success through 
            clear documentation, constructive feedback, and transparent reporting.
          </p>
        </div>

        {/* Artifact Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {artifacts.map((artifact) => (
            <button
              key={artifact.id}
              onClick={() => setActiveArtifact(artifact.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeArtifact === artifact.id
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-background text-text-secondary hover:bg-background-secondary hover:text-text-primary'
              }`}
            >
              <Icon 
                name={artifact.icon} 
                size={20} 
                className={activeArtifact === artifact.id ? 'text-white' : 'text-current'}
              />
              <div className="text-left">
                <div className="font-semibold">{artifact.title}</div>
                <div className={`text-sm ${activeArtifact === artifact.id ? 'text-white/80' : 'text-text-tertiary'}`}>
                  {artifact.description}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Artifact Content */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            {activeContent.title}
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {activeContent.items.map((item, index) => (
              <div key={index} className="card p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-2">
                        {item.type}
                      </h4>
                      <p className="text-text-secondary">
                        Target Audience: {item.audience}
                      </p>
                    </div>
                    <div className="bg-conversion-accent/10 text-conversion-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {item.impact}
                    </div>
                  </div>

                  <div className="bg-primary text-primary-foreground rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm font-mono whitespace-pre-wrap">
                      {item.example}
                    </pre>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Target" size={16} className="text-accent" />
                    <span>Impact: {item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationArtifacts;