import React from 'react';
import { cn } from '@/lib/utils'; // Optional: utility to merge classNames

const Button = ({ href, children, primary = false, className = '' }) => {
  const baseStyle = 'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300';
  const style = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-900 hover:bg-gray-300';

  return (
    <a href={href} className={cn(baseStyle, style, className)}>
      {children}
    </a>
  );
};

export default Button;
