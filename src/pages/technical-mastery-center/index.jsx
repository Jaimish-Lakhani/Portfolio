import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SkillCard from './components/SkillCard';
import CodePlayground from './components/CodePlayground';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import ProblemSolvingScenario from './components/ProblemSolvingScenario';
import PerformanceBenchmark from './components/PerformanceBenchmark';
import LearningResource from './components/LearningResource';
import CodeQualityExample from './components/CodeQualityExample';

const TechnicalMasteryCenter = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for skills
  const skills = [
    {
      id: 1,
      name: "React.js",
      category: "Frontend",
      icon: "Code",
      proficiency: "Expert",
      proficiencyLevel: 95,
      recency: "Current",
      experience: "5+ years",
      description: "Advanced React development with hooks, context, and performance optimization",
      projects: ["E-commerce Platform", "Dashboard App", "Portfolio Site"],
      lastUsed: "Today"
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      icon: "Server",
      proficiency: "Advanced",
      proficiencyLevel: 88,
      recency: "Current",
      experience: "4+ years",
      description: "Server-side JavaScript with Express, MongoDB, and microservices architecture",
      projects: ["API Gateway", "Real-time Chat", "Payment System"],
      lastUsed: "2 days ago"
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Language",
      icon: "FileCode",
      proficiency: "Advanced",
      proficiencyLevel: 85,
      recency: "Current",
      experience: "3+ years",
      description: "Type-safe JavaScript development with advanced type system knowledge",
      projects: ["Enterprise App", "Component Library", "CLI Tool"],
      lastUsed: "Yesterday"
    },
    {
      id: 4,
      name: "AWS",
      category: "Cloud",
      icon: "Cloud",
      proficiency: "Intermediate",
      proficiencyLevel: 75,
      recency: "Recent",
      experience: "2+ years",
      description: "Cloud infrastructure, serverless functions, and deployment automation",
      projects: ["Serverless API", "Static Hosting", "CI/CD Pipeline"],
      lastUsed: "1 week ago"
    },
    {
      id: 5,
      name: "Docker",
      category: "DevOps",
      icon: "Package",
      proficiency: "Advanced",
      proficiencyLevel: 82,
      recency: "Current",
      experience: "3+ years",
      description: "Containerization, orchestration, and development environment setup",
      projects: ["Microservices", "Development Setup", "Production Deploy"],
      lastUsed: "3 days ago"
    },
    {
      id: 6,
      name: "GraphQL",
      category: "API",
      icon: "Database",
      proficiency: "Intermediate",
      proficiencyLevel: 70,
      recency: "Recent",
      experience: "2+ years",
      description: "Query language for APIs with Apollo Server and Client integration",
      projects: ["Social Platform", "Content Management", "Mobile App Backend"],
      lastUsed: "2 weeks ago"
    }
  ];

  // Mock data for code examples
  const codeExamples = [
    {
      id: 1,
      title: "React Performance Optimization",
      language: "JavaScript",
      difficulty: "Advanced",
      icon: "Zap",
      description: "Optimizing React components using useMemo, useCallback, and React.memo",
      code: `import React, { useMemo, useCallback, memo } from 'react'
;\n\nconst ExpensiveComponent = memo(({ items, onItemClick }) => {\n  const expensiveValue = useMemo(() => {\n    return items.reduce((sum, item) => sum + item.value, 0);\n  }, [items]);\n\n  const handleClick = useCallback((id) => {\n    onItemClick(id);\n  }, [onItemClick]);\n\n  return (\n    <div>\n      <h3>Total: {expensiveValue}</h3>\n      {items.map(item => (\n        <div key={item.id} onClick={() => handleClick(item.id)}>\n          {item.name}\n        </div>\n      ))}\n    </div>\n  );\n});`,
      output: "Component renders only when props actually change\nReduced re-renders by 80%\nImproved performance score from 65 to 92",
      explanation: "This example demonstrates React performance optimization techniques. useMemo prevents expensive calculations on every render, useCallback prevents function recreation, and memo prevents unnecessary re-renders when props haven't changed.",
      keyPoints: [
        "useMemo for expensive calculations",
        "useCallback for stable function references",
        "React.memo for component memoization",
        "Dependency arrays are crucial for correctness"
      ],
      complexity: "O(n)",
      timeComplexity: "O(n) for calculation",
      spaceComplexity: "O(1) additional space"
    },
    {
      id: 2,
      title: "Async/Await Error Handling",
      language: "JavaScript",
      difficulty: "Intermediate",
      icon: "AlertCircle",
      description: "Robust error handling patterns for asynchronous operations",
      code: `async function fetchUserData(userId) {\n  try {\n    const response = await fetch(\`/api/users/\${userId}\`);\n    \n    if (!response.ok) {\n      throw new Error(\`HTTP error! status: \${response.status}\`);\n    }\n    \n    const userData = await response.json();\n    return { data: userData, error: null };\n  } catch (error) {\n    console.error('Failed to fetch user data:', error);\n    return { data: null, error: error.message };\n  }\n}\n\n// Usage with proper error handling\nconst { data, error } = await fetchUserData(123);\nif (error) {\n  // Handle error appropriately\n  showErrorMessage(error);\n} else {\n  // Process successful data\n  displayUserProfile(data);\n}`,
      output: "Graceful error handling without crashes\nUser-friendly error messages\nProper error logging for debugging",
      explanation: "This pattern ensures robust error handling in async operations. It prevents unhandled promise rejections, provides meaningful error messages, and maintains application stability.",
      keyPoints: [
        "Always wrap async operations in try-catch",
        "Check response status explicitly",
        "Return consistent data structure",
        "Log errors for debugging"
      ],
      complexity: "O(1)",
      timeComplexity: "O(1) for error handling",
      spaceComplexity: "O(1) for error objects"
    }
  ];

  // Mock data for architecture diagrams
  const architectures = [
    {
      id: 1,
      title: "Microservices E-commerce Architecture",
      description: "Scalable e-commerce platform with independent services",
      layers: [
        {
          name: "API Gateway",
          icon: "Globe",
          description: "Single entry point for all client requests with authentication and routing",
          technologies: ["Kong", "AWS API Gateway", "Rate Limiting", "JWT"],
          responsibilities: ["Request routing", "Authentication", "Rate limiting", "Request/Response transformation"]
        },
        {
          name: "Microservices Layer",
          icon: "Layers",
          description: "Independent services handling specific business domains",
          technologies: ["Node.js", "Express", "Docker", "Kubernetes"],
          responsibilities: ["User management", "Product catalog", "Order processing", "Payment handling"]
        },
        {
          name: "Data Layer",
          icon: "Database",
          description: "Distributed databases optimized for each service",
          technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
          responsibilities: ["Data persistence", "Caching", "Search indexing", "Session storage"]
        },
        {
          name: "Infrastructure",
          icon: "Server",
          description: "Cloud infrastructure and monitoring",
          technologies: ["AWS", "Docker", "Kubernetes", "Prometheus"],
          responsibilities: ["Container orchestration", "Auto-scaling", "Monitoring", "Log aggregation"]
        }
      ],
      decisions: [
        {
          title: "Database per Service",
          rationale: "Ensures loose coupling and independent scaling of services"
        },
        {
          title: "Event-Driven Communication",
          rationale: "Enables asynchronous processing and better fault tolerance"
        },
        {
          title: "API Gateway Pattern",
          rationale: "Centralizes cross-cutting concerns like authentication and rate limiting"
        }
      ],
      tradeoffs: [
        {
          aspect: "Complexity",
          pros: "Better separation of concerns",
          cons: "Increased operational complexity"
        },
        {
          aspect: "Performance",
          pros: "Independent scaling per service",
          cons: "Network latency between services"
        },
        {
          aspect: "Development",
          pros: "Team independence",
          cons: "Coordination overhead"
        }
      ],
      scaling: [
        "Horizontal scaling of individual services based on demand",
        "Database sharding for high-traffic services",
        "CDN integration for static assets and API responses",
        "Auto-scaling based on CPU and memory metrics"
      ]
    }
  ];

  // Mock data for problem-solving scenarios
  const scenarios = [
    {
      id: 1,
      title: "Memory Leak in React Application",
      context: "Production application experiencing gradual memory increase and eventual crashes",
      problem: {
        issue: "Memory usage continuously increasing, causing browser crashes after extended use",
        impact: "Poor user experience, lost work, customer complaints",
        constraints: ["Cannot take application offline", "Must maintain current functionality", "Limited debugging time"]
      },
      metrics: [
        { name: "Memory Usage", before: "2.5GB", after: "450MB" },
        { name: "Crash Rate", before: "15%", after: "0.1%" },
        { name: "Performance Score", before: "45", after: "89" }
      ],
      steps: [
        {
          title: "Identify the Problem",
          icon: "Search",
          description: "Use browser dev tools to profile memory usage and identify patterns",
          code: `// Memory profiling in Chrome DevTools\n// 1. Open DevTools > Memory tab\n// 2. Take heap snapshots at intervals\n// 3. Compare snapshots to find growing objects\n\n// Found: Event listeners not being cleaned up\nconsole.log('Detached DOM nodes:', document.querySelectorAll('*').length);`,
          whatWorked: "Chrome DevTools Memory tab revealed growing event listeners and detached DOM nodes",
          lessonsLearned: "Regular memory profiling should be part of development workflow"
        },
        {
          title: "Analyze Root Cause",
          icon: "Target",
          description: "Trace the source of memory leaks to specific components and patterns",
          code: `// Found problematic pattern:\nuseEffect(() => {\n  window.addEventListener('resize', handleResize);\n  // Missing cleanup!\n}, []);\n\n// Also found:\nconst intervalId = setInterval(updateData, 1000);\n// No cleanup for intervals`,
          whatWorked: "Code review revealed missing cleanup in useEffect hooks",
          lessonsLearned: "Every subscription needs a corresponding cleanup"
        },
        {
          title: "Implement Fixes",
          icon: "Wrench",
          description: "Add proper cleanup for all subscriptions and event listeners",
          code: `// Fixed version:\nuseEffect(() => {\n  const handleResize = () => { /* handler */ };\n  window.addEventListener('resize', handleResize);\n  \n  return () => {\n    window.removeEventListener('resize', handleResize);\n  };\n}, []);\n\n// Fixed intervals:\nuseEffect(() => {\n  const intervalId = setInterval(updateData, 1000);\n  return () => clearInterval(intervalId);\n}, []);`,
          whatWorked: "Systematic cleanup of all subscriptions eliminated memory leaks",
          lessonsLearned: "ESLint rules can help catch missing cleanup patterns"
        },
        {
          title: "Verify and Monitor",
          icon: "CheckCircle",
          description: "Confirm fixes work and implement monitoring to prevent future issues",
          code: `// Added monitoring:\nconst MemoryMonitor = () => {\n  useEffect(() => {\n    const checkMemory = () => {\n      if (performance.memory) {\n        const used = performance.memory.usedJSHeapSize;\n        const limit = performance.memory.jsHeapSizeLimit;\n        if (used / limit > 0.8) {\n          console.warn('High memory usage detected');\n        }\n      }\n    };\n    \n    const interval = setInterval(checkMemory, 30000);\n    return () => clearInterval(interval);\n  }, []);\n};`,
          whatWorked: "Memory monitoring helps catch issues before they become critical",
          lessonsLearned: "Proactive monitoring is better than reactive debugging"
        }
      ]
    }
  ];

  // Mock data for performance benchmarks
  const benchmarks = [
    {
      id: 1,
      title: "React Rendering Performance Comparison",
      description: "Comparing different approaches to rendering large lists in React",
      metrics: [
        { key: 'performance', name: 'Render Time', icon: 'Clock', description: 'Time to render 1000 items' },
        { key: 'memory', name: 'Memory Usage', icon: 'HardDrive', description: 'Peak memory consumption' },
        { key: 'scalability', name: 'Scalability', icon: 'TrendingUp', description: 'Performance with increasing items' }
      ],
      performanceData: [
        { approach: 'Standard', value: 850 },
        { approach: 'Virtualized', value: 45 },
        { approach: 'Optimized', value: 120 },
        { approach: 'Memoized', value: 280 }
      ],
      memoryData: [
        { approach: 'Standard', value: 125 },
        { approach: 'Virtualized', value: 25 },
        { approach: 'Optimized', value: 45 },
        { approach: 'Memoized', value: 85 }
      ],
      scalabilityData: [
        { approach: 'Standard', value: 30 },
        { approach: 'Virtualized', value: 95 },
        { approach: 'Optimized', value: 75 },
        { approach: 'Memoized', value: 60 }
      ],
      environment: [
        { key: 'Browser', value: 'Chrome 120' },
        { key: 'Device', value: 'MacBook Pro M1' },
        { key: 'Memory', value: '16GB RAM' },
        { key: 'Items', value: '1000 complex objects' }
      ],
      bestPerformer: {
        approach: 'Virtualized',
        reason: 'Only renders visible items, maintaining constant performance regardless of list size',
        improvement: '94% faster rendering'
      },
      recommendations: [
        'Use virtualization for lists with >100 items',
        'Implement memoization for expensive calculations',
        'Consider pagination for very large datasets',
        'Profile performance regularly during development'
      ],
      useCases: [
        {
          scenario: 'Small Lists (<50 items)',
          recommendation: 'Standard approach is sufficient',
          approach: 'Standard',
          reason: 'Overhead not justified'
        },
        {
          scenario: 'Medium Lists (50-500 items)',
          recommendation: 'Use memoization and optimization',
          approach: 'Optimized',
          reason: 'Good balance of performance and complexity'
        },
        {
          scenario: 'Large Lists (>500 items)',
          recommendation: 'Implement virtualization',
          approach: 'Virtualized',
          reason: 'Essential for maintaining performance'
        },
        {
          scenario: 'Dynamic Content',
          recommendation: 'Combine memoization with virtualization',
          approach: 'Hybrid',
          reason: 'Handles changing content efficiently'
        }
      ]
    }
  ];

  // Mock data for learning resources
  const learningResources = [
    {
      id: 1,
      title: "Advanced React Patterns",
      type: "course",
      description: "Deep dive into advanced React patterns including render props, HOCs, and compound components",
      difficulty: "Advanced",
      duration: "8 hours",
      rating: "4.9",
      tags: ["React", "JavaScript", "Patterns", "Architecture"],
      url: "https://example.com/advanced-react",
      learningOutcomes: [
        "Master render props pattern for component composition",
        "Understand when and how to use Higher-Order Components",
        "Implement compound components for flexible APIs",
        "Apply advanced state management patterns"
      ],
      keyTakeaways: "This course transformed how I think about component composition. The render props pattern alone improved my code reusability by 60%.",
      personalNote: "I recommend this after you're comfortable with hooks. The patterns here are essential for building scalable React applications.",
      bestFor: "Senior developers looking to architect better React applications",
      prerequisites: ["React Hooks", "JavaScript ES6+", "Component Lifecycle"],
      dateAdded: "2024-01-15",
      lastUpdated: "2024-03-10"
    },
    {
      id: 2,
      title: "System Design Interview Guide",
      type: "book",
      description: "Comprehensive guide to system design interviews with real-world examples",
      difficulty: "Intermediate",
      duration: "12 hours",
      rating: "4.8",
      tags: ["System Design", "Architecture", "Scalability", "Interviews"],
      url: "https://example.com/system-design-book",
      learningOutcomes: [
        "Design scalable distributed systems",
        "Understand trade-offs in system architecture",
        "Learn about caching, load balancing, and databases",
        "Practice with real interview questions"
      ],
      keyTakeaways: "Excellent framework for approaching system design problems. The step-by-step methodology is invaluable.",
      personalNote: "This book helped me land my current role. The examples are practical and the explanations are clear.",
      bestFor: "Engineers preparing for senior roles or system design interviews",
      prerequisites: ["Basic networking", "Database concepts"],
      dateAdded: "2024-02-01",
      lastUpdated: "2024-03-05"
    },
    {
      id: 3,
      title: "Docker Deep Dive",
      type: "video",
      description: "Complete Docker course covering containers, images, networking, and orchestration",
      difficulty: "Intermediate",
      duration: "6 hours",
      rating: "4.7",
      tags: ["Docker", "DevOps", "Containers", "Kubernetes"],
      url: "https://example.com/docker-course",
      learningOutcomes: [
        "Master Docker fundamentals and best practices",
        "Build efficient Docker images",
        "Understand Docker networking and volumes",
        "Deploy applications with Docker Compose"
      ],
      keyTakeaways: "Practical approach with hands-on examples. The multi-stage build section saved me hours of deployment time.",
      personalNote: "Perfect for developers new to containerization. The instructor explains complex concepts simply.",
      bestFor: "Developers wanting to modernize their deployment workflow",
      prerequisites: ["Basic Linux commands", "Understanding of web applications"],
      dateAdded: "2024-01-20",
      lastUpdated: "2024-02-28"
    }
  ];

  // Mock data for code quality examples
  const codeQualityExamples = [
    {
      id: 1,
      title: "API Error Handling Refactor",
      description: "Transforming fragile API calls into robust, maintainable error handling",
      beforeTitle: "Original Implementation",
      afterTitle: "Refactored Implementation",
      beforeCode: `// Problematic approach\nfunction fetchUserData(userId) {\n  return fetch(\`/api/users/\${userId}\`)\n    .then(response => response.json())\n    .then(data => {\n      // No error checking\n      updateUserProfile(data);\n      showSuccessMessage();\n    })\n    .catch(error => {\n      // Generic error handling\n      alert('Something went wrong!');\n    });\n}\n\n// Usage scattered throughout codebase\nfetchUserData(123);\nfetchUserData(456);`,
      afterCode: `// Robust implementation\nclass ApiClient {\n  async fetchUserData(userId) {\n    try {\n      const response = await fetch(\`/api/users/\${userId}\`);\n      \n      if (!response.ok) {\n        throw new ApiError(\n          \`Failed to fetch user: \${response.status}\`,\n          response.status\n        );\n      }\n      \n      const data = await response.json();\n      return { success: true, data, error: null };\n    } catch (error) {\n      return {\n        success: false,\n        data: null,\n        error: this.handleError(error)\n      };\n    }\n  }\n  \n  handleError(error) {\n    if (error instanceof ApiError) {\n      return { type: 'api', message: error.message, code: error.code };\n    }\n    return { type: 'network', message: 'Network error occurred' };\n  }\n}\n\n// Usage with proper error handling\nconst api = new ApiClient();\nconst { success, data, error } = await api.fetchUserData(123);\n\nif (success) {\n  updateUserProfile(data);\n  showSuccessMessage();\n} else {\n  handleUserError(error);\n}`,
      metrics: [
        { name: "Error Coverage", before: "20%", after: "95%", improvement: "+75%" },
        { name: "Code Reuse", before: "30%", after: "85%", improvement: "+55%" },
        { name: "Maintainability", before: "40%", after: "90%", improvement: "+50%" },
        { name: "Test Coverage", before: "25%", after: "88%", improvement: "+63%" }
      ],
      improvements: [
        {
          type: "performance",
          description: "Reduced redundant API calls through better caching and error recovery"
        },
        {
          type: "readability",
          description: "Clear separation of concerns with dedicated error handling class"
        },
        {
          type: "maintainability",
          description: "Centralized error handling makes updates and debugging easier"
        },
        {
          type: "testing",
          description: "Structured error responses enable comprehensive unit testing"
        }
      ],
      keyChanges: [
        "Introduced custom ApiError class for typed error handling",
        "Implemented consistent return format for all API calls",
        "Added proper HTTP status code checking",
        "Created centralized error handling logic",
        "Separated network errors from API errors"
      ],
      impact: {
        performance: "40% reduction in failed requests due to better error recovery and retry logic",
        developerExperience: "Developers can now handle errors consistently across the application",
        maintainability: "Single point of change for API error handling reduces maintenance overhead"
      },
      lessonsLearned: [
        "Consistent error handling patterns improve code reliability",
        "Custom error classes provide better debugging information",
        "Structured return types make testing and error handling easier",
        "Centralized error handling reduces code duplication"
      ]
    }
  ];

  const skillCategories = ['all', 'Frontend', 'Backend', 'Language', 'Cloud', 'DevOps', 'API'];

  const sections = [
    { id: 'skills', name: 'Skills Overview', icon: 'Code' },
    { id: 'playground', name: 'Code Playground', icon: 'Play' },
    { id: 'architecture', name: 'Architecture', icon: 'Network' },
    { id: 'problem-solving', name: 'Problem Solving', icon: 'Target' },
    { id: 'benchmarks', name: 'Performance', icon: 'Zap' },
    { id: 'resources', name: 'Learning Resources', icon: 'BookOpen' },
    { id: 'quality', name: 'Code Quality', icon: 'CheckCircle' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Technical Mastery Center - Jaimish S. Lakhani Portfolio</title>
        <meta name="description" content="Explore technical expertise through interactive code examples, architectural decisions, and real-world problem-solving approaches." />
        <meta name="keywords" content="technical skills, programming, web development, code quality, architecture, performance" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-background via-surface to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Icon name="Code2" size={32} color="white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gradient">
                  Technical Mastery Center
                </h1>
                <p className="text-text-secondary text-lg mt-2">
                  Interactive playground of expertise and innovation
                </p>
              </div>
            </div>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my technical expertise through interactive code examples, architectural decisions, 
              and real-world problem-solving approaches. Each skill is backed by measurable outcomes 
              and practical implementations.
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-surface text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                }`}
              >
                <Icon name={section.icon} size={18} />
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Skills Overview */}
          {activeSection === 'skills' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-text-primary">Skills & Expertise</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-text-secondary">Filter by category:</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-surface border border-surface-secondary rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    {skillCategories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Code Playground */}
          {activeSection === 'playground' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Interactive Code Playground</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Explore live code examples demonstrating advanced techniques and best practices. 
                  Each example includes detailed explanations and performance considerations.
                </p>
              </div>

              <div className="space-y-8">
                {codeExamples.map((example) => (
                  <CodePlayground key={example.id} example={example} />
                ))}
              </div>
            </div>
          )}

          {/* Architecture Diagrams */}
          {activeSection === 'architecture' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">System Architecture</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Explore architectural decisions, trade-offs, and scaling considerations 
                  from real-world projects. Each diagram includes detailed explanations of design choices.
                </p>
              </div>

              <div className="space-y-8">
                {architectures.map((architecture) => (
                  <ArchitectureDiagram key={architecture.id} architecture={architecture} />
                ))}
              </div>
            </div>
          )}

          {/* Problem Solving */}
          {activeSection === 'problem-solving' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Problem-Solving Approach</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Step through real debugging scenarios and optimization challenges. 
                  Learn the methodology behind identifying, analyzing, and solving complex technical problems.
                </p>
              </div>

              <div className="space-y-8">
                {scenarios.map((scenario) => (
                  <ProblemSolvingScenario key={scenario.id} scenario={scenario} />
                ))}
              </div>
            </div>
          )}

          {/* Performance Benchmarks */}
          {activeSection === 'benchmarks' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Performance Benchmarks</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Compare different implementation approaches with real performance metrics. 
                  Understand when to use each technique based on specific use cases and constraints.
                </p>
              </div>

              <div className="space-y-8">
                {benchmarks.map((benchmark) => (
                  <PerformanceBenchmark key={benchmark.id} benchmark={benchmark} />
                ))}
              </div>
            </div>
          )}

          {/* Learning Resources */}
          {activeSection === 'resources' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Curated Learning Resources</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Discover the books, courses, and tools that have shaped my technical expertise. 
                  Each resource includes personal insights and recommendations for different skill levels.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {learningResources.map((resource) => (
                  <LearningResource key={resource.id} resource={resource} />
                ))}
              </div>
            </div>
          )}

          {/* Code Quality Examples */}
          {activeSection === 'quality' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Code Quality Evolution</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  See how code transforms from functional to exceptional. Each example shows 
                  before/after comparisons with detailed explanations of improvements in maintainability, 
                  performance, and scalability.
                </p>
              </div>

              <div className="space-y-8">
                {codeQualityExamples.map((example) => (
                  <CodeQualityExample key={example.id} example={example} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can help bring your project to life. 
              From architecture planning to performance optimization, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/collaboration-studio"
                className="flex items-center space-x-2 px-8 py-4 bg-white text-brand-primary rounded-xl font-semibold hover:bg-violet-50 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start a Conversation</span>
              </a>
              <a
                href="/project-showcase-galaxy"
                className="flex items-center space-x-2 px-8 py-4 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                <Icon name="Folder" size={20} />
                <span>View My Projects</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface text-text-primary py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-brand-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jaimish S. Lakhani Portfolio</h3>
                  <p className="text-text-secondary text-sm">Technical Excellence</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4 max-w-md">
                Crafting digital experiences through code, one project at a time. 
                Specializing in modern web technologies and scalable solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/dynamic-homepage" className="text-text-secondary hover:text-text-primary transition-colors">Home</a></li>
                <li><a href="/project-showcase-galaxy" className="text-text-secondary hover:text-text-primary transition-colors">Projects</a></li>
                <li><a href="/professional-journey-hub" className="text-text-secondary hover:text-text-primary transition-colors">Journey</a></li>
                <li><a href="/collaboration-studio" className="text-text-secondary hover:text-text-primary transition-colors">Collaborate</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-text-primary">
                  <Icon name="Github" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-text-primary">
                  <Icon name="Linkedin" size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-surface-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-text-primary">
                  <Icon name="Mail" size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-text-secondary">
              © {new Date().getFullYear()} Jaimish S. Lakhani Portfolio. Built with passion and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnicalMasteryCenter;