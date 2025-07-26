import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import CodeBlock from '../../../components/ui/CodeBlock';

const CodeQualityExample = ({ example }) => {
  const [activeView, setActiveView] = useState('before');

  const getImprovementIcon = (type) => {
    const icons = {
      'performance': 'Zap',
      'readability': 'Eye',
      'maintainability': 'Wrench',
      'scalability': 'TrendingUp',
      'security': 'Shield',
      'testing': 'CheckCircle'
    };
    return icons[type] || 'Code';
  };

  const getImprovementColor = (type) => {
    const colors = {
      'performance': 'text-success-600 bg-success-50',
      'readability': 'text-violet-600 bg-violet-50',
      'maintainability': 'text-purple-600 bg-purple-50',
      'scalability': 'text-orange-600 bg-orange-50',
      'security': 'text-red-600 bg-red-50',
      'testing': 'text-green-600 bg-green-50'
    };
    return colors[type] || 'text-gray-600 bg-gray-50';
  };

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden">
      <div className="bg-purple-600 text-white px-6 py-4">
        <div className="flex items-center space-x-3">
          <Icon name="Code2" size={24} />
          <div>
            <h3 className="text-xl font-semibold">{example.title}</h3>
            <p className="text-purple-100 text-sm">{example.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Code Comparison */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg border border-surface-secondary overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex border-b border-surface-secondary">
                <button
                  onClick={() => setActiveView('before')}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeView === 'before'
                      ? 'text-error-600 bg-error-50 border-b-2 border-error-600' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="AlertTriangle" size={16} />
                    <span>Before (Issues)</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveView('after')}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeView === 'after' ?'text-success-600 bg-success-50 border-b-2 border-success-600' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={16} />
                    <span>After (Improved)</span>
                  </div>
                </button>
              </div>

              {/* Code Display */}
              <div className="p-4">
                <CodeBlock language="javascript" className="m-0">
                  {activeView === 'before' ? example.beforeCode : example.afterCode}
                </CodeBlock>

                {/* Code Metrics */}
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {example.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-semibold text-text-primary">
                        {activeView === 'before' ? metric.before : metric.after}
                      </div>
                      <div className="text-xs text-text-secondary">{metric.name}</div>
                      {activeView === 'after' && metric.improvement && (
                        <div className="text-xs text-success-600 font-medium">
                          {metric.improvement}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Improvements & Analysis */}
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Improvements Made</h4>
              <div className="space-y-3">
                {example.improvements.map((improvement, idx) => (
                  <div key={idx} className={`p-3 rounded-lg ${getImprovementColor(improvement.type)}`}>
                    <div className="flex items-start space-x-2">
                      <Icon name={getImprovementIcon(improvement.type)} size={16} className="mt-0.5 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-sm capitalize">{improvement.type}</h5>
                        <p className="text-xs mt-1 opacity-80">{improvement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Key Changes</h4>
              <div className="space-y-2">
                {example.keyChanges.map((change, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Icon name="ArrowRight" size={14} className="text-accent-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-secondary">{change}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Impact Analysis</h4>
              <div className="space-y-3">
                <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="TrendingUp" size={14} className="text-success-600" />
                    <span className="text-sm font-medium text-success-700">Performance</span>
                  </div>
                  <p className="text-xs text-success-600">{example.impact.performance}</p>
                </div>
                
                <div className="p-3 bg-violet-50 border border-violet-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="Users" size={14} className="text-violet-600" />
                    <span className="text-sm font-medium text-violet-700">Developer Experience</span>
                  </div>
                  <p className="text-xs text-violet-600">{example.impact.developerExperience}</p>
                </div>
                
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="Layers" size={14} className="text-purple-600" />
                    <span className="text-sm font-medium text-purple-700">Maintainability</span>
                  </div>
                  <p className="text-xs text-purple-600">{example.impact.maintainability}</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Lessons Learned</h4>
              <div className="space-y-2">
                {example.lessonsLearned.map((lesson, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Icon name="Lightbulb" size={14} className="text-warning-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-secondary">{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeQualityExample;