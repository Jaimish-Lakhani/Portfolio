import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      project: "E-commerce Platform Redesign",
      outcome: "40% increase in conversion rate",
      testimonial: `Working with this developer was transformative for our business. Their ability to translate complex technical requirements into user-friendly solutions exceeded our expectations. The communication throughout the project was exceptional - weekly updates, transparent progress tracking, and proactive problem-solving.\n\nWhat impressed me most was their collaborative approach. They didn't just deliver code; they became a strategic partner, offering insights that improved our overall business process. The final product not only met our technical requirements but also drove significant business growth.`,
      collaboration: [
        "Weekly stakeholder meetings with detailed progress reports",
        "Collaborative requirement gathering with business stakeholders",
        "Agile development with continuous client feedback integration",
        "Post-launch support and optimization recommendations"
      ],
      technical: [
        "React/Node.js full-stack development",
        "Payment gateway integration",
        "Performance optimization",
        "Security implementation"
      ]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      project: "Mobile Banking Application",
      outcome: "1M+ downloads in first quarter",
      testimonial: `The level of professionalism and technical expertise demonstrated throughout our mobile banking project was outstanding. Complex financial regulations and security requirements were handled with precision and care.\n\nCommunication was always clear and timely. Technical concepts were explained in business terms that our entire team could understand. The developer's proactive approach to identifying potential issues and suggesting improvements saved us months of development time and significant costs.`,
      collaboration: [
        "Cross-functional team integration with design and product teams",
        "Regular client demos and feedback incorporation",
        "Compliance documentation and regulatory alignment",
        "User testing coordination and feedback implementation"
      ],
      technical: [
        "React Native mobile development",
        "Banking API integrations",
        "Security and compliance implementation",
        "Performance monitoring and analytics"
      ]
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Startup Founder",
      company: "GreenTech Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      project: "IoT Dashboard Platform",
      outcome: "Secured $2M Series A funding",
      testimonial: `As a non-technical founder, I needed someone who could not only build our product but also guide our technical strategy. This developer became an invaluable technical advisor, helping us make informed decisions about our technology stack and architecture.\n\nTheir mentoring approach helped our entire team understand the technical aspects of our business. The collaborative development process included regular knowledge transfer sessions that empowered our team to maintain and extend the platform independently.`,
      collaboration: [
        "Technical advisory and strategic planning sessions",
        "Knowledge transfer and team training programs",
        "Investor presentation support with technical explanations",
        "Scalability planning and architecture decisions"
      ],
      technical: [
        "IoT data processing and visualization",
        "Real-time dashboard development",
        "Cloud infrastructure setup",
        "API design and documentation"
      ]
    },
    {
      id: 4,
      name: "David Kim",
      role: "Engineering Manager",
      company: "DataDriven Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      project: "Team Leadership & Mentoring",
      outcome: "50% improvement in team productivity",
      testimonial: `Bringing this developer onto our team as a senior technical lead was one of our best decisions. Their leadership style fostered collaboration and knowledge sharing across our entire engineering organization.\n\nThe mentoring program they established transformed our junior developers into confident, productive team members. Code quality improved dramatically, and our development velocity increased significantly. Their approach to technical leadership balanced guidance with autonomy, creating an environment where everyone could grow.`,
      collaboration: [
        "Established code review best practices and standards",
        "Created mentorship programs for junior developers",
        "Facilitated cross-team knowledge sharing sessions",
        "Implemented agile processes and team retrospectives"
      ],
      technical: [
        "Technical architecture and system design",
        "Code quality and testing standards",
        "Performance optimization and monitoring",
        "Team development and skill building"
      ]
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real testimonials from clients and partners who experienced the impact 
            of effective collaboration and technical excellence.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="card p-8 lg:p-12 mb-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Client Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-conversion-accent rounded-full flex items-center justify-center">
                      <Icon name="CheckCircle" size={14} color="white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-text-secondary">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-accent font-semibold">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="bg-surface rounded-lg p-4">
                    <div className="text-sm font-semibold text-text-secondary mb-1">Project</div>
                    <div className="text-text-primary">{currentTestimonial.project}</div>
                  </div>
                  <div className="bg-conversion-accent/10 rounded-lg p-4">
                    <div className="text-sm font-semibold text-conversion-accent mb-1">Outcome</div>
                    <div className="text-text-primary font-semibold">{currentTestimonial.outcome}</div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative">
                  <Icon name="Quote" size={32} className="text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-text-primary leading-relaxed text-lg pl-8">
                    {currentTestimonial.testimonial.split('\n').map((paragraph, index) => (
                      <React.Fragment key={index}>
                        {paragraph}
                        {index < currentTestimonial.testimonial.split('\n').length - 1 && <><br /><br /></>}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="Users" size={20} className="text-accent mr-2" />
                      Collaboration Highlights
                    </h4>
                    <ul className="space-y-2">
                      {currentTestimonial.collaboration.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-conversion-accent mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="Code" size={20} className="text-brand-primary mr-2" />
                      Technical Delivery
                    </h4>
                    <ul className="space-y-2">
                      {currentTestimonial.technical.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Zap" size={16} className="text-brand-primary mt-0.5 flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-surface hover:bg-surface-secondary rounded-lg transition-colors duration-300"
            >
              <Icon name="ChevronLeft" size={20} className="text-text-secondary" />
              <span className="text-text-secondary">Previous</span>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? 'bg-accent' : 'bg-surface-secondary'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-surface hover:bg-surface-secondary rounded-lg transition-colors duration-300"
            >
              <span className="text-text-secondary">Next</span>
              <Icon name="ChevronRight" size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;