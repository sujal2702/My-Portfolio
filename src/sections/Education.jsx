import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Dayananda Sagar Institution, Bengaluru',
      duration: '2023 - Present',
      cgpa: 'GPA: 8.59'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education</SectionTitle>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md whitespace-nowrap">
                  {edu.duration}
                </span>
              </div>
              
              <p className="text-md text-gray-700 dark:text-gray-300 mb-1">
                {edu.institution}
              </p>
              
              <p className="text-md font-semibold text-gray-900 dark:text-white">
                {edu.cgpa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
