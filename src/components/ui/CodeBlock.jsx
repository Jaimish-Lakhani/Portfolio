import React from 'react';
import { useTheme } from 'contexts/ThemeContext';

const CodeBlock = ({ 
  children, 
  language = 'javascript', 
  className = '',
  showLineNumbers = false 
}) => {
  const { theme } = useTheme();

  const getCodeBlockClasses = () => {
    const baseClasses = 'font-mono text-sm leading-relaxed overflow-x-auto p-4 rounded-lg dark-scrollbar';
    
    switch (theme) {
      case 'dark':
        return `${baseClasses} bg-black text-slate-50 border border-gray-700`;
      default: // light
        return `${baseClasses} bg-black text-slate-50 border border-gray-600`;
    }
  };

  const getTerminalClasses = () => {
    const baseClasses = 'font-mono text-sm p-4 rounded-lg min-h-16 dark-scrollbar';
    
    switch (theme) {
      case 'dark':
        return `${baseClasses} bg-black text-green-400 border border-gray-700`;
      default: // light
        return `${baseClasses} bg-black text-green-400 border border-gray-600`;
    }
  };

  const isTerminal = language === 'terminal' || language === 'output';
  const combinedClasses = `${isTerminal ? getTerminalClasses() : getCodeBlockClasses()} ${className}`;

  return (
    <div className={combinedClasses}>
      <pre className="whitespace-pre-wrap">
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
