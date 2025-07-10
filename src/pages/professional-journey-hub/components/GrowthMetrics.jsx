import React from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useTheme } from '../../../contexts/ThemeContext';

const GrowthMetrics = () => {
  const { theme } = useTheme();
  
  // Theme-aware colors
  const getThemeColors = () => {
    const isDark = theme === 'dark';
    return {
      text: isDark ? '#F8FAFC' : '#0F172A',
      textSecondary: isDark ? '#CBD5E1' : '#64748B',
      grid: isDark ? '#475569' : '#E2E8F0',
      tooltipBg: isDark ? '#1E293B' : '#F1F5F9',
      tooltipBorder: isDark ? '#475569' : '#E2E8F0'
    };
  };
  const skillEvolutionData = [
    { year: '2019', Frontend: 65, Backend: 45, DevOps: 25, Mobile: 20 },
    { year: '2020', Frontend: 75, Backend: 60, DevOps: 40, Mobile: 35 },
    { year: '2021', Frontend: 85, Backend: 75, DevOps: 60, Mobile: 50 },
    { year: '2022', Frontend: 90, Backend: 85, DevOps: 75, Mobile: 65 },
    { year: '2023', Frontend: 95, Backend: 90, DevOps: 85, Mobile: 80 },
    { year: '2024', Frontend: 98, Backend: 95, DevOps: 90, Mobile: 85 }
  ];

  const projectComplexityData = [
    { year: '2019', complexity: 3.2, projects: 8 },
    { year: '2020', complexity: 4.1, projects: 12 },
    { year: '2021', complexity: 5.8, projects: 15 },
    { year: '2022', complexity: 7.2, projects: 18 },
    { year: '2023', complexity: 8.5, projects: 22 },
    { year: '2024', complexity: 9.1, projects: 25 }
  ];

  const learningActivitiesData = [
    { name: 'Online Courses', value: 35, color: '#8B5CF6' },
    { name: 'Conferences', value: 20, color: '#10B981' },
    { name: 'Books & Articles', value: 25, color: '#F59E0B' },
    { name: 'Open Source', value: 15, color: '#EF4444' },
    { name: 'Mentoring Others', value: 5, color: '#8B5CF6' }
  ];

  const achievements = [
    {
      category: 'Technical Impact',
      icon: 'Code',
      metrics: [
        { label: 'Applications Built', value: '45+', trend: '+12 this year' },
        { label: 'Users Impacted', value: '2.3M+', trend: '+800K this year' },
        { label: 'Performance Improvements', value: '60%', trend: 'Average optimization' },
        { label: 'Bug Resolution Rate', value: '98.5%', trend: 'First-time fix rate' }
      ]
    },
    {
      category: 'Team Leadership',
      icon: 'Users',
      metrics: [
        { label: 'Developers Mentored', value: '28', trend: '+8 this year' },
        { label: 'Teams Led', value: '6', trend: 'Cross-functional teams' },
        { label: 'Knowledge Sessions', value: '120+', trend: 'Internal presentations' },
        { label: 'Code Reviews', value: '1,200+', trend: 'Constructive feedback' }
      ]
    },
    {
      category: 'Continuous Learning',
      icon: 'TrendingUp',
      metrics: [
        { label: 'Certifications Earned', value: '12', trend: '+3 this year' },
        { label: 'Conferences Attended', value: '35+', trend: 'Speaking at 8' },
        { label: 'Open Source Contributions', value: '450+', trend: 'GitHub commits' },
        { label: 'Technologies Mastered', value: '25+', trend: 'Production-ready' }
      ]
    }
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Senior Technical Lead',
      description: 'Promoted to lead architecture decisions for enterprise-scale applications',
      impact: 'Led team of 12 developers across 3 products'
    },
    {
      year: '2023',
      title: 'Open Source Contributor',
      description: 'Became core contributor to popular React ecosystem libraries',
      impact: '50K+ weekly downloads on published packages'
    },
    {
      year: '2022',
      title: 'Conference Speaker',
      description: 'Started speaking at international developer conferences',
      impact: 'Reached 5,000+ developers through presentations'
    },
    {
      year: '2021',
      title: 'Full Stack Mastery',
      description: 'Achieved proficiency across entire technology stack',
      impact: 'Reduced project delivery time by 40%'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4">
          Growth Metrics & Achievements
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Quantified evidence of continuous improvement, technical impact, and professional development 
          throughout my career journey.
        </p>
      </div>

      {/* Achievement Categories */}
      <div className="grid lg:grid-cols-3 gap-6">
        {achievements.map((category, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                <Icon 
                  name={category.icon} 
                  size={24} 
                  className="text-white"
                />
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {category.category}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.metrics.map((metric, metricIndex) => (
                <div key={metricIndex} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">
                      {metric.label}
                    </p>
                    <p className="text-2xl font-bold text-text-primary">
                      {metric.value}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-conversion-accent font-medium">
                      {metric.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill Evolution Chart */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
          <Icon name="TrendingUp" size={24} className="mr-3 text-accent" />
          Skill Evolution Over Time
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={skillEvolutionData}>
              <CartesianGrid strokeDasharray="3 3" stroke={getThemeColors().grid} />
              <XAxis dataKey="year" stroke={getThemeColors().textSecondary} />
              <YAxis stroke={getThemeColors().textSecondary} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: getThemeColors().tooltipBg, 
                  border: `1px solid ${getThemeColors().tooltipBorder}`,
                  borderRadius: '8px',
                  color: getThemeColors().text
                }}
                cursor={{ fill: 'transparent' }}
              />
              <Line type="monotone" dataKey="Frontend" stroke="#8B5CF6" strokeWidth={3} />
              <Line type="monotone" dataKey="Backend" stroke="#10B981" strokeWidth={3} />
              <Line type="monotone" dataKey="DevOps" stroke="#F59E0B" strokeWidth={3} />
              <Line type="monotone" dataKey="Mobile" stroke="#EF4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
            <span className="text-sm text-text-secondary">Frontend Development</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-text-secondary">Backend Development</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-sm text-text-secondary">DevOps & Infrastructure</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-text-secondary">Mobile Development</span>
          </div>
        </div>
      </div>

      {/* Project Complexity & Learning Activities */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Project Complexity */}
        <div className="card p-6">
          <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
            <Icon name="BarChart3" size={24} className="mr-3 text-accent" />
            Project Complexity Growth
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectComplexityData}>
                <CartesianGrid strokeDasharray="3 3" stroke={getThemeColors().grid} />
                <XAxis dataKey="year" stroke={getThemeColors().textSecondary} />
                <YAxis stroke={getThemeColors().textSecondary} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: getThemeColors().tooltipBg, 
                    border: `1px solid ${getThemeColors().tooltipBorder}`,
                    borderRadius: '8px',
                    color: getThemeColors().text
                  }}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar dataKey="complexity" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-text-secondary mt-4 text-center">
            Complexity score based on technology stack, team size, and project scope
          </p>
        </div>

        {/* Learning Activities */}
        <div className="card p-6">
          <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
            <Icon name="PieChart" size={24} className="mr-3 text-accent" />
            Learning Time Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={learningActivitiesData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {learningActivitiesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: getThemeColors().tooltipBg, 
                    border: `1px solid ${getThemeColors().tooltipBorder}`,
                    borderRadius: '8px',
                    color: getThemeColors().text
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Career Milestones */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
          <Icon name="Award" size={24} className="mr-3 text-accent" />
          Career Milestones
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="bg-surface rounded-lg p-6 h-full">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-text-primary mb-2">
                    {milestone.title}
                  </h4>
                </div>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {milestone.description}
                </p>
                <div className="bg-conversion-accent/10 rounded-lg p-3">
                  <p className="text-xs font-medium text-conversion-accent">
                    Impact: {milestone.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowthMetrics;