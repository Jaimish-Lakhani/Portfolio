import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "Modern e-commerce solution with real-time inventory, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      metrics: {
        performance: "+65%",
        users: "10K+",
        revenue: "$2M+"
      },
      liveDemo: "https://demo-ecommerce.example.com",
      github: "https://github.com/username/ecommerce-platform",
      status: "Live",
      year: "2024"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      category: "Data Visualization",
      description: "Real-time patient monitoring system with predictive analytics and automated alerts.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
      metrics: {
        performance: "+80%",
        users: "5K+",
        accuracy: "98.5%"
      },
      liveDemo: "https://demo-healthcare.example.com",
      github: "https://github.com/username/healthcare-dashboard",
      status: "Live",
      year: "2024"
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "Machine Learning",
      description: "AI-powered content creation tool with natural language processing and multi-format output.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "Redis"],
      metrics: {
        performance: "+90%",
        users: "15K+",
        accuracy: "94%"
      },
      liveDemo: "https://demo-ai-content.example.com",
      github: "https://github.com/username/ai-content-generator",
      status: "Beta",
      year: "2024"
    },
    {
      id: 4,
      title: "Real-time Chat App",
      category: "WebSocket Development",
      description: "Scalable messaging platform with end-to-end encryption, file sharing, and video calls.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React", "Socket.io", "Node.js", "WebRTC", "MongoDB"],
      metrics: {
        performance: "+75%",
        users: "25K+",
        messages: "1M+"
      },
      liveDemo: "https://demo-chat.example.com",
      github: "https://github.com/username/realtime-chat",
      status: "Live",
      year: "2023"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Folder" size={16} />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Transforming Ideas into
            <span className="text-gradient"> Digital Reality</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore my latest projects showcasing full-stack development, innovative solutions, and measurable business impact.
          </p>
        </div>

        {/* Main Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Overlay Controls */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex space-x-4">
                  <Button
                    variant="primary"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    className="bg-white/90 text-primary border-white/90 hover:bg-white"
                  >
                    Code
                  </Button>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                currentProject.status === 'Live' ?'bg-success text-success-foreground' :'bg-warning text-warning-foreground'
              }`}>
                {currentProject.status}
              </span>
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4">
              <button
                onClick={prevProject}
                className="w-12 h-12 bg-surface shadow-lg rounded-full flex items-center justify-center text-text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4">
              <button
                onClick={nextProject}
                className="w-12 h-12 bg-surface shadow-lg rounded-full flex items-center justify-center text-text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-border"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-accent font-medium text-sm">{currentProject.category}</span>
                <span className="text-text-tertiary">•</span>
                <span className="text-text-secondary text-sm">{currentProject.year}</span>
              </div>
              <h3 className="text-3xl font-bold text-text-primary mb-4">
                {currentProject.title}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-surface text-text-secondary rounded-full text-sm font-medium border border-surface-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-3">Key Achievements</h4>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(currentProject.metrics).map(([key, value], index) => (
                  <div key={index} className="text-center p-4 bg-surface rounded-lg border border-surface-secondary">
                    <div className="text-2xl font-bold text-accent mb-1">{value}</div>
                    <div className="text-xs text-text-secondary capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="primary"
                iconName="ExternalLink"
                iconPosition="left"
              >
                View Live Demo
              </Button>
              <Button
                variant="outline"
                iconName="Github"
                iconPosition="left"
              >
                Source Code
              </Button>
              <Button
                variant="ghost"
                iconName="FileText"
                iconPosition="left"
              >
                Case Study
              </Button>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center space-x-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                index === activeProject 
                  ? 'ring-2 ring-accent scale-110' :'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link to="/project-showcase-galaxy">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;