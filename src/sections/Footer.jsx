import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/sujal2702',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/singh-sujal',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope size={20} />,
      url: 'mailto:sujalsingh2724@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Sujal Kumar Singh. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">
              Built using React & Tailwind CSS
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
