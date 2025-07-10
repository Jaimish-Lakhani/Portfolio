import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SpeakingEngagementCard from './components/SpeakingEngagementCard';
import CommunityInvolvementCard from './components/CommunityInvolvementCard';
import TestimonialCard from './components/TestimonialCard';
import NetworkingActivityCard from './components/NetworkingActivityCard';
import TeachingActivityCard from './components/TeachingActivityCard';
import RecognitionCard from './components/RecognitionCard';
import GivingBackCard from './components/GivingBackCard';
import NetworkStats from './components/NetworkStats';

const ProfessionalNetwork = () => {
  const [activeTab, setActiveTab] = useState('speaking');

  // Mock data for speaking engagements
  const speakingEngagements = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      event: "React Summit 2024",
      type: "keynote",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      description: "Explored advanced patterns and architectural decisions for building large-scale React applications that can handle millions of users.",
      attendees: 1200,
      rating: 4.8,
      feedback: "95% positive",
      topics: ["React", "Architecture", "Performance", "Scalability"],
      slides: "#",
      video: "#"
    },
    {
      id: 2,
      title: "Modern JavaScript Workshop",
      event: "DevCon 2024",
      type: "workshop",
      date: "February 20, 2024",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
      description: "Hands-on workshop covering ES6+, async/await, modules, and modern development practices for JavaScript developers.",
      attendees: 80,
      rating: 4.9,
      feedback: "98% positive",
      topics: ["JavaScript", "ES6+", "Async Programming", "Best Practices"],
      slides: "#",
      video: null
    },
    {
      id: 3,
      title: "The Future of Web Development",
      event: "TechTalk Series",
      type: "panel",
      date: "January 10, 2024",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=400&h=300&fit=crop",
      description: "Panel discussion on emerging technologies, AI integration, and the evolving landscape of web development.",
      attendees: 500,
      rating: 4.7,
      feedback: "92% positive",
      topics: ["Web Development", "AI", "Future Tech", "Industry Trends"],
      slides: null,
      video: "#"
    }
  ];

  // Mock data for community involvement
  const communityInvolvement = [
    {
      id: 1,
      title: "React Meetup Organizer",
      organization: "Bay Area React Meetup",
      icon: "Users",
      description: "Organizing monthly meetups for React developers, featuring talks, workshops, and networking opportunities.",
      duration: "2 years",
      status: "active",
      metrics: [
        { value: "24", label: "Events" },
        { value: "800+", label: "Members" },
        { value: "50+", label: "Speakers" },
        { value: "95%", label: "Satisfaction" }
      ]
    },
    {
      id: 2,
      title: "Code Mentor Program",
      organization: "TechForGood Initiative",
      icon: "GraduationCap",
      description: "Mentoring junior developers and career changers through structured learning programs and one-on-one guidance.",
      duration: "3 years",
      status: "active",
      metrics: [
        { value: "150+", label: "Mentees" },
        { value: "85%", label: "Job Placement" },
        { value: "4.9", label: "Rating" },
        { value: "500+", label: "Hours" }
      ]
    },
    {
      id: 3,
      title: "Open Source Maintainer",
      organization: "Various Projects",
      icon: "GitBranch",
      description: "Maintaining and contributing to open-source projects, reviewing PRs, and helping community contributors.",
      duration: "5 years",
      status: "active",
      metrics: [
        { value: "12", label: "Projects" },
        { value: "2.5K+", label: "Commits" },
        { value: "500+", label: "PRs Reviewed" },
        { value: "50K+", label: "Downloads" }
      ]
    }
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Senior Engineering Manager",
      company: "Google",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      content: "Working with Alex has been transformative for our team. His technical expertise combined with excellent communication skills made complex projects feel manageable. He's not just a developer, but a true technical leader.",
      date: "March 2024",
      relationship: "Former Colleague"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "CTO",
      company: "StartupXYZ",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      content: "Alex\'s speaking session at our conference was outstanding. He explained complex React concepts in a way that both junior and senior developers could understand and apply immediately.",
      date: "February 2024",
      relationship: "Event Organizer"
    },
    {
      id: 3,
      name: "Emily Johnson",
      position: "Full Stack Developer",
      company: "Microsoft",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      content: "As my mentor, Alex provided invaluable guidance that accelerated my career growth. His patience, expertise, and genuine care for helping others succeed is remarkable.",
      date: "January 2024",
      relationship: "Mentee"
    }
  ];

  // Mock data for networking activities
  const networkingActivities = [
    {
      id: 1,
      title: "React Conf 2024",
      organization: "Meta",
      type: "conference",
      date: "May 15-16, 2024",
      location: "Las Vegas, NV",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=150&fit=crop",
      description: "Attended React Conf to stay updated with latest React developments and network with core team members.",
      connections: ["Dan Abramov", "Sophie Alpert", "Sebastian Markbåge"],
      outcomes: "Learned about React Server Components and new concurrent features"
    },
    {
      id: 2,
      title: "JavaScript Meetup",
      organization: "JS Bay Area",
      type: "meetup",
      date: "April 20, 2024",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=200&h=150&fit=crop",
      description: "Monthly JavaScript meetup focusing on modern development practices and community building.",
      connections: ["Local JS Developers", "Startup CTOs"],
      outcomes: "Connected with 3 potential collaboration partners"
    },
    {
      id: 3,
      title: "Tech Leadership Workshop",
      organization: "Engineering Leaders Network",
      type: "workshop",
      date: "March 10, 2024",
      location: "Palo Alto, CA",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=200&h=150&fit=crop",
      description: "Workshop on technical leadership, team building, and engineering management best practices.",
      connections: ["Engineering Managers", "Tech Directors"],
      outcomes: "Gained insights on scaling engineering teams"
    }
  ];

  // Mock data for teaching activities
  const teachingActivities = [
    {
      id: 1,
      title: "Advanced React Course",
      platform: "Udemy",
      icon: "BookOpen",
      status: "ongoing",
      description: "Comprehensive course covering advanced React patterns, performance optimization, and real-world application development.",
      metrics: [
        { value: "15K+", label: "Students" },
        { value: "4.8", label: "Rating" },
        { value: "50+", label: "Hours" },
        { value: "95%", label: "Completion" }
      ],
      topics: ["React", "Redux", "Performance", "Testing", "Deployment"],
      materials: "#",
      feedback: "#"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      platform: "Coding Bootcamp",
      icon: "Code",
      status: "completed",
      description: "12-week intensive program teaching JavaScript fundamentals to career changers and new developers.",
      metrics: [
        { value: "120", label: "Graduates" },
        { value: "88%", label: "Job Placement" },
        { value: "4.9", label: "Rating" },
        { value: "240", label: "Hours" }
      ],
      topics: ["JavaScript", "DOM", "APIs", "Async Programming", "Projects"],
      materials: "#",
      feedback: "#"
    },
    {
      id: 3,
      title: "Web Development Workshops",
      platform: "Community Centers",
      icon: "Users",
      status: "ongoing",
      description: "Free workshops for underrepresented groups in tech, focusing on web development basics and career guidance.",
      metrics: [
        { value: "300+", label: "Participants" },
        { value: "12", label: "Workshops" },
        { value: "4.7", label: "Rating" },
        { value: "100+", label: "Hours" }
      ],
      topics: ["HTML", "CSS", "JavaScript", "Career Guidance", "Portfolio Building"],
      materials: "#",
      feedback: "#"
    }
  ];

  // Mock data for recognition
  const recognitions = [
    {
      id: 1,
      title: "Developer of the Year",
      organization: "Tech Excellence Awards",
      year: "2024",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&h=150&fit=crop",
      description: "Recognized for outstanding contributions to open-source projects and community development.",
      details: ["Open Source", "Community Impact", "Technical Excellence"],
      impact: "Inspired 50+ developers to contribute to open source"
    },
    {
      id: 2,
      title: "Best Speaker Award",
      organization: "React Summit",
      year: "2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=150&fit=crop",
      description: "Awarded for the most impactful and well-received presentation at React Summit 2024.",
      details: ["Public Speaking", "Technical Communication", "Audience Engagement"],
      impact: "Session viewed 100K+ times online"
    },
    {
      id: 3,
      title: "Community Champion",
      organization: "GitHub",
      year: "2023",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=200&h=150&fit=crop",
      description: "Recognized for exceptional contributions to the developer community through mentoring and open source.",
      details: ["Mentoring", "Open Source", "Community Building"],
      impact: "Helped 100+ developers land their first tech jobs"
    }
  ];

  // Mock data for giving back initiatives
  const givingBackInitiatives = [
    {
      id: 1,
      title: "Code for Good",
      category: "Pro Bono Development",
      icon: "Heart",
      status: "active",
      description: "Developing web applications for non-profit organizations to help them achieve their mission more effectively.",
      impact: [
        { value: "8", label: "NGOs Helped" },
        { value: "15K+", label: "Users Served" },
        { value: "500+", label: "Hours Donated" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      duration: "2 years",
      link: "#"
    },
    {
      id: 2,
      title: "Free Code Resources",
      category: "Educational Content",
      icon: "BookOpen",
      status: "ongoing",
      description: "Creating and maintaining free coding tutorials, templates, and resources for aspiring developers.",
      impact: [
        { value: "50+", label: "Resources" },
        { value: "25K+", label: "Downloads" },
        { value: "4.8", label: "Rating" }
      ],
      technologies: ["JavaScript", "React", "CSS", "HTML"],
      duration: "3 years",
      link: "#"
    },
    {
      id: 3,
      title: "Accessibility Audits",
      category: "Web Accessibility",
      icon: "Eye",
      status: "active",
      description: "Providing free accessibility audits and improvements for small businesses and community websites.",
      impact: [
        { value: "20+", label: "Sites Audited" },
        { value: "100%", label: "WCAG Compliance" },
        { value: "200+", label: "Issues Fixed" }
      ],
      technologies: ["WCAG", "ARIA", "Screen Readers", "Testing Tools"],
      duration: "1 year",
      link: "#"
    }
  ];

  const tabs = [
    { id: 'speaking', label: 'Speaking', icon: 'Mic' },
    { id: 'community', label: 'Community', icon: 'Users' },
    { id: 'testimonials', label: 'Testimonials', icon: 'MessageSquare' },
    { id: 'networking', label: 'Networking', icon: 'Globe' },
    { id: 'teaching', label: 'Teaching', icon: 'GraduationCap' },
    { id: 'recognition', label: 'Recognition', icon: 'Award' },
    { id: 'giving-back', label: 'Giving Back', icon: 'Heart' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'speaking':
        return (
          <div className="space-y-6">
            {speakingEngagements.map((engagement) => (
              <SpeakingEngagementCard key={engagement.id} engagement={engagement} />
            ))}
          </div>
        );
      case 'community':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {communityInvolvement.map((involvement) => (
              <CommunityInvolvementCard key={involvement.id} involvement={involvement} />
            ))}
          </div>
        );
      case 'testimonials':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        );
      case 'networking':
        return (
          <div className="space-y-6">
            {networkingActivities.map((activity) => (
              <NetworkingActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        );
      case 'teaching':
        return (
          <div className="space-y-6">
            {teachingActivities.map((activity) => (
              <TeachingActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        );
      case 'recognition':
        return (
          <div className="space-y-6">
            {recognitions.map((recognition) => (
              <RecognitionCard key={recognition.id} recognition={recognition} />
            ))}
          </div>
        );
      case 'giving-back':
        return (
          <div className="space-y-6">
            {givingBackInitiatives.map((initiative) => (
              <GivingBackCard key={initiative.id} initiative={initiative} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Network - Jaimish S. Lakhani Portfolio</title>
        <meta name="description" content="Explore my professional network, speaking engagements, community involvement, and contributions to the developer ecosystem." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface to-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Globe" size={16} />
              <span>Professional Network & Community Impact</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
              Building Connections,
              <span className="text-gradient block">Sharing Knowledge</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Discover my journey in building meaningful professional relationships, contributing to the developer community, and sharing knowledge through speaking, teaching, and mentoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('#', '_blank')}
              >
                Book Speaking Engagement
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => window.open('#', '_blank')}
              >
                Download Speaker Kit
              </Button>
            </div>
          </div>

          {/* Network Stats */}
          <NetworkStats />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-surface text-text-secondary hover:bg-surface-secondary hover:text-text-primary'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="fade-in">
            {renderTabContent()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Connect and Collaborate
          </h2>
          <p className="text-xl text-accent-100 mb-8">
            Interested in speaking opportunities, mentoring, or community collaboration? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.location.href = '/collaboration-studio'}
            >
              Start Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Linkedin"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-accent"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface text-text-primary py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-600 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jaimish S. Lakhani Portfolio</h3>
                  <p className="text-text-secondary text-sm">Professional Network Hub</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4">
                Building meaningful connections and contributing to the developer community through speaking, teaching, and mentoring.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="/dynamic-homepage" className="hover:text-text-primary transition-colors">Home</a></li>
                <li><a href="/project-showcase-galaxy" className="hover:text-text-primary transition-colors">Projects</a></li>
                <li><a href="/collaboration-studio" className="hover:text-text-primary transition-colors">Collaborate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-text-secondary">
                <li><a href="#" className="hover:text-text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-text-secondary">
            <p>&copy; {new Date().getFullYear()} Jaimish S. Lakhani Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalNetwork;