import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import CodeBlock from '../../../components/ui/CodeBlock';

const ProblemSolvingScenario = ({ scenario }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (step, index) => {
    if (index < activeStep) return "CheckCircle";
    if (index === activeStep) return step.icon;
    return "Circle";
  };

  const getStepColor = (index) => {
    if (index < activeStep) return "text-success-600";
    if (index === activeStep) return "text-accent-600";
    return "text-text-tertiary";
  };

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-error-600 to-warning-600 text-white px-6 py-4">
        <div className="flex items-center space-x-3">
          <Icon name="AlertTriangle" size={24} />
          <div>
            <h3 className="text-xl font-semibold">{scenario.title}</h3>
            <p className="text-red-100 text-sm">{scenario.context}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problem Description */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg p-4 border border-surface-secondary mb-6">
              <h4 className="text-lg font-semibold text-text-primary mb-3">The Problem</h4>
              <div className="space-y-3">
                <div className="p-3 bg-error-50 border border-error-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Bug" size={16} className="text-error-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-error-700 text-sm">Issue</h5>
                      <p className="text-error-600 text-sm mt-1">{scenario.problem.issue}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-warning-50 border border-warning-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Clock" size={16} className="text-warning-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-warning-700 text-sm">Impact</h5>
                      <p className="text-warning-600 text-sm mt-1">{scenario.problem.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-accent-50 border border-accent-200 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Icon name="Target" size={16} className="text-accent-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-accent-700 text-sm">Constraints</h5>
                      <ul className="text-accent-600 text-sm mt-1 space-y-1">
                        {scenario.problem.constraints.map((constraint, idx) => (
                          <li key={idx} className="flex items-start space-x-1">
                            <Icon name="Dot" size={8} className="mt-2 flex-shrink-0" />
                            <span>{constraint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-3">Metrics</h4>
              <div className="space-y-3">
                {scenario.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">{metric.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-error-600">{metric.before}</span>
                      <Icon name="ArrowRight" size={12} className="text-text-tertiary" />
                      <span className="text-sm font-medium text-success-600">{metric.after}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Steps */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Solution Approach</h4>
              
              {/* Step Navigation */}
              <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2">
                {scenario.steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      activeStep === idx
                        ? 'bg-accent-600 text-white' :'bg-surface text-text-secondary hover:bg-surface-secondary'
                    }`}
                  >
                    <Icon name={getStepIcon(step, idx)} size={16} className={getStepColor(idx)} />
                    <span>Step {idx + 1}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-brand-secondary rounded-lg flex items-center justify-center">
                    <Icon name={scenario.steps[activeStep].icon} size={20} color="white" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-text-primary">{scenario.steps[activeStep].title}</h5>
                    <p className="text-sm text-text-secondary">{scenario.steps[activeStep].description}</p>
                  </div>
                </div>

                {scenario.steps[activeStep].code && (
                  <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden">
                    <div className="flex items-center justify-between bg-surface-secondary px-4 py-2">
                      <span className="text-text-secondary text-sm font-medium">Code Implementation</span>
                      <button className="text-text-secondary hover:text-text-primary transition-colors">
                        <Icon name="Copy" size={16} />
                      </button>
                    </div>
                    <CodeBlock language="javascript" className="m-0 border-0 rounded-none">
                      {scenario.steps[activeStep].code}
                    </CodeBlock>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
                    <h6 className="font-medium text-success-700 mb-2 flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} />
                      <span>What Worked</span>
                    </h6>
                    <p className="text-success-600 text-sm">{scenario.steps[activeStep].whatWorked}</p>
                  </div>
                  
                  <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
                    <h6 className="font-medium text-warning-700 mb-2 flex items-center space-x-2">
                      <Icon name="AlertCircle" size={16} />
                      <span>Lessons Learned</span>
                    </h6>
                    <p className="text-warning-600 text-sm">{scenario.steps[activeStep].lessonsLearned}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-surface-secondary">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Icon name="ChevronLeft" size={16} />
                    <span>Previous</span>
                  </button>
                  
                  <span className="text-sm text-text-tertiary">
                    {activeStep + 1} of {scenario.steps.length}
                  </span>
                  
                  <button
                    onClick={() => setActiveStep(Math.min(scenario.steps.length - 1, activeStep + 1))}
                    disabled={activeStep === scenario.steps.length - 1}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <span>Next</span>
                    <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolvingScenario;