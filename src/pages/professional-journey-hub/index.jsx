import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import TimelineNode from './components/TimelineNode';
import TimelineFilter from './components/TimelineFilter';
import PhilosophySection from './components/PhilosophySection';
import WorkingStyleShowcase from './components/WorkingStyleShowcase';
import GrowthMetrics from './components/GrowthMetrics';

const ProfessionalJourneyHub = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('timeline');
  const [activeNode, setActiveNode] = useState(null);
  const [filteredNodes, setFilteredNodes] = useState([]);

  const journeyData = [
    {
      id: 1,
      type: 'career',
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      period: '2023 - Present',
      icon: 'Briefcase',
      isHighlight: true,
      summary: `Leading development of enterprise-scale applications serving 500K+ users. Architecting microservices infrastructure and mentoring a team of 8 developers while driving technical excellence across multiple product lines.`,
      achievements: [
        'Reduced application load time by 65% through performance optimization',
        'Led migration to microservices architecture serving 500K+ daily users',
        'Mentored 8 junior developers, with 6 receiving promotions',
        'Established CI/CD pipeline reducing deployment time from 2 hours to 15 minutes',
        'Implemented automated testing suite achieving 95% code coverage'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'GraphQL', 'Jest'],
      lessons: `This role taught me the importance of balancing technical excellence with business needs. Leading a diverse team showed me that the best solutions come from collaborative problem-solving and that mentoring others accelerates everyone's growth.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',caption: 'Team collaboration session'
        },
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',caption: 'Architecture planning workshop'
        }
      ]
    },
    {
      id: 2,
      type: 'career',title: 'Full Stack Developer',company: 'InnovateLab',period: '2021 - 2023',icon: 'Code',
      summary: `Developed and maintained multiple client applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions on time and within budget.`,
      achievements: [
        'Built 12 client applications from concept to production','Improved team productivity by 40% through automation tools','Reduced bug reports by 60% through comprehensive testing strategies','Led adoption of modern React patterns and TypeScript','Contributed to open-source projects with 10K+ GitHub stars'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'AWS', 'Git', 'Webpack', 'Sass'],
      lessons: `Working with diverse clients taught me the importance of clear communication and adaptable solutions. I learned that understanding the business context is as important as technical implementation.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',caption: 'Client presentation meeting'
        }
      ]
    },
    {
      id: 3,
      type: 'career',title: 'Frontend Developer',company: 'StartupVenture',period: '2019 - 2021',icon: 'Monitor',
      summary: `Focused on creating responsive and intuitive user interfaces for web applications. Worked closely with designers and backend developers to implement pixel-perfect designs with optimal performance.`,
      achievements: [
        'Developed responsive interfaces for 8 major product features','Improved user engagement by 45% through UX optimizations','Reduced page load times by 50% through code splitting and optimization','Established component library used across 5 different projects','Mentored 3 junior developers in modern frontend practices'
      ],
      technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Gulp', 'Photoshop', 'Figma'],
      lessons: `This role emphasized the importance of user-centered design and performance optimization. I learned that great frontend development requires both technical skills and empathy for user experience.`
    },
    {
      id: 4,
      type: 'education',title: 'AWS Solutions Architect Certification',company: 'Amazon Web Services',period: '2023',icon: 'Award',
      summary: `Achieved AWS Solutions Architect Professional certification, demonstrating expertise in designing distributed systems and cloud architecture patterns.`,
      achievements: [
        'Mastered cloud architecture design patterns','Learned advanced networking and security concepts','Gained expertise in cost optimization strategies','Understood compliance and governance frameworks'
      ],
      technologies: ['AWS', 'CloudFormation', 'Lambda', 'EC2', 'S3', 'RDS', 'VPC', 'IAM', 'CloudWatch'],
      lessons: `Cloud architecture requires thinking about scalability, reliability, and cost from the beginning. This certification deepened my understanding of infrastructure as code and DevOps practices.`
    },
    {
      id: 5,
      type: 'projects',title: 'E-commerce Platform Redesign',company: 'RetailTech Corp',period: '2022',icon: 'ShoppingCart',
      isHighlight: true,
      summary: `Led complete redesign of e-commerce platform serving 100K+ monthly users. Implemented modern architecture patterns and improved conversion rates by 35%.`,
      achievements: [
        'Increased conversion rate from 2.1% to 3.8%','Reduced cart abandonment by 28%','Improved mobile performance score from 45 to 92','Implemented real-time inventory management','Added advanced search and filtering capabilities'
      ],
      technologies: ['React', 'Next.js', 'Stripe', 'Elasticsearch', 'Redis', 'PostgreSQL', 'Docker', 'Vercel'],
      lessons: `E-commerce projects taught me the critical importance of performance and user experience. Every millisecond matters when it comes to conversion rates, and technical decisions directly impact business outcomes.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',caption: 'Mobile-first design approach'
        },
        {
          url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',caption: 'Performance optimization results'
        }
      ]
    },
    {
      id: 6,
      type: 'skills',title: 'React Ecosystem Mastery',company: 'Self-Directed Learning',period: '2020 - 2024',icon: 'TrendingUp',
      summary: `Deep dive into React ecosystem including advanced patterns, state management, testing, and performance optimization. Became proficient in modern React development practices.`,
      achievements: [
        'Mastered React Hooks and Context API patterns','Implemented complex state management with Redux Toolkit','Achieved 95%+ test coverage using Jest and React Testing Library','Optimized React applications for production performance','Contributed to React community through blog posts and talks'
      ],
      technologies: ['React', 'Redux', 'Context API', 'React Router', 'Jest', 'React Testing Library', 'Storybook', 'Webpack'],
      lessons: `React's ecosystem evolution taught me the importance of staying current with best practices while maintaining backward compatibility. The community-driven nature of React development emphasizes the value of knowledge sharing.`
    },
    {
      id: 7,
      type: 'education',
      title: 'Computer Science Degree',
      company: 'State University',
      period: '2015 - 2019',
      icon: 'GraduationCap',
      summary: `Bachelor of Science in Computer Science with focus on software engineering, algorithms, and data structures. Graduated Magna Cum Laude with 3.8 GPA.`,
      achievements: [
        'Graduated Magna Cum Laude with 3.8 GPA',
        'Led senior capstone project team of 6 students',
        'Published research paper on machine learning applications',
        'Served as teaching assistant for Data Structures course',
        'Won university hackathon with innovative mobile app solution'
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Linux', 'Git', 'Machine Learning', 'Data Structures', 'Algorithms'],
      lessons: `University provided the theoretical foundation that supports all my practical work. Understanding algorithms and data structures deeply has been invaluable in making informed technical decisions throughout my career.`
    }
  ];

  useEffect(() => {
    const filterNodes = () => {
      if (activeFilter === 'all') {
        setFilteredNodes(journeyData);
      } else {
        setFilteredNodes(journeyData.filter(node => node.type === activeFilter));
      }
    };

    filterNodes();
  }, [activeFilter]);

  const handleNodeClick = (nodeId) => {
    setActiveNode(nodeId);
  };

  const renderTimelineView = () => (
    <div className="relative max-w-6xl mx-auto">
      {filteredNodes.map((node, index) => (
        <TimelineNode
          key={node.id}
          node={node}
          isLeft={index % 2 === 0}
          isActive={activeNode === node.id}
          onClick={handleNodeClick}
        />
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {filteredNodes.map((node) => (
        <div key={node.id} className="card p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
              <Icon name={node.icon} size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary text-sm">{node.title}</h3>
              <p className="text-xs text-accent">{node.company}</p>
            </div>
          </div>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            {node.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {node.technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCompactView = () => (
    <div className="max-w-4xl mx-auto space-y-4">
      {filteredNodes.map((node) => (
        <div key={node.id} className="card p-4 flex items-center space-x-4 hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name={node.icon} size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-text-primary">{node.title}</h3>
              <span className="text-sm text-accent font-medium">{node.period}</span>
            </div>
            <p className="text-sm text-text-secondary">{node.company}</p>
          </div>
          <div className="flex space-x-2">
            {node.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (viewMode) {
      case 'grid':
        return renderGridView();
      case 'compact':
        return renderCompactView();
      default:
        return renderTimelineView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
        <Helmet>
          <title>Professional Journey Hub - Jaimish S. Lakhani Portfolio</title>
          <meta name="description" content="Explore my professional development journey, career milestones, technical growth, and working philosophy through an interactive timeline visualization." />
          <meta name="keywords" content="professional journey, career timeline, technical growth, developer experience, mentorship, leadership" />
        </Helmet>

        <Header />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-accent-50 rounded-full mb-6">
              <Icon name="MapPin" size={16} className="mr-2 text-accent" />
              <span className="text-sm font-medium text-accent">Professional Journey</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
              My Development Journey
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              An interactive exploration of my career evolution, technical growth, and the experiences 
              that shaped my approach to software development and team leadership.
            </p>
          </div>

          {/* Timeline Filter */}
          <TimelineFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />

          {/* Journey Timeline */}
          <div className="mb-16">
            {renderContent()}
          </div>

          {/* Philosophy Section */}
          <PhilosophySection />

          {/* Working Style Showcase */}
          <WorkingStyleShowcase />

          {/* Growth Metrics */}
          <GrowthMetrics />

          {/* Call to Action */}
          <div className="text-center bg-brand-primary rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              My journey continues with each new project and collaboration. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/collaboration-studio'}
                className="px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start a Conversation
              </button>
              <button 
                onClick={() => window.location.href = '/project-showcase-galaxy'}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-accent transition-all duration-300 flex items-center justify-center"
              >
                <Icon name="Folder" size={20} className="mr-2" />
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessionalJourneyHub;