import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CollaborationContexts from './components/CollaborationContexts';
import CommunicationArtifacts from './components/CommunicationArtifacts';
import TestimonialsSection from './components/TestimonialsSection';
import PartnershipPhilosophy from './components/PartnershipPhilosophy';
import ContactSection from './components/ContactSection';

const CollaborationStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Collaboration Studio - Jaimish S. Lakhani Portfolio</title>
        <meta name="description" content="Explore collaboration approaches, partnership philosophy, and communication strategies for successful project delivery." />
        <meta name="keywords" content="collaboration, teamwork, project management, communication, partnerships" />
      </Helmet>
      
      <Header />
    
    <main className="pt-16 lg:pt-20">
      <HeroSection />
      <CollaborationContexts />
      <CommunicationArtifacts />
      <TestimonialsSection />
      <PartnershipPhilosophy />
      <ContactSection />
    </main>
    </div>
  );
};

export default CollaborationStudio;