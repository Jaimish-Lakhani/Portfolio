import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProof = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Working with this developer was exceptional. They delivered a complex e-commerce platform that exceeded our expectations. The code quality, attention to detail, and problem-solving skills are outstanding.",
      rating: 5,
      project: "E-Commerce Platform",
      metrics: "40% performance improvement"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "HealthTech Innovations",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "The healthcare dashboard they built transformed how we monitor patient data. Real-time analytics, intuitive design, and robust security. Couldn't ask for better execution.",
      rating: 5,
      project: "Healthcare Dashboard",
      metrics: "60% faster data processing"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Startup Founder",
      company: "AI Ventures",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "They took our AI concept from idea to production in record time. The technical expertise in machine learning and full-stack development is remarkable. Highly recommended!",
      rating: 5,
      project: "AI Content Generator",
      metrics: "15K+ active users"
    }
  ];

  const clientLogos = [
    { name: "TechFlow", logo: "https://via.placeholder.com/120x40/3B82F6/FFFFFF?text=TechFlow" },
    { name: "HealthTech", logo: "https://via.placeholder.com/120x40/10B981/FFFFFF?text=HealthTech" },
    { name: "AI Ventures", logo: "https://via.placeholder.com/120x40/8B5CF6/FFFFFF?text=AI+Ventures" },
    { name: "DataCorp", logo: "https://via.placeholder.com/120x40/F59E0B/FFFFFF?text=DataCorp" },
    { name: "CloudSys", logo: "https://via.placeholder.com/120x40/EF4444/FFFFFF?text=CloudSys" },
    { name: "DevTools", logo: "https://via.placeholder.com/120x40/06B6D4/FFFFFF?text=DevTools" }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "Top 1% Developer",
      description: "GitHub contributions",
      value: "500+",
      color: "text-accent"
    },
    {
      icon: "Star",
      title: "Open Source",
      description: "GitHub stars received",
      value: "2.5K+",
      color: "text-warning"
    },
    {
      icon: "Users",
      title: "Community",
      description: "Developers mentored",
      value: "50+",
      color: "text-success"
    },
    {
      icon: "MessageSquare",
      title: "Speaking",
      description: "Tech talks delivered",
      value: "15+",
      color: "text-brand-secondary"
    }
  ];

  const certifications = [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      badge: "https://via.placeholder.com/60x60/FF9900/FFFFFF?text=AWS"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      badge: "https://via.placeholder.com/60x60/4285F4/FFFFFF?text=GCP"
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta",
      year: "2023",
      badge: "https://via.placeholder.com/60x60/61DAFB/FFFFFF?text=React"
    },
    {
      name: "Kubernetes Administrator",
      issuer: "CNCF",
      year: "2024",
      badge: "https://via.placeholder.com/60x60/326CE5/FFFFFF?text=K8s"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-surface-tertiary"}
      />
    ));
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success-50 text-success-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Shield" size={16} />
            <span>Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Client Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and the developer community say about working with me.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-text-secondary mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {clientLogos.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-lg border border-surface-secondary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Icon name="Quote" size={128} className="text-accent" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonials[activeTestimonial].rating)}
                </div>
                
                <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-text-primary">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium text-accent">
                      {testimonials[activeTestimonial].project}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonials[activeTestimonial].metrics}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex lg:flex-col items-center justify-center space-x-4 lg:space-x-0 lg:space-y-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-surface hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 border border-surface-secondary"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                
                <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? 'bg-accent' : 'bg-surface-tertiary'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-surface hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 border border-surface-secondary"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 text-center border border-surface-secondary hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-surface flex items-center justify-center ${achievement.color}`}>
                <Icon name={achievement.icon} size={24} />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{achievement.value}</div>
              <div className="font-medium text-text-primary mb-1">{achievement.title}</div>
              <div className="text-sm text-text-secondary">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-background rounded-2xl p-8 border border-surface-secondary mb-16">
          <h3 className="text-xl font-semibold text-text-primary text-center mb-8">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg border border-surface-secondary hover:bg-surface transition-all duration-300"
              >
                <Image
                  src={cert.badge}
                  alt={`${cert.name} certification`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-text-primary text-sm">{cert.name}</div>
                  <div className="text-xs text-text-secondary">{cert.issuer}</div>
                  <div className="text-xs text-accent font-medium">{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who've transformed their ideas into successful digital products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/collaboration-studio">
              <Button
                variant="primary"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start Collaboration
              </Button>
            </Link>
            <Link to="/project-showcase-galaxy">
              <Button
                variant="outline"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;