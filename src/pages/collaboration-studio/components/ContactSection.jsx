import React from 'react';
import { motion } from 'motion/react';
import Icon from '../../../components/AppIcon';

const ContactSection = () => {
  // Function to open Gmail directly with email pre-filled
  const openGmailCompose = (subject = 'Project Collaboration Inquiry') => {
    const email = 'jaimish.work@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.button
            onClick={() => openGmailCompose()}
            className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon name="Mail" className="w-6 h-6" />
            <span>Send Mail</span>
            <Icon name="ExternalLink" className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
