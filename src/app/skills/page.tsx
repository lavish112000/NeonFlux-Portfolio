'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Database, Cloud, Smartphone, Brain, Zap, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({});

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Code className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95, experience: '4+ years', projects: 25 },
        { name: 'TypeScript', level: 92, experience: '3+ years', projects: 20 },
        { name: 'JavaScript (ES6+)', level: 98, experience: '5+ years', projects: 40 },
        { name: 'HTML5/CSS3', level: 96, experience: '5+ years', projects: 50 },
        { name: 'Tailwind CSS', level: 90, experience: '2+ years', projects: 15 },
        { name: 'Vue.js', level: 85, experience: '2+ years', projects: 8 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: <Database className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88, experience: '4+ years', projects: 18 },
        { name: 'Python', level: 85, experience: '3+ years', projects: 12 },
        { name: 'Express.js', level: 90, experience: '4+ years', projects: 20 },
        { name: 'GraphQL', level: 82, experience: '2+ years', projects: 6 },
        { name: 'REST APIs', level: 95, experience: '5+ years', projects: 35 },
        { name: 'Microservices', level: 80, experience: '2+ years', projects: 5 }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: <Cloud className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 90, experience: '3+ years', projects: 15 },
        { name: 'Docker', level: 87, experience: '3+ years', projects: 20 },
        { name: 'Kubernetes', level: 75, experience: '1+ years', projects: 3 },
        { name: 'CI/CD', level: 85, experience: '3+ years', projects: 12 },
        { name: 'Terraform', level: 70, experience: '1+ years', projects: 2 },
        { name: 'Azure', level: 78, experience: '2+ years', projects: 6 }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      icon: <Smartphone className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 82, experience: '2+ years', projects: 5 },
        { name: 'Flutter', level: 70, experience: '1+ years', projects: 2 },
        { name: 'iOS Development', level: 65, experience: '1+ years', projects: 1 },
        { name: 'Android Development', level: 68, experience: '1+ years', projects: 1 }
      ]
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: <Brain className="h-8 w-8" />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'TensorFlow', level: 72, experience: '1+ years', projects: 3 },
        { name: 'Python ML', level: 75, experience: '1+ years', projects: 4 },
        { name: 'NLP', level: 68, experience: '1+ years', projects: 2 },
        { name: 'Computer Vision', level: 65, experience: '1+ years', projects: 1 }
      ]
    }
  ];

  const tools = [
    { name: 'Git', category: 'Version Control', proficiency: 'Expert' },
    { name: 'VS Code', category: 'IDE', proficiency: 'Expert' },
    { name: 'Postman', category: 'API Testing', proficiency: 'Advanced' },
    { name: 'Figma', category: 'Design', proficiency: 'Intermediate' },
    { name: 'MongoDB', category: 'Database', proficiency: 'Advanced' },
    { name: 'PostgreSQL', category: 'Database', proficiency: 'Advanced' },
    { name: 'Redis', category: 'Database', proficiency: 'Intermediate' },
    { name: 'Jest', category: 'Testing', proficiency: 'Advanced' },
    { name: 'Cypress', category: 'Testing', proficiency: 'Intermediate' }
  ];

  useEffect(() => {
    // Animate progress bars on load
    const timer = setTimeout(() => {
      const newAnimatedProgress: Record<string, number> = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          newAnimatedProgress[`${category.id}-${skill.name}`] = skill.level;
        });
      });
      setAnimatedProgress(newAnimatedProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="flex flex-col min-h-screen particle-bg">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="outline" className="btn-futuristic">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text-primary mb-4 animate-cyber-glitch">
            Technical Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastering the art of software development with cutting-edge technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            onClick={() => setActiveCategory('all')}
            variant={activeCategory === 'all' ? 'default' : 'outline'}
            className={`btn-futuristic ${activeCategory === 'all' ? 'neon-glow' : ''}`}
          >
            All Skills
          </Button>
          {skillCategories.map(category => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`btn-futuristic ${activeCategory === category.id ? 'neon-glow' : ''}`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={category.id} className="glassmorphism-hover interactive-card" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <CardHeader>
                <div className={`p-4 rounded-lg bg-gradient-to-br ${category.color} w-fit mb-4 animate-floating-orbs`}>
                  {category.icon}
                </div>
                <CardTitle className="text-xl gradient-text-primary">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3" style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-accent">{animatedProgress[`${category.id}-${skill.name}`] || 0}%</span>
                        <Badge variant="outline" className="text-xs">{skill.experience}</Badge>
                      </div>
                    </div>
                    <Progress
                      value={animatedProgress[`${category.id}-${skill.name}`] || 0}
                      className="h-3"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>{skill.projects} projects</span>
                      <span>{skill.experience}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="glassmorphism-hover mb-16">
          <CardHeader>
            <CardTitle className="text-3xl gradient-text-secondary text-center">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between p-4 glassmorphism rounded-lg hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <h4 className="font-semibold gradient-text-primary">{tool.name}</h4>
                    <p className="text-sm text-gray-400">{tool.category}</p>
                  </div>
                  <Badge
                    variant={tool.proficiency === 'Expert' ? 'default' : tool.proficiency === 'Advanced' ? 'secondary' : 'outline'}
                    className={tool.proficiency === 'Expert' ? 'neon-glow' : ''}
                  >
                    {tool.proficiency}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Development Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="glassmorphism-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text-accent flex items-center">
                <Target className="h-6 w-6 mr-2" />
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">AI/ML Integration</span>
                  <span className="text-accent">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Cloud Architecture</span>
                  <span className="text-accent">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Performance Optimization</span>
                  <span className="text-accent">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text-primary flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 glassmorphism rounded-lg">
                <h4 className="font-semibold gradient-text-secondary mb-2">Next Quarter</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Advanced Kubernetes patterns</li>
                  <li>• Rust for system programming</li>
                  <li>• Advanced AI/ML algorithms</li>
                  <li>• Blockchain development</li>
                </ul>
              </div>
              <div className="p-4 glassmorphism rounded-lg">
                <h4 className="font-semibold gradient-text-accent mb-2">This Year</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Cloud architecture certifications</li>
                  <li>• Open source contributions</li>
                  <li>• Technical writing and blogging</li>
                  <li>• Speaking at tech conferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glassmorphism-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Zap className="h-12 w-12 mx-auto mb-4 text-accent animate-neon-pulse" />
              <h3 className="text-2xl font-bold gradient-text-primary mb-4">Ready to Innovate?</h3>
              <p className="text-gray-300 mb-6">
                Let's collaborate on your next project and bring cutting-edge solutions to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-futuristic">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline" className="hover-lift">
                  <Link href="/experience">View Experience</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SkillsPage;
