import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill, delay = 0 }) => {
  return (
    <motion.span
      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
    >
      {skill}
    </motion.span>
  );
};

export default SkillBadge;
