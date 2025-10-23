import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C', 'C++', 'JavaScript', 'Python']
    },
    {
      category: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'Node.js', 'Express.js', 'React.js', 'Flask', 'Vanilla Js']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'MySQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Jasmine']
    },
    {
      category: 'Concepts',
      skills: ['DSA', 'OOP', 'Version Control', 'Responsive Design', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge 
                    key={skillIndex} 
                    skill={skill}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
