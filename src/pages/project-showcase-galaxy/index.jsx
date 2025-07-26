import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectModal from './components/ProjectModal';
import ScrollStack, { ScrollStackItem } from '../../components/ui/ScrollStack';

const ProjectShowcaseGalaxy = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      description: "A comprehensive e-commerce backend solution that handles 1M+ daily transactions with microservices architecture and real-time data processing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"],
      metrics: {
        performance: "99.8%",
        users: "1M+",
        impact: "+280%"
      },
      demoUrl: "https://api-ecommerce.example.com/docs",
      githubUrl: "https://github.com/example/ecommerce-backend",
      challenge: `The client needed a scalable backend system that could handle massive traffic spikes during sales events while maintaining sub-100ms response times and 99.9% uptime.`,
      approach: `I designed a microservices architecture using Node.js and Express.js, implemented intelligent caching with Redis, and deployed on AWS with auto-scaling. The system handles payment processing, inventory management, and real-time analytics.`,
      solution: `The final system processes 10,000+ concurrent requests with average response times of 45ms. Microservices architecture enables independent scaling and deployment of different components.`,
      architecture: `API Gateway: Express.js with rate limiting and authentication
Services: User Management, Product Catalog, Order Processing, Payment
Database: MongoDB with read replicas and sharding
Cache: Redis Cluster for sessions and frequently accessed data
Infrastructure: AWS ECS with auto-scaling groups
Monitoring: CloudWatch + ELK Stack`,
      features: [
        "Microservices architecture with service mesh",
        "Real-time inventory and order processing",
        "Advanced caching strategies with Redis",
        "Auto-scaling infrastructure on AWS",
        "Comprehensive API documentation with Swagger",
        "Real-time analytics and monitoring dashboard",
        "Secure payment processing with multiple gateways",
        "Event-driven architecture with message queues"
      ],
      codeSnippet: `// High-performance API endpoint with caching
const express = require('express');
const redis = require('redis');
const app = express();
const cache = redis.createClient();

app.get('/api/products/:category', async (req, res) => {
  const { category } = req.params;
  const cacheKey = \`products:\${category}\`;
  
  // Check cache first
  const cached = await cache.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  // Fetch from database with optimized query
  const products = await Product.find({ category })
    .populate('reviews', 'rating')
    .select('name price description images stock')
    .lean();
  
  // Cache for 5 minutes
  await cache.setex(cacheKey, 300, JSON.stringify(products));
  
  res.json(products);
});`,
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
      technologies: ["Node.js", "TypeScript", "WebSocket", "Python", "Redis", "Kafka"],
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
      architecture: `Frontend: Next.js + TypeScript + WebSocket
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
      technologies: ["Node.js", "Python", "Apache Spark", "Kubernetes", "Blockchain"],
      metrics: {
        performance: "96%",users: "8K+",impact: "+140%"
      },
      demoUrl: "https://demo-supply.example.com",githubUrl: "https://github.com/example/supply-chain",
      challenge: `Global supply chains faced visibility issues, inefficient routing, and lack of predictive capabilities to handle disruptions and optimize costs.`,
      approach: `Built a comprehensive platform using machine learning for demand forecasting, blockchain for transparency, and real-time analytics for optimization.`,
      solution: `The system provides end-to-end supply chain visibility, predictive analytics for demand planning, and automated optimization for cost reduction.`,
      architecture: `Frontend: Next.js + Redux + Material-UI
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

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewDemo = (project) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Project Showcase Galaxy - Jaimish S. Lakhani Portfolio</title>
        <meta name="description" content="Explore my comprehensive project portfolio featuring web applications, mobile apps, and innovative solutions across various technologies." />
        <meta name="keywords" content="projects, web development, mobile apps, portfolio, Node.js, backend, microservices" />
      </Helmet>
      
      <Header />
      
      {/* Full Screen ScrollStack */}
      <div className="h-screen pt-16">
        <ScrollStack 
          className="w-full h-full"
          itemDistance={150}
          itemScale={0.02}
          itemStackDistance={25}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.9}
          blurAmount={0.5}
        >
          {projects.map((project) => (
            <ScrollStackItem 
              key={project.id}
              itemClassName="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
                {/* Project Image */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="relative h-48 lg:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="lg:w-2/3 flex flex-col min-h-0 overflow-hidden">
                  <div className="flex-1 min-h-0 overflow-y-auto pr-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <span className="flex items-center space-x-1">
                            <Icon name="Calendar" size={14} />
                            <span>{project.year}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="Tag" size={14} />
                            <span>{project.category}</span>
                          </span>
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={14} className="text-yellow-500" />
                            <span>{project.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-surface text-text-secondary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-surface text-text-secondary rounded-full text-xs font-medium">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Action Buttons - Fixed at bottom */}
                  <div className="flex-shrink-0 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleViewDetails(project)}
                        iconName="Eye"
                        iconPosition="left"
                        className="flex-1 text-xs py-2"
                      >
                        Details
                      </Button>
                      {project.demoUrl && (
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleViewDemo(project)}
                          iconName="ExternalLink"
                          iconPosition="left"
                          className="flex-1 text-xs py-2"
                        >
                          Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          iconName="Github"
                          iconPosition="left"
                          className="flex-1 text-xs py-2"
                        >
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>

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