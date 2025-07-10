import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import FeaturedProject from './components/FeaturedProject';
import ProjectStats from './components/ProjectStats';

const ProjectShowcaseGalaxy = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      category: "Web Application",
      year: "2024",
      status: "Live",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "A comprehensive e-commerce solution that transformed online retail experience with AI-powered recommendations and seamless checkout process.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Redis"],
      metrics: {
        performance: "98%",
        users: "50K+",
        impact: "+180%"
      },
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/example/ecommerce",
      challenge: `The client needed a modern e-commerce platform that could handle high traffic volumes while providing personalized shopping experiences. The existing system was outdated, slow, and couldn't scale with growing demand.`,
      approach: `I implemented a microservices architecture using React for the frontend and Node.js for the backend. The solution included AI-powered product recommendations, real-time inventory management, and a streamlined checkout process.`,
      solution: `The final platform featured a responsive design, advanced search capabilities, personalized user experiences, and robust payment processing. Performance optimizations reduced load times by 60%.`,
      architecture: `Frontend: React 18 + TypeScript + Tailwind CSS
Backend: Node.js + Express + MongoDB
Infrastructure: AWS (EC2, S3, CloudFront)
Payment: Stripe API integration
Cache: Redis for session management`,
      features: [
        "AI-powered product recommendations",
        "Real-time inventory tracking",
        "Multi-payment gateway integration",
        "Advanced search and filtering",
        "Mobile-responsive design",
        "Admin dashboard with analytics"
      ],
      codeSnippet: `// Product recommendation engine
const getRecommendations = async (userId, productId) => {
  const userHistory = await getUserPurchaseHistory(userId);
  const similarProducts = await findSimilarProducts(productId);
  
  return aiEngine.generateRecommendations({
    userHistory,
    similarProducts,
    trending: await getTrendingProducts()
  });
};`,
      impactMetrics: [
        { label: "Conversion Rate", value: "+180%", change: "↑ 45% vs previous" },
        { label: "Page Load Time", value: "1.2s", change: "↓ 60% improvement" },
        { label: "User Retention", value: "85%", change: "↑ 25% increase" }
      ],
      businessImpact: "The new platform increased conversion rates by 180% and reduced cart abandonment by 45%. Monthly revenue grew by 250% within the first quarter of launch.",
      testimonial: {
        quote: "This platform transformed our business completely. The AI recommendations alone increased our average order value by 40%.",
        author: "Sarah Johnson",
        role: "CEO, RetailCorp",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg"
      },
      lessons: [
        "Microservices architecture provides better scalability but requires careful service communication design",
        "AI recommendations significantly impact user engagement when properly implemented",
        "Performance optimization should be considered from the beginning, not as an afterthought"
      ],
      improvements: [
        "Implement GraphQL for more efficient data fetching",
        "Add progressive web app capabilities",
        "Integrate voice search functionality"
      ]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Healthcare",
      year: "2023",
      status: "Live",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "Comprehensive healthcare management platform streamlining patient care, appointment scheduling, and medical records management.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "HIPAA"],
      metrics: {
        performance: "95%",
        users: "25K+",
        impact: "+150%"
      },
      demoUrl: "https://demo-healthcare.example.com",
      githubUrl: "https://github.com/example/healthcare",
      challenge: `Healthcare providers needed a HIPAA-compliant system to manage patient records, appointments, and billing while ensuring data security and accessibility across multiple locations.`,
      approach: `Developed a secure, cloud-based platform with role-based access control, encrypted data storage, and intuitive interfaces for both healthcare providers and patients.`,
      solution: `The system integrated appointment scheduling, electronic health records, billing management, and telemedicine capabilities in a single, secure platform.`,
      architecture: `Frontend: Vue.js 3 + Vuetify + PWA
Backend: Python Django + Django REST Framework
Database: PostgreSQL with encryption
Infrastructure: Docker containers on AWS
Security: HIPAA compliance + OAuth 2.0`,
      features: [
        "Electronic Health Records (EHR)",
        "Appointment scheduling system",
        "Telemedicine integration",
        "Billing and insurance management",
        "Patient portal access",
        "HIPAA-compliant data handling"
      ],
      codeSnippet: `# Secure patient data access
@require_permissions(['view_patient_data'])
@encrypt_sensitive_data
def get_patient_record(request, patient_id):
    patient = Patient.objects.get(
        id=patient_id,
        provider=request.user.provider
    )
    return JsonResponse(patient.get_secure_data())`,
      impactMetrics: [
        { label: "Efficiency Gain", value: "+150%", change: "↑ 3x faster processing" },
        { label: "Patient Satisfaction", value: "92%", change: "↑ 18% improvement" },
        { label: "Cost Reduction", value: "35%", change: "↓ Operational savings" }
      ],
      businessImpact: "Reduced administrative overhead by 35% and improved patient satisfaction scores by 18%. The system now serves 25,000+ patients across 15 healthcare facilities.",
      testimonial: {
        quote: "This system revolutionized our practice management. We can now focus more on patient care rather than paperwork.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      lessons: [
        "HIPAA compliance requires careful planning from the architecture phase",
        "User training is crucial for healthcare system adoption",
        "Real-time data synchronization is essential for multi-location practices"
      ],
      improvements: [
        "Add AI-powered diagnostic assistance",
        "Implement blockchain for secure data sharing",
        "Enhance mobile app functionality"
      ]
    },
    {
      id: 3,
      title: "FinTech Trading Platform",
      category: "Financial Technology",
      year: "2024",
      status: "In Development",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      description: "Advanced trading platform with real-time market data, algorithmic trading capabilities, and comprehensive portfolio management.",
      technologies: ["React", "TypeScript", "WebSocket", "Python", "Redis", "Kafka"],
      metrics: {
        performance: "99%",
        users: "15K+",
        impact: "+200%"
      },
      demoUrl: null,
      githubUrl: "https://github.com/example/fintech",
      challenge: `Traditional trading platforms lacked real-time responsiveness and advanced analytics. Users needed a platform that could handle high-frequency trading with minimal latency.`,
      approach: `Built a high-performance platform using WebSocket connections for real-time data, implemented algorithmic trading engines, and created intuitive dashboards for portfolio management.`,
      solution: `The platform provides sub-millisecond trade execution, advanced charting tools, risk management features, and automated trading strategies.`,
      architecture: `Frontend: React + TypeScript + WebSocket
Backend: Python FastAPI + Celery
Message Queue: Apache Kafka
Cache: Redis for real-time data
Database: PostgreSQL + TimescaleDB`,
      features: [
        "Real-time market data streaming",
        "Algorithmic trading strategies",
        "Advanced charting and analytics",
        "Risk management tools",
        "Portfolio optimization",
        "Multi-asset class support"
      ],
      codeSnippet: `// Real-time price streaming
const priceStream = new WebSocket('wss://api.trading.com/stream');

priceStream.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updatePortfolio(data.symbol, data.price);
  checkTradingSignals(data);
};`,
      impactMetrics: [
        { label: "Trade Execution", value: "<1ms", change: "↓ 95% latency reduction" },
        { label: "User Growth", value: "+200%", change: "↑ Monthly active users" },
        { label: "Trading Volume", value: "$50M+", change: "↑ Daily volume" }
      ],
      businessImpact: "Platform processes over $50M in daily trading volume with 99.9% uptime. User base grew by 200% in the first six months of beta testing.",
      testimonial: {
        quote: "The speed and reliability of this platform gives us a significant competitive advantage in high-frequency trading.",
        author: "James Rodriguez",
        role: "Head of Trading, InvestCorp",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      lessons: [
        "Low-latency systems require careful optimization at every layer",
        "Financial data accuracy is paramount - implement multiple validation layers",
        "User interface design for trading platforms must prioritize speed and clarity"
      ],
      improvements: [
        "Add machine learning for predictive analytics",
        "Implement social trading features",
        "Expand to cryptocurrency markets"
      ]
    },
    {
      id: 4,
      title: "Smart City IoT Dashboard",
      category: "IoT & Smart Cities",
      year: "2023",
      status: "Completed",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
      description: "Comprehensive IoT dashboard for smart city management, monitoring traffic, air quality, energy consumption, and public services.",
      technologies: ["Angular", "D3.js", "Node.js", "InfluxDB", "MQTT", "Docker"],
      metrics: {
        performance: "94%",
        users: "5K+",
        impact: "+120%"
      },
      demoUrl: "https://demo-smartcity.example.com",
      githubUrl: "https://github.com/example/smartcity",
      challenge: `City administrators needed a unified platform to monitor and manage various IoT sensors across the city, from traffic lights to air quality monitors, with real-time data visualization.`,
      approach: `Created a scalable IoT data ingestion system with real-time dashboards, predictive analytics, and automated alert systems for city management.`,
      solution: `The platform aggregates data from thousands of IoT sensors, provides real-time visualizations, and enables data-driven decision making for city operations.`,
      architecture: `Frontend: Angular + D3.js + Leaflet Maps
Backend: Node.js + Express + MQTT Broker
Database: InfluxDB for time-series data
Infrastructure: Docker Swarm + Nginx
IoT: MQTT protocol for sensor communication`,
      features: [
        "Real-time sensor data visualization",
        "Interactive city maps with overlays",
        "Predictive analytics for traffic flow",
        "Air quality monitoring and alerts",
        "Energy consumption optimization",
        "Public service management tools"
      ],
      codeSnippet: `// IoT sensor data processing
const processSensorData = (sensorId, data) => {
  const processed = {
    timestamp: Date.now(),
    sensorId,
    value: data.value,
    location: data.coordinates,
    type: data.sensorType
  };
  
  influxDB.writePoint(processed);
  checkThresholds(processed);
};`,
      impactMetrics: [
        { label: "Energy Savings", value: "25%", change: "↓ City-wide reduction" },
        { label: "Response Time", value: "40%", change: "↓ Emergency services" },
        { label: "Data Points", value: "1M+", change: "↑ Daily processed" }
      ],
      businessImpact: "Reduced city energy consumption by 25% and improved emergency response times by 40%. The system now monitors over 10,000 IoT sensors across the metropolitan area.",
      testimonial: {
        quote: "This dashboard transformed how we manage our city. We can now make data-driven decisions that directly improve citizens' quality of life.",author: "Maria Gonzalez",role: "City Technology Director",avatar: "https://randomuser.me/api/portraits/women/41.jpg"
      },
      lessons: [
        "IoT systems require robust data validation and error handling","Real-time visualization performance is critical for large datasets","Stakeholder training is essential for successful smart city implementations"
      ],
      improvements: [
        "Add machine learning for predictive maintenance","Implement citizen engagement features","Expand to include weather prediction models"
      ]
    },
    {
      id: 5,
      title: "Educational Learning Platform",category: "Education Technology",year: "2023",status: "Live",rating: 4.9,image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",description: "Interactive learning platform with AI-powered personalized learning paths, virtual classrooms, and comprehensive progress tracking.",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "WebRTC", "TensorFlow"],
      metrics: {
        performance: "97%",users: "100K+",impact: "+300%"
      },
      demoUrl: "https://demo-learning.example.com",githubUrl: "https://github.com/example/learning",
      challenge: `Educational institutions needed a comprehensive online learning platform that could provide personalized learning experiences while maintaining student engagement in virtual environments.`,
      approach: `Developed an AI-powered platform with adaptive learning algorithms, interactive content delivery, and real-time collaboration tools for virtual classrooms.`,
      solution: `The platform delivers personalized learning experiences, supports live virtual classes, and provides detailed analytics for educators and students.`,
      architecture: `Frontend: Next.js + GraphQL + Apollo Client
Backend: Node.js + GraphQL + Prisma ORM
Database: PostgreSQL + Redis
AI/ML: TensorFlow.js for learning analytics
Video: WebRTC for virtual classrooms`,
      features: [
        "AI-powered personalized learning paths","Virtual classroom with video conferencing","Interactive content creation tools","Real-time progress tracking","Gamification and achievement system","Multi-language support"
      ],
      codeSnippet: `// Personalized learning path generation
const generateLearningPath = async (studentId, subject) => {
  const studentProfile = await getStudentProfile(studentId);
  const learningStyle = await analyzeLearningStyle(studentProfile);
  
  return aiEngine.createPersonalizedPath({
    subject,
    learningStyle,
    currentLevel: studentProfile.level,
    goals: studentProfile.goals
  });
};`,
      impactMetrics: [
        { label: "Student Engagement", value: "+300%", change: "↑ Time spent learning" },
        { label: "Completion Rate", value: "89%", change: "↑ 45% improvement" },
        { label: "Learning Outcomes", value: "+65%", change: "↑ Test score improvement" }
      ],
      businessImpact: "Increased student engagement by 300% and improved course completion rates to 89%. The platform now serves over 100,000 students across 500+ educational institutions.",
      testimonial: {
        quote: "Our students are more engaged than ever. The personalized learning paths have dramatically improved learning outcomes.",author: "Dr. Emily Watson",role: "Dean of Online Education",avatar: "https://randomuser.me/api/portraits/women/35.jpg"
      },
      lessons: [
        "Personalization algorithms require extensive user data and careful privacy handling","Virtual classroom technology must be reliable and easy to use","Gamification elements significantly boost student engagement when properly implemented"
      ],
      improvements: [
        "Add VR/AR learning experiences","Implement peer-to-peer learning features","Expand AI tutoring capabilities"
      ]
    },
    {
      id: 6,
      title: "Supply Chain Optimization",category: "Enterprise Software",year: "2024",status: "Live",rating: 4.5,image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",description: "Advanced supply chain management system with predictive analytics, real-time tracking, and automated optimization algorithms.",
      technologies: ["React", "Python", "Apache Spark", "Kubernetes", "Blockchain"],
      metrics: {
        performance: "96%",users: "8K+",impact: "+140%"
      },
      demoUrl: "https://demo-supply.example.com",githubUrl: "https://github.com/example/supply-chain",
      challenge: `Global supply chains faced visibility issues, inefficient routing, and lack of predictive capabilities to handle disruptions and optimize costs.`,
      approach: `Built a comprehensive platform using machine learning for demand forecasting, blockchain for transparency, and real-time analytics for optimization.`,
      solution: `The system provides end-to-end supply chain visibility, predictive analytics for demand planning, and automated optimization for cost reduction.`,
      architecture: `Frontend: React + Redux + Material-UI
Backend: Python Django + Celery
Analytics: Apache Spark + MLlib
Infrastructure: Kubernetes + Docker
Blockchain: Hyperledger Fabric`,
      features: [
        "Real-time shipment tracking","Predictive demand forecasting","Route optimization algorithms","Supplier performance analytics","Blockchain-based transparency","Automated inventory management"
      ],
      codeSnippet: `# Supply chain optimization algorithm
def optimize_supply_chain(demand_forecast, inventory_levels):
    optimization_model = LinearProgramming()
    
    constraints = [
        inventory_levels >= safety_stock,
        transportation_capacity <= max_capacity,
        delivery_time <= customer_requirements
    ]
    
    return optimization_model.solve(
        objective=minimize_total_cost,
        constraints=constraints
    )`,
      impactMetrics: [
        { label: "Cost Reduction", value: "30%", change: "↓ Operational savings" },
        { label: "Delivery Time", value: "25%", change: "↓ Faster deliveries" },
        { label: "Inventory Turnover", value: "+140%", change: "↑ Efficiency gain" }
      ],
      businessImpact: "Reduced supply chain costs by 30% and improved delivery times by 25%. The platform manages over $2B in annual supply chain operations.",
      testimonial: {
        quote: "This platform gave us unprecedented visibility into our global supply chain. We can now predict and prevent disruptions before they impact our customers.",author: "Robert Kim",role: "VP of Supply Chain, GlobalCorp",avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      lessons: [
        "Supply chain optimization requires balancing multiple competing objectives","Real-time data integration from multiple sources is complex but essential","Machine learning models need continuous retraining with new market conditions"
      ],
      improvements: [
        "Add sustainability metrics and carbon footprint tracking","Implement AI-powered risk assessment","Expand blockchain integration for full traceability"
      ]
    }
  ];

  // Mock stats data
  const stats = {
    totalProjects: 25,
    liveProjects: 18,
    happyClients: 50,
    technologies: 30
  };

  // Get unique categories and technologies for filtering
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const technologies = ['All', ...new Set(projects.flatMap(p => p.technologies))];

  // Featured project (first project)
  const featuredProject = projects[0];

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
      const techMatch = selectedTech === 'All' || project.technologies.includes(selectedTech);
      const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
      
      return categoryMatch && techMatch && statusMatch;
    });
  }, [selectedCategory, selectedTech, selectedStatus]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewDemo = (project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTech('All');
    setSelectedStatus('All');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Project Showcase Galaxy - Jaimish S. Lakhani Portfolio</title>
        <meta name="description" content="Explore my comprehensive project portfolio featuring web applications, mobile apps, and innovative solutions across various technologies." />
        <meta name="keywords" content="projects, web development, mobile apps, portfolio, React, Node.js, full-stack" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-accent rounded-xl">
                <Icon name="Rocket" size={32} className="text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
                Project Galaxy
              </h1>
            </div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore a universe of innovative solutions where technical excellence meets business impact. 
              Each project represents a journey from challenge to transformation.
            </p>
          </div>

          {/* Project Stats */}
          <ProjectStats stats={stats} />
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedProject
            project={featuredProject}
            onViewDetails={handleViewDetails}
            onViewDemo={handleViewDemo}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-2">
                All Projects
              </h2>
              <p className="text-text-secondary">
                Discover the full spectrum of solutions and innovations
              </p>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-surface rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'grid' ?'bg-background text-text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="Grid3X3" size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === 'list' ?'bg-background text-text-primary shadow-sm' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="List" size={20} />
              </button>
            </div>
          </div>

          {/* Project Filters */}
          <ProjectFilter
            categories={categories}
            technologies={technologies}
            selectedCategory={selectedCategory}
            selectedTech={selectedTech}
            selectedStatus={selectedStatus}
            onCategoryChange={setSelectedCategory}
            onTechChange={setSelectedTech}
            onStatusChange={setSelectedStatus}
            onClearFilters={handleClearFilters}
            projectCount={filteredProjects.length}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
            }`}>
              {filteredProjects.slice(1).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                  onViewDemo={handleViewDemo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Icon name="Search" size={48} className="text-text-tertiary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No projects found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to see more projects
              </p>
              <Button
                variant="primary"
                onClick={handleClearFilters}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-accent to-brand-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/collaboration-studio'}
              iconName="MessageCircle"
              iconPosition="left"
            >
              Start Collaboration
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.location.href = '/technical-mastery-center'}
              iconName="Code"
              iconPosition="left"
              className="text-white border-white hover:bg-white hover:text-accent"
            >
              View Skills
            </Button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectShowcaseGalaxy;