import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import SkillSyncCover from '../components/project-covers/SkillSyncCover';
import LeetMetricCover from '../components/project-covers/LeetMetricCover';
import InsightDocsCover from '../components/project-covers/InsightDocsCover';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'SkillSync – Internal Talent Discovery Platform',
      description: 'Full Stack talent discovery system for matching employees with projects',
      fullDescription: 'Built a talent discovery system using React.js, Node.js, Express, and MongoDB to match employees with projects. Implemented skill-based matching algorithms, role-based access control, and secure API integrations. Deployed frontend on Vercel and backend on Render with secure API integrations and environment management.',
      tags: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/sujal2702/SkillSync',
      githubLabel: 'Project Link',
      live: 'https://skill-sync-mgrt.vercel.app',
      liveLabel: 'View Application',
      cover: <SkillSyncCover />,
      features: [
        'Built a talent discovery system using React.js, Node.js, Express, and MongoDB to match employees with projects',
        'Implemented skill-based matching algorithms, role-based access control',
        'Deployed frontend on Vercel and backend on Render with secure API integrations and environment management'
      ]
    },
    {
      id: 2,
      title: 'InsightDocs – AI-Powered Document Analysis Platform',
      description: 'Full Stack AI document processing using Flask, PyMuPDF, and Ollama AI',
      fullDescription: 'Developed an AI-powered document analysis tool using Flask, PyMuPDF, and Ollama AI for multi-modal PDF processing. Implemented text & image extraction, summarization, and chat-based Q&A with secure API integrations. Built a responsive interface with drag-and-drop uploads and chat-based interaction.',
      tags: ['Flask', 'PyMuPDF', 'Ollama AI', 'Q&A'],
      github: 'https://github.com/sujal2702/InsightDocs',
      githubLabel: 'Project Link',
      live: null,
      cover: <InsightDocsCover />,
      features: [
        'Developed an AI-powered document analysis tool using Flask, PyMuPDF, and Ollama AI for multi-modal PDF processing',
        'Implemented text & image extraction, summarization, and chat-based Q&A with secure API integrations',
        'Built a responsive interface with drag-and-drop uploads and chat-based interaction'
      ]
    },
    {
      id: 3,
      title: 'LeetMetric – LeetCode Statistics Tracker',
      description: 'Frontend web app for tracking and visualizing LeetCode statistics',
      fullDescription: 'Created a web app with JavaScript, HTML, CSS, and GraphQL API to track and visualize LeetCode statistics. Designed real-time data fetching with animated visualizations and progress tracking. Deployed on Vercel with CORS proxy integration for problem-solving pattern analysis.',
      tags: ['JavaScript', 'HTML', 'CSS', 'GraphQL'],
      github: 'https://github.com/sujal2702/LeetMetric',
      githubLabel: 'Project Link',
      cover: <LeetMetricCover />,
      features: [
        'Created a web app with JavaScript, HTML, CSS, and GraphQL API to track and visualize LeetCode statistics',
        'Designed real-time data fetching with animated visualizations and progress tracking',
        'Deployed on Vercel with CORS proxy integration for problem-solving pattern analysis'
      ]
    }
  ];

  const handleProjectClick = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                isExpanded={expandedProject === project.id}
                onToggle={() => handleProjectClick(project.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
