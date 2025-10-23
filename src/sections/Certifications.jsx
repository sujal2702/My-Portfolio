import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Certifications = () => {
  const certifications = [
    {
      title: 'Agentblazer Champion',
      issuer: 'Salesforce Trailhead',
      date: '2025',
      link: null
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: '2024',
      link: 'https://drive.google.com/file/d/1GcbiQl3STGNisKmT76esqoF8kee-6McN/view?usp=drive_link'
    },
    {
      title: 'Oracle Cloud Infrastructure AI Foundations',
      issuer: 'Oracle',
      date: '2024',
      link: 'https://drive.google.com/file/d/1x0tiXHxvgC1yEHC5-zJ-lG4qCxXxFc9h/view?usp=drive_link'
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'Electronic Arts',
      date: '2024',
      link: 'https://drive.google.com/file/d/14pZcIz8kzp1QsRprNPtAHyWm-NEzyhaZ/view?usp=drive_link'
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google Cloud',
      date: '2024',
      link: 'https://drive.google.com/file/d/1-H4gN-GmFL95CxDBEM48QqcRd-g0nHd-/view?usp=drive_link'
    },
    {
      title: 'Computer Networking',
      issuer: 'Microsoft',
      date: '2024',
      link: 'https://learn.microsoft.com/en-us/users/sujalsingh-1623/achievements/87pd7mpw?ref=https%3A%2F%2Fwww.linkedin.com%2F'
    },
    {
      title: 'UNIX',
      issuer: 'Infosys',
      date: '2024',
      link: 'https://drive.google.com/file/d/1cWTTEjnelzO-yIuRzQbepLioG7TaUyqg/view?usp=drive_link'
    },
    {
      title: 'SQL Triggers',
      issuer: 'Microsoft',
      date: '2024',
      link: 'https://drive.google.com/file/d/1TlRdOl2BA9JaKJzzSXgCGVmRZD2LKyn5/view?usp=drive_link'
    },
    {
      title: 'Git Certificate',
      issuer: 'Git',
      date: '2024',
      link: 'https://drive.google.com/file/d/1Z-_1qRa3peq_e54YmI_9nvaXmKh-1SLe/view?usp=drive_link'
    },
    {
      title: 'DSA and Sorting Algorithms',
      issuer: 'Simplilearn',
      date: '2024',
      link: 'https://drive.google.com/file/d/1v2H8psJFSEzp5DZvBzUOPNWvfzOjQaAO/view?usp=drive_link'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certifications</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 relative"
            >
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View
                </a>
              )}
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 pr-16">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {cert.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
