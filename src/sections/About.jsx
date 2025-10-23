import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const About = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      label: 'GitHub',
      url: 'https://github.com/sujal2702',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <FaLinkedin size={20} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/singh-sujal',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaEnvelope size={20} />,
      label: 'Email',
      url: 'mailto:sujalsingh2724@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      icon: <FaFileAlt size={20} />,
      label: 'Resume',
      url: 'https://drive.google.com/file/d/1EPhgjXV_p4bB92LKazNEAdS46Wwe-b5V/view?usp=drivesdk',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              A Computer Science Undergraduate and Aspiring Full Stack Developer with hands-on experience in using the 
              <span className="font-semibold text-gray-900 dark:text-white"> MERN Stack </span>
              to design and develop dynamic web applications. Skilled in 
              <span className="font-semibold text-gray-900 dark:text-white"> C++ </span>
              and problem-solving, with a strong interest in building scalable and 
              efficient solutions for real-world projects.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Eager to learn new technologies, enhance technical expertise, and collaborate effectively 
              to deliver impactful results.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 
                    rounded-lg border border-gray-300 dark:border-gray-600 
                    text-gray-600 dark:text-gray-400 ${link.color} 
                    transition-colors duration-200`}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
