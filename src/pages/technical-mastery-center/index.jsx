import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import ChromaGrid from '../../components/ui/ChromaGrid';

const TechnicalMasteryCenter = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [tabAnimated, setTabAnimated] = useState(new Set());
  const observerRef = useRef();
  const elementsRef = useRef([]);

  // Add element to refs for intersection observer
  const addToRefs = useCallback((el, id) => {
    if (el && !elementsRef.current.find(item => item.id === id)) {
      elementsRef.current.push({ element: el, id });
    }
  }, []);

  // Intersection Observer setup
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = elementsRef.current.find(item => item.element === entry.target)?.id;
          if (elementId) {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    elementsRef.current.forEach(({ element }) => {
      if (element) observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [activeSection]);

  // Trigger tab animation when section changes
  useEffect(() => {
    setTabAnimated(prev => new Set([...prev, activeSection]));
  }, [activeSection]);

  // Mock data for skills
  const skills = [
    {
      id: 1,
      name: "Node.js",
      category: "Backend",
      icon: "Server",
      proficiency: "Expert",
      proficiencyLevel: 95,
      recency: "Current",
      experience: "6+ years",
      description: "Advanced Node.js development with Express, Fastify, and microservices architecture",
      projects: ["Payment Gateway", "Real-time Chat API", "Microservices Platform"],
      lastUsed: "Today"
    },
    {
      id: 2,
      name: "MongoDB",
      category: "Database",
      icon: "Database",
      proficiency: "Expert",
      proficiencyLevel: 92,
      recency: "Current",
      experience: "5+ years",
      description: "NoSQL database design, aggregation pipelines, indexing, and performance optimization",
      projects: ["E-commerce Backend", "Analytics Platform", "Content Management System"],
      lastUsed: "Today"
    },
    {
      id: 3,
      name: "Express.js",
      category: "Backend",
      icon: "Route",
      proficiency: "Expert",
      proficiencyLevel: 94,
      recency: "Current",
      experience: "6+ years",
      description: "RESTful API development, middleware design, and performance optimization",
      projects: ["API Gateway", "Authentication Service", "E-commerce Backend"],
      lastUsed: "Today"
    },
    {
      id: 4,
      name: "Redis",
      category: "Database",
      icon: "Zap",
      proficiency: "Advanced",
      proficiencyLevel: 88,
      recency: "Current",
      experience: "4+ years",
      description: "Caching, session management, pub/sub messaging, and distributed locks",
      projects: ["High-Performance API", "Real-time Analytics", "Session Store"],
      lastUsed: "2 days ago"
    },
    {
      id: 5,
      name: "AWS",
      category: "Cloud",
      icon: "Cloud",
      proficiency: "Advanced",
      proficiencyLevel: 89,
      recency: "Current",
      experience: "4+ years",
      description: "EC2, Lambda, RDS, S3, CloudWatch, and serverless architecture",
      projects: ["Scalable Microservices", "Data Pipeline", "Auto-scaling Infrastructure"],
      lastUsed: "Yesterday"
    },
    {
      id: 6,
      name: "Firebase",
      category: "Backend",
      icon: "Flame",
      proficiency: "Advanced",
      proficiencyLevel: 85,
      recency: "Current",
      experience: "3+ years",
      description: "Firestore, Authentication, Cloud Functions, and real-time databases",
      projects: ["Real-time Chat App", "Mobile Backend", "Analytics Dashboard"],
      lastUsed: "1 week ago"
    },
    {
      id: 7,
      name: "SQL",
      category: "Database",
      icon: "Database",
      proficiency: "Advanced",
      proficiencyLevel: 90,
      recency: "Current",
      experience: "5+ years",
      description: "PostgreSQL, MySQL, query optimization, indexing, and database design",
      projects: ["Financial System", "Inventory Management", "Analytics Platform"],
      lastUsed: "3 days ago"
    },
    {
      id: 8,
      name: "Microservices",
      category: "Architecture",
      icon: "Grid",
      proficiency: "Expert",
      proficiencyLevel: 93,
      recency: "Current",
      experience: "4+ years",
      description: "Distributed systems, service mesh, API gateways, and containerization",
      projects: ["E-commerce Platform", "Payment System", "Analytics Pipeline"],
      lastUsed: "Today"
    },
    {
      id: 9,
      name: "Docker",
      category: "DevOps",
      icon: "Package",
      proficiency: "Advanced",
      proficiencyLevel: 87,
      recency: "Current",
      experience: "4+ years",
      description: "Containerization, multi-stage builds, Docker Compose, and orchestration",
      projects: ["Microservices Deployment", "CI/CD Pipeline", "Development Environment"],
      lastUsed: "Today"
    },
    {
      id: 10,
      name: "TypeScript",
      category: "Language",
      icon: "FileCode",
      proficiency: "Advanced",
      proficiencyLevel: 85,
      recency: "Current",
      experience: "4+ years",
      description: "Type-safe JavaScript development with advanced type system knowledge",
      projects: ["Enterprise API", "Microservices", "CLI Tools"],
      lastUsed: "Yesterday"
    }
  ];

  // ChromaGrid items for interactive skills showcase
  const skillsGridItems = [
    {
      id: 1,
      title: "React",
      description: "Component-based library for building user interfaces",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      category: "Frontend"
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Dynamic programming language for web development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
      category: "Language"
    },
    {
      id: 3,
      title: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      category: "Backend"
    },
    {
      id: 4,
      title: "Python",
      description: "High-level programming language with elegant syntax",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
      category: "Language"
    },
    {
      id: 5,
      title: "TypeScript",
      description: "Typed superset of JavaScript for scalable applications",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      category: "Language"
    },
    {
      id: 6,
      title: "Docker",
      description: "Platform for developing, shipping, and running applications",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
      category: "DevOps"
    },
    {
      id: 7,
      title: "Redis",
      description: "In-memory data structure store for caching and sessions",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      color: "#DC382D",
      category: "Database"
    },
    {
      id: 8,
      title: "MongoDB",
      description: "NoSQL document database for modern applications",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      category: "Database"
    },
    {
      id: 9,
      title: "SQL",
      description: "Structured Query Language for relational databases",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
      category: "Database"
    },
    {
      id: 10,
      title: "Firebase",
      description: "Backend-as-a-Service platform by Google",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "#FFCA28",
      category: "Backend"
    }
  ];

  // Mock data for code examples
  const codeExamples = [
    {
      id: 1,
      title: "Express.js API with MongoDB Integration",
      language: "JavaScript",
      difficulty: "Advanced",
      icon: "Server",
      description: "Building scalable REST API with Express.js, MongoDB, and proper error handling",
      code: `const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

const app = express();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);
app.use(express.json());

// User schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Get users with pagination and filtering
app.get('/api/users', async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;
    const query = search ? { 
      $or: [
        { 'profile.firstName': { $regex: search, $options: 'i' } },
        { 'profile.lastName': { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ]
    } : {};

    const users = await User.find(query)
      .select('-password')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);
    
    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
      output: "✅ Users retrieved successfully\n📊 Pagination: 10 users per page\n🔍 Search functionality active\n⚡ Query optimized with indexes",
      explanation: "This example demonstrates building scalable REST APIs with Express.js and MongoDB. It includes pagination, search functionality, rate limiting, and proper error handling patterns.",
      keyPoints: [
        "Rate limiting for API protection",
        "MongoDB aggregation and filtering",
        "Pagination for large datasets",
        "Proper error handling and logging"
      ],
      complexity: "O(log n)",
      timeComplexity: "O(log n) with proper indexing",
      spaceComplexity: "O(1) for pagination"
    },
    {
      id: 2,
      title: "Redis Caching Strategy",
      language: "JavaScript",
      difficulty: "Advanced",
      icon: "Zap",
      description: "Implementing intelligent caching with Redis for high-performance APIs",
      code: `const redis = require('redis');
const client = redis.createClient();

// Cache middleware for Express
const cacheMiddleware = (ttl = 300) => {
  return async (req, res, next) => {
    const key = \`cache:\${req.originalUrl}\`;
    
    try {
      const cachedData = await client.get(key);
      
      if (cachedData) {
        console.log('Cache hit:', key);
        return res.json({
          data: JSON.parse(cachedData),
          cached: true,
          timestamp: new Date()
        });
      }
      
      // Store original json method
      const originalJson = res.json;
      
      // Override res.json to cache the response
      res.json = function(data) {
        // Cache the response
        client.setex(key, ttl, JSON.stringify(data));
        console.log('Data cached:', key);
        
        // Call original json method
        originalJson.call(this, data);
      };
      
      next();
    } catch (error) {
      console.error('Cache error:', error);
      next();
    }
  };
};

// Usage in routes
app.get('/api/products', cacheMiddleware(600), async (req, res) => {
  const products = await Product.find().populate('category');
  res.json({ products, cached: false });
});

// Cache invalidation
async function invalidateCache(pattern) {
  const keys = await client.keys(pattern);
  if (keys.length > 0) {
    await client.del(keys);
    console.log(\`Invalidated \${keys.length} cache entries\`);
  }
}`,
      output: "🚀 Cache hit ratio: 85%\n⚡ Response time: 15ms (vs 250ms)\n💾 Memory usage optimized\n🔄 Auto-invalidation on updates",
      explanation: "This caching strategy reduces database load and improves API response times. It includes automatic cache invalidation, TTL management, and intelligent cache key generation.",
      keyPoints: [
        "Middleware-based caching approach",
        "Automatic response caching",
        "Cache invalidation strategies",
        "Performance monitoring built-in"
      ],
      complexity: "O(1)",
      timeComplexity: "O(1) for cache operations",
      spaceComplexity: "O(n) for cached data"
    },
    {
      id: 3,
      title: "Microservices Communication",
      language: "JavaScript",
      difficulty: "Expert",
      icon: "Grid",
      description: "Inter-service communication with message queues and circuit breakers",
      code: `const axios = require('axios');
const CircuitBreaker = require('opossum');

// Circuit breaker configuration
const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000,
  rollingCountTimeout: 10000,
  rollingCountBuckets: 10
};

// Service communication wrapper
class ServiceClient {
  constructor(baseURL, serviceName) {
    this.baseURL = baseURL;
    this.serviceName = serviceName;
    this.breaker = new CircuitBreaker(this.makeRequest.bind(this), options);
    
    // Event handlers
    this.breaker.on('open', () => 
      console.log(\`Circuit breaker opened for \${serviceName}\`));
    this.breaker.on('halfOpen', () => 
      console.log(\`Circuit breaker half-open for \${serviceName}\`));
  }

  async makeRequest(endpoint, options = {}) {
    const config = {
      url: \`\${this.baseURL}\${endpoint}\`,
      timeout: 5000,
      ...options
    };
    
    const response = await axios(config);
    return response.data;
  }

  async get(endpoint, options) {
    try {
      return await this.breaker.fire(endpoint, { method: 'GET', ...options });
    } catch (error) {
      console.error(\`\${this.serviceName} service error:\`, error.message);
      return this.getFallbackData(endpoint);
    }
  }

  getFallbackData(endpoint) {
    // Return cached or default data when service is down
    return { 
      error: true, 
      message: \`\${this.serviceName} temporarily unavailable\`,
      fallback: true 
    };
  }
}

// Usage
const userService = new ServiceClient('http://user-service:3001', 'UserService');
const orderService = new ServiceClient('http://order-service:3002', 'OrderService');

// API endpoint that combines multiple services
app.get('/api/user-dashboard/:userId', async (req, res) => {
  const { userId } = req.params;
  
  try {
    const [user, orders, recommendations] = await Promise.allSettled([
      userService.get(\`/users/\${userId}\`),
      orderService.get(\`/orders/user/\${userId}\`),
      userService.get(\`/recommendations/\${userId}\`)
    ]);

    res.json({
      user: user.status === 'fulfilled' ? user.value : null,
      orders: orders.status === 'fulfilled' ? orders.value : [],
      recommendations: recommendations.status === 'fulfilled' ? recommendations.value : [],
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: 'Dashboard service error' });
  }
});`,
      output: "🔄 Circuit breaker: CLOSED (healthy)\n📊 Success rate: 96.8%\n⚡ Average response: 180ms\n🛡️ Fallback responses: 3.2%",
      explanation: "This microservices pattern ensures resilient communication between services using circuit breakers, timeouts, and fallback strategies for high availability.",
      keyPoints: [
        "Circuit breaker pattern implementation",
        "Graceful service degradation", 
        "Parallel service calls with Promise.allSettled",
        "Fallback data for service failures"
      ],
      complexity: "O(1)",
      timeComplexity: "O(1) per service call",
      spaceComplexity: "O(k) for k services"
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
      title: "Database Performance Bottleneck in Production API",
      context: "High-traffic e-commerce API experiencing slow response times and timeouts during peak hours",
      problem: {
        issue: "API response times increased from 100ms to 5000ms, causing user experience degradation",
        impact: "40% drop in conversion rate, customer complaints, potential revenue loss of $50k/day",
        constraints: ["Cannot take API offline", "Must maintain data consistency", "Peak traffic ongoing"]
      },
      metrics: [
        { name: "Response Time", before: "5000ms", after: "120ms" },
        { name: "Database CPU", before: "95%", after: "45%" },
        { name: "Throughput", before: "100 req/s", after: "800 req/s" }
      ],
      steps: [
        {
          title: "Identify Performance Bottleneck",
          icon: "Search",
          description: "Use monitoring tools to identify slow database queries and resource usage",
          code: `// MongoDB profiling to find slow queries
db.setProfilingLevel(2, { slowms: 100 });

// Check current operations
db.currentOp({
  "active": true,
  "secs_running": { "$gt": 1 }
});

// Analyze slow query log
db.system.profile.find().limit(5).sort({ ts: -1 }).pretty();

// Found: Missing indexes on frequently queried fields
db.products.find({ 
  category: "electronics", 
  price: { $gte: 100, $lte: 1000 },
  inStock: true 
}).explain("executionStats");`,
          whatWorked: "MongoDB profiler revealed missing compound indexes causing full collection scans",
          lessonsLearned: "Regular query performance analysis should be automated"
        },
        {
          title: "Implement Database Optimization",
          icon: "Target", 
          description: "Create compound indexes and optimize query patterns",
          code: `// Create compound indexes
db.products.createIndex({ 
  "category": 1, 
  "price": 1, 
  "inStock": 1 
});

// Optimize aggregation pipeline
db.products.aggregate([
  { $match: { category: "electronics", inStock: true }},
  { $addFields: { 
    priceRange: {
      $switch: {
        branches: [
          { case: { $lt: ["$price", 100] }, then: "budget" },
          { case: { $lt: ["$price", 500] }, then: "mid" },
          { case: { $gte: ["$price", 500] }, then: "premium" }
        ]
      }
    }
  }},
  { $group: { 
    _id: "$priceRange", 
    count: { $sum: 1 },
    avgPrice: { $avg: "$price" }
  }}
]);

// Add read preferences for analytics queries
const analyticsDB = db.getMongo().getDB("ecommerce")
  .withReadPreference("secondary");`,
          whatWorked: "Compound indexes reduced query time from 4000ms to 15ms",
          lessonsLearned: "Index strategy should align with query patterns, not just individual fields"
        },
        {
          title: "Implement Caching Layer",
          icon: "Wrench",
          description: "Add Redis caching for frequently accessed data",
          code: `const redis = require('redis');
const client = redis.createClient();

// Multi-level caching strategy
async function getProductsByCategory(category, page = 1) {
  const cacheKey = \`products:\${category}:page:\${page}\`;
  
  // L1: Redis cache
  let products = await client.get(cacheKey);
  if (products) {
    return JSON.parse(products);
  }
  
  // L2: Database with optimized query
  products = await Product.find({ category })
    .limit(20)
    .skip((page - 1) * 20)
    .sort({ createdAt: -1 })
    .lean(); // Use lean() for better performance
  
  // Cache for 5 minutes
  await client.setex(cacheKey, 300, JSON.stringify(products));
  
  return products;
}

// Cache warming for popular categories
async function warmCache() {
  const popularCategories = ['electronics', 'clothing', 'books'];
  for (const category of popularCategories) {
    await getProductsByCategory(category, 1);
  }
}`,
          whatWorked: "Redis caching reduced database load by 80% and improved response times to 50ms",
          lessonsLearned: "Cache warming strategies prevent cache misses during traffic spikes"
        },
        {
          title: "Monitor and Scale",
          icon: "CheckCircle",
          description: "Implement monitoring and auto-scaling for sustained performance",
          code: `// Real-time performance monitoring
const monitor = {
  async checkDBPerformance() {
    const stats = await db.runCommand({ dbStats: 1 });
    const currentOp = await db.currentOp();
    
    const metrics = {
      activeConnections: currentOp.inprog.length,
      avgOperationTime: currentOp.inprog.reduce((acc, op) => 
        acc + (op.secs_running || 0), 0) / currentOp.inprog.length,
      memoryUsage: stats.dataSize + stats.indexSize,
      timestamp: new Date()
    };
    
    // Alert if thresholds exceeded
    if (metrics.avgOperationTime > 1000) {
      await this.sendAlert('High DB operation time', metrics);
    }
    
    return metrics;
  },
  
  async checkCacheHitRate() {
    const info = await client.info('stats');
    const hitRate = info.keyspace_hits / 
      (info.keyspace_hits + info.keyspace_misses) * 100;
    
    if (hitRate < 80) {
      await this.adjustCachingStrategy();
    }
    
    return hitRate;
  }
};

// Set up monitoring intervals
setInterval(() => monitor.checkDBPerformance(), 30000);
setInterval(() => monitor.checkCacheHitRate(), 60000);`,
          whatWorked: "Automated monitoring and alerting prevents performance degradation",
          lessonsLearned: "Proactive monitoring with automated responses scales better than manual intervention"
        }
      ]
    }
  ];

  // Mock data for performance benchmarks
  const benchmarks = [
    {
      id: 1,
      title: "API Response Time Optimization Comparison",
      description: "Comparing different optimization strategies for high-traffic Node.js APIs",
      metrics: [
        { key: 'performance', name: 'Response Time', icon: 'Clock', description: 'Average response time under load' },
        { key: 'memory', name: 'Memory Usage', icon: 'HardDrive', description: 'Peak memory consumption' },
        { key: 'scalability', name: 'Throughput', icon: 'TrendingUp', description: 'Requests per second capacity' }
      ],
      performanceData: [
        { approach: 'Basic Express', value: 450 },
        { approach: 'With Redis Cache', value: 85 },
        { approach: 'Connection Pooling', value: 120 },
        { approach: 'Full Optimization', value: 45 }
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
      title: "Node.js Microservices Architecture",
      type: "course",
      description: "Comprehensive guide to building scalable microservices with Node.js, Docker, and Kubernetes",
      difficulty: "Advanced",
      duration: "12 hours",
      rating: "4.9",
      tags: ["Node.js", "Microservices", "Docker", "Kubernetes", "Architecture"],
      url: "https://example.com/nodejs-microservices",
      learningOutcomes: [
        "Design microservices architecture patterns",
        "Implement service discovery and API gateways",
        "Master inter-service communication strategies",
        "Deploy scalable services with Docker and Kubernetes"
      ],
      keyTakeaways: "This course revolutionized how I approach distributed systems. The patterns for service communication reduced my deployment complexity by 70%.",
      personalNote: "Essential for any backend engineer working on distributed systems. The real-world examples are invaluable.",
      bestFor: "Senior backend developers building enterprise-scale applications",
      prerequisites: ["Node.js", "Docker basics", "RESTful APIs"],
      dateAdded: "2024-01-15",
      lastUpdated: "2024-03-10"
    },
    {
      id: 2,
      title: "MongoDB Performance Optimization",
      type: "book",
      description: "Advanced MongoDB techniques for query optimization, indexing strategies, and scaling",
      difficulty: "Advanced",
      duration: "8 hours",
      rating: "4.8",
      tags: ["MongoDB", "Database", "Performance", "Indexing", "Scaling"],
      url: "https://example.com/mongodb-optimization",
      learningOutcomes: [
        "Master compound indexing strategies",
        "Optimize aggregation pipelines for performance",
        "Implement effective sharding and replication",
        "Design schemas for optimal query patterns"
      ],
      keyTakeaways: "The indexing strategies alone improved my API response times by 85%. Excellent real-world scenarios throughout.",
      personalNote: "This book saved our production database. The performance optimization techniques are battle-tested.",
      bestFor: "Database administrators and backend engineers working with MongoDB at scale",
      prerequisites: ["MongoDB basics", "Database design concepts"],
      dateAdded: "2024-02-01",
      lastUpdated: "2024-03-05"
    },
    {
      id: 3,
      title: "AWS Solutions Architecture",
      type: "video",
      description: "Complete AWS course covering serverless, containers, databases, and infrastructure as code",
      difficulty: "Intermediate",
      duration: "15 hours",
      rating: "4.7",
      tags: ["AWS", "Cloud", "Serverless", "Infrastructure", "DevOps"],
      url: "https://example.com/aws-architecture",
      learningOutcomes: [
        "Design cost-effective cloud architectures",
        "Implement serverless applications with Lambda",
        "Master AWS database services (RDS, DynamoDB)",
        "Build CI/CD pipelines with AWS services"
      ],
      keyTakeaways: "Practical approach with real deployment scenarios. The cost optimization strategies reduced our AWS bill by 40%.",
      personalNote: "Perfect for developers transitioning to cloud-native architectures. Excellent hands-on labs.",
      bestFor: "Backend engineers looking to master cloud infrastructure and deployment",
      prerequisites: ["Basic cloud concepts", "Linux command line"],
      dateAdded: "2024-01-20",
      lastUpdated: "2024-02-28"
    },
    {
      id: 4,
      title: "Redis Advanced Patterns",
      type: "course",
      description: "Advanced Redis usage patterns for caching, pub/sub, and distributed systems",
      difficulty: "Advanced", 
      duration: "6 hours",
      rating: "4.8",
      tags: ["Redis", "Caching", "Performance", "Distributed Systems"],
      url: "https://example.com/redis-patterns",
      learningOutcomes: [
        "Implement intelligent caching strategies",
        "Build real-time applications with pub/sub",
        "Master Redis data structures for optimization",
        "Design distributed locks and rate limiting"
      ],
      keyTakeaways: "The caching patterns transformed our API performance. Response times dropped from 800ms to 50ms average.",
      personalNote: "Must-read for anyone serious about backend performance. The distributed systems patterns are gold.",
      bestFor: "Backend engineers optimizing for high-performance applications",
      prerequisites: ["Redis basics", "Backend development experience"],
      dateAdded: "2024-02-15",
      lastUpdated: "2024-03-12"
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
      <section className="pt-20 pb-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg">
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
            <div 
              className={`space-y-8 transform transition-all duration-1000 ${
                tabAnimated.has('skills') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div 
                className={`text-center transform transition-all duration-800 delay-200 ${
                  tabAnimated.has('skills') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                ref={(el) => addToRefs(el, 'skills-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Skills & Expertise</h2>
                <p className="text-text-secondary max-w-2xl mx-auto mb-8">
                  Interactive showcase of technical skills and expertise. Hover over each technology 
                  to explore detailed information and experience level.
                </p>
              </div>

              {/* Interactive ChromaGrid Skills Showcase with Staggered Animation */}
              <div 
                className={`transform transition-all duration-1000 delay-400 ${
                  tabAnimated.has('skills') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-16 scale-90'
                }`}
                style={{
                  transform: `translateY(${tabAnimated.has('skills') ? 0 : 40}px) scale(${tabAnimated.has('skills') ? 1 : 0.9})`,
                  filter: `blur(${tabAnimated.has('skills') ? 0 : 4}px)`
                }}
                ref={(el) => addToRefs(el, 'skills-grid')}
              >
                <ChromaGrid items={skillsGridItems} />
              </div>
            </div>
          )}

          {/* Code Playground */}
          {activeSection === 'playground' && (
            <div 
              className={`space-y-8 transform transition-all duration-1200 ${
                tabAnimated.has('playground') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div 
                className={`text-center transform transition-all duration-800 delay-300 ${
                  tabAnimated.has('playground') 
                    ? 'opacity-100 translate-x-0 rotate-0' 
                    : 'opacity-0 -translate-x-8 rotate-1'
                }`}
                ref={(el) => addToRefs(el, 'playground-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Interactive Code Playground</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Explore live code examples demonstrating advanced techniques and best practices. 
                  Each example includes detailed explanations and performance considerations.
                </p>
              </div>

              <div 
                className={`space-y-8 transform transition-all duration-1000 delay-500 ${
                  tabAnimated.has('playground') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-16'
                }`}
                ref={(el) => addToRefs(el, 'playground-content')}
              >
                {codeExamples.map((example, index) => (
                  <div
                    key={example.id}
                    className={`transform transition-all duration-700 ${
                      tabAnimated.has('playground') 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-12'
                    }`}
                    style={{ 
                      transitionDelay: `${700 + index * 200}ms`,
                      transform: `translateX(${tabAnimated.has('playground') ? 0 : 30}px)`
                    }}
                  >
                    <CodePlayground example={example} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Diagrams */}
          {activeSection === 'architecture' && (
            <div 
              className={`space-y-8 transform transition-all duration-1000 ${
                tabAnimated.has('architecture') 
                  ? 'opacity-100 rotateY-0' 
                  : 'opacity-0 rotateY-90'
              }`}
              style={{
                transform: `rotateY(${tabAnimated.has('architecture') ? 0 : 90}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div 
                className={`text-center transform transition-all duration-800 delay-200 ${
                  tabAnimated.has('architecture') 
                    ? 'opacity-100 rotateX-0' 
                    : 'opacity-0 rotateX-15'
                }`}
                style={{
                  transform: `rotateX(${tabAnimated.has('architecture') ? 0 : 15}deg)`
                }}
                ref={(el) => addToRefs(el, 'architecture-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">System Architecture</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Explore architectural decisions, trade-offs, and scaling considerations 
                  from real-world projects. Each diagram includes detailed explanations of design choices.
                </p>
              </div>

              <div 
                className={`space-y-8 transform transition-all duration-1200 delay-400 ${
                  tabAnimated.has('architecture') 
                    ? 'opacity-100 rotateY-0' 
                    : 'opacity-0 rotateY-45'
                }`}
                style={{
                  transform: `rotateY(${tabAnimated.has('architecture') ? 0 : 45}deg)`,
                  transformStyle: 'preserve-3d'
                }}
                ref={(el) => addToRefs(el, 'architecture-content')}
              >
                {architectures.map((architecture, index) => (
                  <div
                    key={architecture.id}
                    className={`transform transition-all duration-800 ${
                      tabAnimated.has('architecture') 
                        ? 'opacity-100 rotateY-0 scale-100' 
                        : 'opacity-0 rotateY-90 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${600 + index * 250}ms`,
                      transform: `rotateY(${tabAnimated.has('architecture') ? 0 : 90}deg) scale(${tabAnimated.has('architecture') ? 1 : 0.95})`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <ArchitectureDiagram architecture={architecture} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Solving */}
          {activeSection === 'problem-solving' && (
            <div 
              className={`space-y-8 transform transition-all duration-1100 ${
                tabAnimated.has('problem-solving') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div 
                className={`text-center transform transition-all duration-700 delay-100 ${
                  tabAnimated.has('problem-solving') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-12 scale-90'
                }`}
                style={{
                  animation: tabAnimated.has('problem-solving') ? 'bounce 1s ease-out 0.5s' : 'none'
                }}
                ref={(el) => addToRefs(el, 'problem-solving-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Problem-Solving Approach</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Step through real debugging scenarios and optimization challenges. 
                  Learn the methodology behind identifying, analyzing, and solving complex technical problems.
                </p>
              </div>

              <div 
                className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                  tabAnimated.has('problem-solving') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-16'
                }`}
                ref={(el) => addToRefs(el, 'problem-solving-content')}
              >
                {scenarios.map((scenario, index) => (
                  <div
                    key={scenario.id}
                    className={`transform transition-all duration-600 ${
                      tabAnimated.has('problem-solving') 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-10 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${500 + index * 150}ms`,
                      animation: tabAnimated.has('problem-solving') ? `bounce 0.8s ease-out ${800 + index * 150}ms` : 'none'
                    }}
                  >
                    <ProblemSolvingScenario scenario={scenario} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Performance Benchmarks */}
          {activeSection === 'benchmarks' && (
            <div 
              className={`space-y-8 transform transition-all duration-1000 ${
                tabAnimated.has('benchmarks') 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div 
                className={`text-center transform transition-all duration-800 delay-150 ${
                  tabAnimated.has('benchmarks') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-6 scale-95'
                }`}
                ref={(el) => addToRefs(el, 'benchmarks-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Performance Benchmarks</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Compare different implementation approaches with real performance metrics. 
                  Understand when to use each technique based on specific use cases and constraints.
                </p>
              </div>

              <div 
                className={`space-y-8 transform transition-all duration-1000 delay-400 ${
                  tabAnimated.has('benchmarks') 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-90'
                }`}
                ref={(el) => addToRefs(el, 'benchmarks-content')}
              >
                {benchmarks.map((benchmark, index) => (
                  <div
                    key={benchmark.id}
                    className={`transform transition-all duration-700 ${
                      tabAnimated.has('benchmarks') 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-6 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${600 + index * 150}ms`
                    }}
                  >
                    <PerformanceBenchmark benchmark={benchmark} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learning Resources */}
          {activeSection === 'resources' && (
            <div 
              className={`space-y-8 transform transition-all duration-1300 ${
                tabAnimated.has('resources') 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div 
                className={`text-center transform transition-all duration-900 delay-200 ${
                  tabAnimated.has('resources') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                }`}
                ref={(el) => addToRefs(el, 'resources-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Curated Learning Resources</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Discover the books, courses, and tools that have shaped my technical expertise. 
                  Each resource includes personal insights and recommendations for different skill levels.
                </p>
              </div>

              <div 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transform transition-all duration-1100 delay-500 ${
                  tabAnimated.has('resources') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-24'
                }`}
                ref={(el) => addToRefs(el, 'resources-grid')}
              >
                {learningResources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className={`transform transition-all duration-600 ${
                      tabAnimated.has('resources') 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-16'
                    }`}
                    style={{ 
                      transitionDelay: `${700 + index * 100}ms`,
                      transform: `translateX(${tabAnimated.has('resources') ? 0 : (index % 2 === 0 ? -40 : 40)}px)`
                    }}
                  >
                    <LearningResource resource={resource} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Quality Examples */}
          {activeSection === 'quality' && (
            <div 
              className={`space-y-8 transform transition-all duration-1400 ${
                tabAnimated.has('quality') 
                  ? 'opacity-100 rotate-0' 
                  : 'opacity-0 rotate-12'
              }`}
              style={{
                transform: `rotate(${tabAnimated.has('quality') ? 0 : 12}deg)`,
                transformOrigin: 'center'
              }}
            >
              <div 
                className={`text-center transform transition-all duration-1000 delay-300 ${
                  tabAnimated.has('quality') 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-6 scale-95'
                }`}
                style={{
                  transform: `rotate(${tabAnimated.has('quality') ? 0 : -6}deg) scale(${tabAnimated.has('quality') ? 1 : 0.95})`
                }}
                ref={(el) => addToRefs(el, 'quality-header')}
              >
                <h2 className="text-3xl font-bold text-text-primary mb-4">Code Quality Evolution</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  See how code transforms from functional to exceptional. Each example shows 
                  before/after comparisons with detailed explanations of improvements in maintainability, 
                  performance, and scalability.
                </p>
              </div>

              <div 
                className={`space-y-8 transform transition-all duration-1200 delay-600 ${
                  tabAnimated.has('quality') 
                    ? 'opacity-100 rotate-0' 
                    : 'opacity-0 rotate-6'
                }`}
                style={{
                  transform: `rotate(${tabAnimated.has('quality') ? 0 : 6}deg)`
                }}
                ref={(el) => addToRefs(el, 'quality-content')}
              >
                {codeQualityExamples.map((example, index) => (
                  <div
                    key={example.id}
                    className={`transform transition-all duration-800 ${
                      tabAnimated.has('quality') 
                        ? 'opacity-100 rotate-0 scale-100' 
                        : 'opacity-0 rotate-3 scale-95'
                    }`}
                    style={{ 
                      transitionDelay: `${900 + index * 300}ms`,
                      transform: `rotate(${tabAnimated.has('quality') ? 0 : (index % 2 === 0 ? 3 : -3)}deg) scale(${tabAnimated.has('quality') ? 1 : 0.95})`,
                      transformOrigin: 'center'
                    }}
                  >
                    <CodeQualityExample example={example} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-brand-primary">
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
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
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