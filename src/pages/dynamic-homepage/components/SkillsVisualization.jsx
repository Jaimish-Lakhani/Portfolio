import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Icon from '../../../components/AppIcon';
import { useTheme } from '../../../contexts/ThemeContext';

const SkillsVisualization = () => {
  const [activeView, setActiveView] = useState('technical');
  const [animatedValues, setAnimatedValues] = useState({});
  const { theme } = useTheme();

  // Theme-aware colors
  const getThemeColors = () => {
    const isDark = theme === 'dark';
    return {
      text: isDark ? '#F8FAFC' : '#0F172A',
      textSecondary: isDark ? '#CBD5E1' : '#64748B',
      background: isDark ? '#1E293B' : '#FFFFFF',
      surface: isDark ? '#334155' : '#F8FAFC',
      border: isDark ? '#475569' : '#E2E8F0',
      grid: isDark ? '#475569' : '#E2E8F0',
      accent: '#8B5CF6',
      tooltipBg: isDark ? '#1E293B' : '#FFFFFF',
      tooltipBorder: isDark ? '#475569' : '#E2E8F0'
    };
  };

  const technicalSkills = [
    { name: 'React/Next.js', level: 95, category: 'Frontend', icon: 'Code', color: '#61DAFB' },
    { name: 'Node.js', level: 90, category: 'Backend', icon: 'Server', color: '#339933' },
    { name: 'TypeScript', level: 88, category: 'Language', icon: 'FileCode', color: '#3178C6' },
    { name: 'Python', level: 85, category: 'Language', icon: 'Code2', color: '#3776AB' },
    { name: 'AWS/Cloud', level: 82, category: 'DevOps', icon: 'Cloud', color: '#FF9900' },
    { name: 'MongoDB', level: 87, category: 'Database', icon: 'Database', color: '#47A248' },
    { name: 'Docker', level: 80, category: 'DevOps', icon: 'Container', color: '#2496ED' },
    { name: 'GraphQL', level: 78, category: 'API', icon: 'Zap', color: '#E10098' }
  ];

  const softSkills = [
    { skill: 'Problem Solving', level: 95 },
    { skill: 'Communication', level: 90 },
    { skill: 'Team Leadership', level: 85 },
    { skill: 'Project Management', level: 88 },
    { skill: 'Mentoring', level: 82 },
    { skill: 'Client Relations', level: 87 }
  ];

  const frameworks = [
    { name: 'React Ecosystem', frameworks: ['React', 'Next.js', 'Gatsby', 'React Native'], proficiency: 95 },
    { name: 'Backend Frameworks', frameworks: ['Express.js', 'Fastify', 'NestJS', 'Django'], proficiency: 88 },
    { name: 'CSS Frameworks', frameworks: ['Tailwind', 'Styled Components', 'Material-UI', 'Chakra UI'], proficiency: 92 },
    { name: 'Testing Tools', frameworks: ['Jest', 'Cypress', 'Testing Library', 'Playwright'], proficiency: 85 },
    { name: 'Build Tools', frameworks: ['Vite', 'Webpack', 'Rollup', 'Parcel'], proficiency: 80 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      technicalSkills.forEach(skill => {
        animated[skill.name] = skill.level;
      });
      setAnimatedValues(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const colors = getThemeColors();
      return (
        <div 
          className="p-3 rounded-lg shadow-lg border"
          style={{
            backgroundColor: colors.tooltipBg,
            borderColor: colors.tooltipBorder,
            color: colors.text
          }}
        >
          <p className="font-semibold" style={{ color: colors.text }}>{label}</p>
          <p style={{ color: colors.accent }}>
            Proficiency: <span className="font-bold">{payload[0].value}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Code" size={16} />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical proficiencies, tools, and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-background rounded-lg p-1 border border-surface-secondary">
            {[
              { id: 'technical', label: 'Technical Skills', icon: 'Code' },
              { id: 'frameworks', label: 'Frameworks', icon: 'Layers' },
              { id: 'soft', label: 'Soft Skills', icon: 'Users' }
            ].map((view) => (
              <button
                key={view.id}
                onClick={() => setActiveView(view.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeView === view.id
                    ? 'bg-accent text-accent-foreground shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={view.icon} size={16} />
                <span>{view.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Technical Skills View */}
        {activeView === 'technical' && (
          <div className="space-y-12">
            {/* Skills Chart */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-surface-secondary">
              <h3 className="text-xl font-semibold text-text-primary mb-6">Proficiency Levels</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={technicalSkills} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={getThemeColors().grid} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: getThemeColors().textSecondary }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: getThemeColors().textSecondary }} />
                    <Tooltip 
                      content={<CustomTooltip />}
                      cursor={{ fill: 'transparent' }}
                    />
                    <Bar 
                      dataKey="level" 
                      fill={getThemeColors().accent}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-background rounded-xl p-6 shadow-lg border border-surface-secondary hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <Icon 
                        name={skill.icon} 
                        size={20} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{skill.name}</h4>
                      <span className="text-xs text-text-secondary">{skill.category}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Proficiency</span>
                      <span className="text-sm font-semibold text-text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface-secondary rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedValues[skill.name] || 0}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frameworks View */}
        {activeView === 'frameworks' && (
          <div className="space-y-8">
            {frameworks.map((category, index) => (
              <div
                key={category.name}
                className="bg-background rounded-xl p-8 shadow-lg border border-surface-secondary"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-text-primary">{category.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-text-secondary">Proficiency:</span>
                    <span className="text-lg font-bold text-accent">{category.proficiency}%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.frameworks.map((framework, fIndex) => (
                    <div
                      key={framework}
                      className="bg-surface rounded-lg p-4 text-center border border-surface-secondary hover:border-accent transition-all duration-300"
                    >
                      <span className="text-sm font-medium text-text-primary">{framework}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-surface-secondary rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${category.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills View */}
        {activeView === 'soft' && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Radar Chart */}
            <div className="bg-background rounded-2xl p-8 shadow-lg border border-surface-secondary">
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Soft Skills Radar</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={softSkills}>
                    <PolarGrid stroke={getThemeColors().grid} />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ fontSize: 12, fill: getThemeColors().textSecondary }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 10, fill: getThemeColors().textSecondary }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="level"
                      stroke={getThemeColors().accent}
                      fill={getThemeColors().accent}
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-text-primary">Professional Skills</h3>
              {softSkills.map((skill, index) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary">{skill.skill}</span>
                    <span className="text-sm font-semibold text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-surface-secondary rounded-full h-3">
                    <div
                      className="bg-brand-primary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsVisualization;