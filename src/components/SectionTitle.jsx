import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
