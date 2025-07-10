import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ArchitectureDiagram = ({ architecture }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-4">
        <div className="flex items-center space-x-3">
          <Icon name="Network" size={24} />
          <div>
            <h3 className="text-xl font-semibold">{architecture.title}</h3>
            <p className="text-violet-100 text-sm">{architecture.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Architecture Diagram */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg p-6 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">System Architecture</h4>
              
              <div className="space-y-4">
                {architecture.layers.map((layer, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center space-x-4 p-4 bg-surface rounded-lg border border-surface-secondary">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-brand-secondary rounded-lg flex items-center justify-center">
                        <Icon name={layer.icon} size={20} color="white" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-text-primary">{layer.name}</h5>
                        <p className="text-sm text-text-secondary">{layer.description}</p>
                      </div>
                      <button
                        onClick={() => setSelectedComponent(selectedComponent === idx ? null : idx)}
                        className="text-accent-600 hover:text-accent-700 transition-colors"
                      >
                        <Icon name={selectedComponent === idx ? "ChevronUp" : "ChevronDown"} size={20} />
                      </button>
                    </div>
                    
                    {selectedComponent === idx && (
                      <div className="mt-2 p-4 bg-accent-50 rounded-lg border border-accent-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h6 className="font-medium text-text-primary mb-2">Technologies</h6>
                            <div className="flex flex-wrap gap-2">
                              {layer.technologies.map((tech, techIdx) => (
                                <span key={techIdx} className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h6 className="font-medium text-text-primary mb-2">Responsibilities</h6>
                            <ul className="space-y-1">
                              {layer.responsibilities.map((resp, respIdx) => (
                                <li key={respIdx} className="text-sm text-text-secondary flex items-start space-x-2">
                                  <Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {idx < architecture.layers.length - 1 && (
                      <div className="flex justify-center my-2">
                        <Icon name="ArrowDown" size={20} className="text-text-tertiary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trade-offs & Decisions */}
          <div className="space-y-6">
            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Design Decisions</h4>
              <div className="space-y-3">
                {architecture.decisions.map((decision, idx) => (
                  <div key={idx} className="p-3 bg-surface rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={16} className="text-warning-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-text-primary text-sm">{decision.title}</h5>
                        <p className="text-xs text-text-secondary mt-1">{decision.rationale}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Trade-offs</h4>
              <div className="space-y-3">
                {architecture.tradeoffs.map((tradeoff, idx) => (
                  <div key={idx} className="space-y-2">
                    <h5 className="font-medium text-text-primary text-sm">{tradeoff.aspect}</h5>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-success-50 rounded border border-success-200">
                        <div className="flex items-center space-x-1 mb-1">
                          <Icon name="Plus" size={12} className="text-success-600" />
                          <span className="text-xs font-medium text-success-700">Pros</span>
                        </div>
                        <p className="text-xs text-success-600">{tradeoff.pros}</p>
                      </div>
                      <div className="p-2 bg-error-50 rounded border border-error-200">
                        <div className="flex items-center space-x-1 mb-1">
                          <Icon name="Minus" size={12} className="text-error-600" />
                          <span className="text-xs font-medium text-error-700">Cons</span>
                        </div>
                        <p className="text-xs text-error-600">{tradeoff.cons}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Scaling Considerations</h4>
              <div className="space-y-2">
                {architecture.scaling.map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-accent-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-secondary">{point}</p>
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

export default ArchitectureDiagram;