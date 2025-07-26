import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [activeNode, setActiveNode] = useState(null);
  const [filteredNodes, setFilteredNodes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [viewMode, setViewMode] = useState('timeline');
  const observerRef = useRef();
  const elementsRef = useRef([]);

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
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'GraphQL', 'Jest'],
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
        'Built 12 microservices systems from concept to production','Improved team productivity by 40% through automation tools','Reduced bug reports by 60% through comprehensive testing strategies','Led adoption of modern backend patterns and TypeScript','Contributed to open-source projects with 10K+ GitHub stars'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'PostgreSQL', 'Microservices'],
      lessons: `Working with diverse clients taught me the importance of clear communication and adaptable solutions. I learned that understanding the business context is as important as technical implementation.`,
      images: [
        {
          url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',caption: 'Client presentation meeting'
        }
      ]
    },
    {
      id: 3,
      type: 'career',
      title: 'Backend Developer',
      company: 'StartupVenture',
      period: '2019 - 2021',
      icon: 'Server',
      summary: `Focused on building robust APIs and scalable backend systems. Worked closely with frontend teams and DevOps to implement high-performance server-side solutions with optimal database design.`,
      achievements: [
        'Developed RESTful APIs for 8 major product features',
        'Improved API response times by 75% through caching strategies',
        'Reduced server costs by 40% through optimization and efficient resource usage',
        'Established backend architecture patterns used across 5 different microservices',
        'Mentored 3 junior developers in backend best practices'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'],
      lessons: `This role emphasized the importance of scalable architecture and database optimization. I learned that great backend development requires both technical expertise and understanding of business requirements.`
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
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
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
      type: 'skills',
      title: 'Backend Systems & Microservices Mastery',
      company: 'Self-Directed Learning',
      period: '2020 - 2024',
      icon: 'TrendingUp',
      summary: `Deep dive into backend development, microservices architecture, database optimization, and cloud infrastructure. Became proficient in building scalable, high-performance distributed systems.`,
      achievements: [
        'Mastered Node.js, Express.js, and microservices patterns',
        'Implemented complex distributed systems with MongoDB and Redis',
        'Achieved 99.9% uptime with auto-scaling AWS infrastructure',
        'Optimized database queries reducing response times by 85%',
        'Contributed to open-source projects with 15K+ GitHub stars'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
      lessons: `Backend development taught me the importance of system design thinking and performance optimization. Building distributed systems requires careful consideration of data consistency, fault tolerance, and monitoring.`
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

  // Animation sequence on component mount
  useEffect(() => {
    const animationSequence = async () => {
      // Step 1: Initial load
      setTimeout(() => setAnimationStep(1), 100);
      // Step 2: Header and filter animation
      setTimeout(() => setAnimationStep(2), 300);
      // Step 3: Timeline/content animation
      setTimeout(() => setAnimationStep(3), 600);
      // Step 4: Additional sections
      setTimeout(() => setAnimationStep(4), 900);
      // Step 5: Final elements
      setTimeout(() => {
        setAnimationStep(5);
        setIsLoaded(true);
      }, 1200);
    };

    animationSequence();
  }, []);

  // Scroll animation observer
  const setupScrollAnimations = useCallback(() => {
    const observerOptions = {
      threshold: [0.1, 0.3, 0.6],
      rootMargin: '-50px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute('data-animate-id');
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, elementId]));
        }
      });
    }, observerOptions);

    // Observe all animated elements
    elementsRef.current.forEach(element => {
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, [setupScrollAnimations]);

  // Helper function to add element refs
  const addToRefs = (el, id) => {
    if (el && !elementsRef.current.includes(el)) {
      el.setAttribute('data-animate-id', id);
      elementsRef.current.push(el);
    }
  };

  const renderContent = () => (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-primary opacity-30"></div>
      
      {/* Timeline Nodes */}
      <div className="space-y-8">
        {filteredNodes.map((node, index) => (
          <div
            key={node.id}
            className={`transform transition-all duration-700 ${
              visibleElements.has(`timeline-node-${node.id}`) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            ref={(el) => addToRefs(el, `timeline-node-${node.id}`)}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <TimelineNode
              node={node}
              isActive={activeNode === node.id}
              onToggle={() => setActiveNode(activeNode === node.id ? null : node.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {filteredNodes.map((node, index) => (
        <div 
          key={node.id} 
          className={`card p-6 hover:shadow-lg transition-all duration-700 transform ${
            visibleElements.has(`grid-card-${node.id}`)
              ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
              : 'opacity-0 translate-y-12 scale-95 rotate-1'
          }`}
          style={{ 
            transitionDelay: `${index * 150}ms`,
            animationDelay: `${index * 150}ms`
          }}
          ref={(el) => addToRefs(el, `grid-card-${node.id}`)}
        >
          <div className={`flex items-center mb-4 transform transition-all duration-500 ${
            visibleElements.has(`grid-card-${node.id}`) 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}>
            <div className={`w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3 transform transition-all duration-500 ${
              visibleElements.has(`grid-card-${node.id}`) 
                ? 'scale-100 rotate-0' 
                : 'scale-0 rotate-45'
            }`}
            style={{ transitionDelay: `${index * 150 + 300}ms` }}>
              <Icon name={node.icon} size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-text-primary text-sm">{node.title}</h3>
              <p className="text-xs text-accent">{node.company}</p>
            </div>
          </div>
          <p className={`text-sm text-text-secondary mb-4 leading-relaxed transform transition-all duration-500 ${
            visibleElements.has(`grid-card-${node.id}`) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150 + 400}ms` }}>
            {node.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {node.technologies.slice(0, 4).map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`px-2 py-1 bg-surface text-text-secondary text-xs rounded-md transition-all duration-300 transform ${
                  visibleElements.has(`grid-card-${node.id}`) 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-4 scale-75'
                }`}
                style={{ transitionDelay: `${index * 150 + 500 + (techIndex * 100)}ms` }}
              >
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
      {filteredNodes.map((node, index) => (
        <div 
          key={node.id} 
          className={`card p-4 flex items-center space-x-4 hover:shadow-md transition-all duration-600 transform ${
            visibleElements.has(`compact-item-${node.id}`)
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-12 scale-98'
          }`}
          style={{ 
            transitionDelay: `${index * 120}ms`,
            animationDelay: `${index * 120}ms`
          }}
          ref={(el) => addToRefs(el, `compact-item-${node.id}`)}
        >
          <div className={`w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 transform transition-all duration-500 ${
            visibleElements.has(`compact-item-${node.id}`) 
              ? 'scale-100 rotate-0' 
              : 'scale-0 rotate-180'
          }`}
          style={{ transitionDelay: `${index * 120 + 200}ms` }}>
            <Icon name={node.icon} size={20} className="text-white" />
          </div>
          <div className={`flex-1 transform transition-all duration-500 ${
            visibleElements.has(`compact-item-${node.id}`) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 120 + 300}ms` }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-text-primary">{node.title}</h3>
              <span className={`text-sm text-accent font-medium transform transition-all duration-400 ${
                visibleElements.has(`compact-item-${node.id}`) 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120 + 400}ms` }}>
                {node.period}
              </span>
            </div>
            <p className="text-sm text-text-secondary">{node.company}</p>
          </div>
          <div className={`flex space-x-2 transform transition-all duration-500 ${
            visibleElements.has(`compact-item-${node.id}`) 
              ? 'translate-x-0 opacity-100' 
              : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 120 + 500}ms` }}>
            {node.technologies.slice(0, 3).map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`px-2 py-1 bg-surface text-text-secondary text-xs rounded-md transition-all duration-300 transform ${
                  visibleElements.has(`compact-item-${node.id}`) 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-75 rotate-12'
                }`}
                style={{ transitionDelay: `${index * 120 + 600 + (techIndex * 80)}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

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
          <div className={`text-center mb-12 transform transition-all duration-800 ${
            animationStep >= 1 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h1 className={`text-4xl lg:text-6xl font-bold text-gradient mb-6 ${
              animationStep >= 1 ? 'animate-text-reveal' : ''
            }`}>
              <span className={`inline-block transform transition-all duration-700 delay-300 ${
                animationStep >= 1 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-full'
              }`}>
                My Development Journey
              </span>
            </h1>
            <p className={`text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 delay-500 ${
              animationStep >= 1 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              An interactive exploration of my career evolution, technical growth, and the experiences 
              that shaped my approach to software development and team leadership.
            </p>
          </div>

          {/* Timeline Filter */}
          <div 
            className={`mb-12 transform transition-all duration-700 ${
              visibleElements.has('timeline-filter') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            ref={(el) => addToRefs(el, 'timeline-filter')}
          >
            <TimelineFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>

          {/* Journey Timeline */}
          <div 
            className={`mb-16 transform transition-all duration-800 ${
              visibleElements.has('journey-content') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            ref={(el) => addToRefs(el, 'journey-content')}
          >
            {renderContent()}
          </div>

          {/* Philosophy Section */}
          <div 
            className={`mb-8 transform transition-all duration-700 ${
              visibleElements.has('philosophy-section') 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-12 rotate-1'
            }`}
            ref={(el) => addToRefs(el, 'philosophy-section')}
            style={{
              transform: `translateY(${visibleElements.has('philosophy-section') ? 0 : 50}px) rotateX(${visibleElements.has('philosophy-section') ? 0 : 15}deg)`
            }}
          >
            <PhilosophySection />
          </div>

          {/* Working Style Showcase */}
          <div 
            className={`mb-8 transform transition-all duration-700 delay-200 ${
              visibleElements.has('working-style') 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-12 scale-95'
            }`}
            ref={(el) => addToRefs(el, 'working-style')}
            style={{
              transform: `translateX(${visibleElements.has('working-style') ? 0 : -30}px) scale(${visibleElements.has('working-style') ? 1 : 0.95})`
            }}
          >
            <WorkingStyleShowcase />
          </div>

          {/* Growth Metrics */}
          <div 
            className={`mb-8 transform transition-all duration-700 delay-400 ${
              visibleElements.has('growth-metrics') 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-95'
            }`}
            ref={(el) => addToRefs(el, 'growth-metrics')}
            style={{
              transform: `translateX(${visibleElements.has('growth-metrics') ? 0 : 30}px) scale(${visibleElements.has('growth-metrics') ? 1 : 0.95}) rotateY(${visibleElements.has('growth-metrics') ? 0 : 10}deg)`
            }}
          >
            <GrowthMetrics />
          </div>

          {/* Call to Action */}
          <div 
            className={`text-center bg-brand-primary rounded-2xl p-8 text-white transform transition-all duration-1000 delay-300 ${
              visibleElements.has('call-to-action') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-16 scale-90'
            }`}
            ref={(el) => addToRefs(el, 'call-to-action')}
            style={{
              transform: `translateY(${visibleElements.has('call-to-action') ? 0 : 40}px) scale(${visibleElements.has('call-to-action') ? 1 : 0.9}) rotateX(${visibleElements.has('call-to-action') ? 0 : -5}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <h2 className={`text-2xl font-bold mb-4 transform transition-all duration-800 delay-500 ${
              visibleElements.has('call-to-action') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              Ready to Collaborate?
            </h2>
            <p className={`text-lg opacity-90 mb-6 max-w-2xl mx-auto transform transition-all duration-800 delay-700 ${
              visibleElements.has('call-to-action') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              My journey continues with each new project and collaboration. 
              Let's create something amazing together.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-800 delay-900 ${
              visibleElements.has('call-to-action') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <button 
                onClick={() => window.location.href = '/collaboration-studio'}
                className={`px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center transform ${
                  visibleElements.has('call-to-action') 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 -translate-x-4 scale-95'
                }`}
                style={{ transitionDelay: '1100ms' }}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Start a Conversation
              </button>
              <button 
                onClick={() => window.location.href = '/project-showcase-galaxy'}
                className={`px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-accent transition-all duration-300 flex items-center justify-center transform ${
                  visibleElements.has('call-to-action') 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : 'opacity-0 translate-x-4 scale-95'
                }`}
                style={{ transitionDelay: '1200ms' }}
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