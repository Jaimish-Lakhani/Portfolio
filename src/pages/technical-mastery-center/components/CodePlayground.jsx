import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import CodeBlock from '../../../components/ui/CodeBlock';

const CodePlayground = ({ example }) => {
  const [activeTab, setActiveTab] = useState('code');
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden">
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name={example.icon} size={20} />
            <h3 className="text-lg font-semibold">{example.title}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-primary-600 rounded text-xs">{example.language}</span>
            <span className="px-2 py-1 bg-accent-600 rounded text-xs">{example.difficulty}</span>
          </div>
        </div>
        <p className="text-primary-200 text-sm mt-2">{example.description}</p>
      </div>

      <div className="border-b border-surface-secondary">
        <div className="flex">
          {['code', 'output', 'explanation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? 'text-accent-600 border-b-2 border-accent-600 bg-accent-50' :'text-text-secondary hover:text-text-primary hover:bg-surface'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'code' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Code2" size={16} className="text-text-secondary" />
                <span className="text-sm text-text-secondary">Interactive Code Editor</span>
              </div>
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center space-x-2 px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <Icon name="Loader2" size={16} className="animate-spin" />
                    <span>Running...</span>
                  </>
                ) : (
                  <>
                    <Icon name="Play" size={16} />
                    <span>Run Code</span>
                  </>
                )}
              </button>
            </div>
            <CodeBlock language={example.language} className="m-0">
              {example.code}
            </CodeBlock>
          </div>
        )}

        {activeTab === 'output' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Terminal" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">Output Console</span>
            </div>
            <CodeBlock language="terminal" className="min-h-32">
              {example.output}
            </CodeBlock>
          </div>
        )}

        {activeTab === 'explanation' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">Technical Explanation</span>
            </div>
            <div className="prose prose-sm max-w-none">
              <p className="text-text-secondary leading-relaxed">{example.explanation}</p>
              
              {example.keyPoints && (
                <div className="mt-4">
                  <h4 className="text-text-primary font-medium mb-2">Key Points:</h4>
                  <ul className="space-y-1">
                    {example.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success-600 mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="bg-background px-6 py-4 border-t border-surface-secondary">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-text-tertiary">Complexity: {example.complexity}</span>
            <span className="text-text-tertiary">Time: {example.timeComplexity}</span>
            <span className="text-text-tertiary">Space: {example.spaceComplexity}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-accent-600 hover:text-accent-700 transition-colors">
              <Icon name="Copy" size={16} />
            </button>
            <button className="text-accent-600 hover:text-accent-700 transition-colors">
              <Icon name="ExternalLink" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;