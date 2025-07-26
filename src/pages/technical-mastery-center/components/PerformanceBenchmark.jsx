import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const PerformanceBenchmark = ({ benchmark }) => {
  const [activeMetric, setActiveMetric] = useState('performance');
  const { isDark } = useTheme();

  const getMetricData = () => {
    switch (activeMetric) {
      case 'performance':
        return benchmark.performanceData;
      case 'memory':
        return benchmark.memoryData;
      case 'scalability':
        return benchmark.scalabilityData;
      default:
        return benchmark.performanceData;
    }
  };

  const getMetricColor = (approach) => {
    const colors = {
      'Optimized': '#10B981',
      'Standard': '#8B5CF6',
      'Legacy': '#EF4444',
      'Experimental': '#8B5CF6'
    };
    return colors[approach] || '#64748B';
  };

  // Custom tooltip component to avoid white background
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`px-3 py-2 rounded-xl border shadow-lg ${
          isDark 
            ? 'bg-gray-800 border-gray-600 text-gray-100' 
            : 'bg-gray-900 border-gray-700 text-gray-100'
        }`}>
          <p className="font-semibold text-sm mb-1">{label}</p>
          <p className="text-sm">
            <span className="text-violet-400 font-bold">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface border border-surface-secondary rounded-xl overflow-hidden">
      <div className="bg-success-600 text-white px-6 py-4">
        <div className="flex items-center space-x-3">
          <Icon name="Zap" size={24} />
          <div>
            <h3 className="text-xl font-semibold">{benchmark.title}</h3>
            <p className="text-green-100 text-sm">{benchmark.description}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Metric Selection */}
          <div className="lg:col-span-1">
            <div className="bg-background rounded-lg p-4 border border-surface-secondary mb-6">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Benchmark Metrics</h4>
              <div className="space-y-2">
                {benchmark.metrics.map((metric) => (
                  <button
                    key={metric.key}
                    onClick={() => setActiveMetric(metric.key)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                      activeMetric === metric.key
                        ? 'bg-accent-50 border border-accent-200 text-accent-700' :'bg-surface hover:bg-surface-secondary text-text-secondary'
                    }`}
                  >
                    <Icon name={metric.icon} size={20} />
                    <div>
                      <h5 className="font-medium">{metric.name}</h5>
                      <p className="text-xs opacity-75">{metric.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-surface-secondary">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Test Environment</h4>
              <div className="space-y-3">
                {benchmark.environment.map((env, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">{env.key}</span>
                    <span className="text-sm font-medium text-text-primary">{env.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="lg:col-span-2">
            <div className="bg-background rounded-lg p-4 border border-surface-secondary mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-text-primary">
                  {benchmark.metrics.find(m => m.key === activeMetric)?.name} Comparison
                </h4>
                <div className="flex items-center space-x-2">
                  <Icon name="BarChart3" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary">Performance Analysis</span>
                </div>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={getMetricData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#E2E8F0"} />
                    <XAxis 
                      dataKey="approach" 
                      tick={{ fontSize: 12, fill: isDark ? '#9CA3AF' : '#64748B' }}
                      axisLine={{ stroke: isDark ? '#4B5563' : '#CBD5E1' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: isDark ? '#9CA3AF' : '#64748B' }}
                      axisLine={{ stroke: isDark ? '#4B5563' : '#CBD5E1' }}
                    />
                    <Tooltip 
                      content={<CustomTooltip />}
                      cursor={{ fill: 'transparent' }}
                    />
                    <Bar 
                      dataKey="value" 
                      fill="#8B5CF6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background rounded-lg p-4 border border-surface-secondary">
                <h5 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-success-600" />
                  <span>Best Performer</span>
                </h5>
                <div className="space-y-2">
                  <div className="p-3 bg-success-50 border border-success-200 rounded-lg">
                    <h6 className="font-medium text-success-700">{benchmark.bestPerformer.approach}</h6>
                    <p className="text-success-600 text-sm mt-1">{benchmark.bestPerformer.reason}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs text-success-600">Improvement:</span>
                      <span className="text-xs font-medium text-success-700">{benchmark.bestPerformer.improvement}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-4 border border-surface-secondary">
                <h5 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={16} className="text-warning-600" />
                  <span>Recommendations</span>
                </h5>
                <div className="space-y-2">
                  {benchmark.recommendations.map((rec, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Icon name="ArrowRight" size={12} className="text-accent-600 mt-1 flex-shrink-0" />
                      <p className="text-sm text-text-secondary">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mt-4 bg-background rounded-lg p-4 border border-surface-secondary">
              <h5 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
                <Icon name="Target" size={16} className="text-accent-600" />
                <span>Use Case Recommendations</span>
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benchmark.useCases.map((useCase, idx) => (
                  <div key={idx} className="p-3 bg-surface rounded-lg border border-surface-secondary">
                    <h6 className="font-medium text-text-primary text-sm">{useCase.scenario}</h6>
                    <p className="text-xs text-text-secondary mt-1">{useCase.recommendation}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs rounded">
                        {useCase.approach}
                      </span>
                      <span className="text-xs text-text-tertiary">{useCase.reason}</span>
                    </div>
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

export default PerformanceBenchmark;