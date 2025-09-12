'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Star, Eye, Code, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'neonflux-portfolio',
      title: 'NeonFlux Portfolio',
      description: 'A cutting-edge portfolio website featuring futuristic design, advanced animations, and interactive elements built with Next.js and Tailwind CSS.',
      longDescription: 'This portfolio showcases modern web development techniques with glassmorphism effects, ambient lighting, and award-winning animations. Features include responsive design, SEO optimization, and performance monitoring.',
      image: 'https://placehold.co/800x600/0A192F/A239CA',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'web',
      status: 'Live',
      github: 'https://github.com/lavish112000/NeonFlux-Portfolio',
      demo: 'https://neonflux-portfolio.vercel.app',
      features: [
        'Futuristic glassmorphism design',
        'Advanced CSS animations',
        'Responsive mobile-first approach',
        'SEO optimized',
        'Performance monitoring'
      ],
      metrics: { stars: 42, views: 1200, contributors: 1 },
      timeline: '2024',
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Chatbot Platform',
      description: 'Intelligent conversational AI platform with natural language processing, multi-language support, and real-time analytics.',
      longDescription: 'Built a scalable chatbot platform using modern AI technologies, featuring advanced NLP capabilities, sentiment analysis, and seamless integration with popular messaging platforms.',
      image: 'https://placehold.co/800x600/0A192F/4287f5',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
      category: 'ai',
      status: 'Live',
      github: 'https://github.com/lavish112000/ai-chatbot',
      demo: 'https://ai-chatbot-demo.vercel.app',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Real-time analytics',
        'Sentiment analysis',
        'Platform integrations'
      ],
      metrics: { stars: 89, views: 2500, contributors: 3 },
      timeline: '2023-2024',
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 'cloud-dashboard',
      title: 'Cloud Infrastructure Dashboard',
      description: 'Comprehensive cloud monitoring dashboard with real-time metrics, automated alerts, and predictive analytics.',
      longDescription: 'Developed a full-stack monitoring solution for cloud infrastructure, providing real-time insights, automated scaling recommendations, and comprehensive reporting capabilities.',
      image: 'https://placehold.co/800x600/0A192F/A239CA',
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Grafana', 'Prometheus'],
      category: 'cloud',
      status: 'In Development',
      github: 'https://github.com/lavish112000/cloud-dashboard',
      demo: null,
      features: [
        'Real-time monitoring',
        'Automated alerts',
        'Predictive analytics',
        'Multi-cloud support',
        'Custom dashboards'
      ],
      metrics: { stars: 67, views: 1800, contributors: 2 },
      timeline: '2024',
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 'ecommerce-platform',
      title: 'Modern E-Commerce Platform',
      description: 'Full-featured e-commerce solution with advanced product management, payment processing, and customer analytics.',
      longDescription: 'Built a comprehensive e-commerce platform with modern architecture, featuring secure payment processing, inventory management, customer segmentation, and advanced analytics.',
      image: 'https://placehold.co/800x600/0A192F/4287f5',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'AWS S3', 'Vercel'],
      category: 'web',
      status: 'Live',
      github: 'https://github.com/lavish112000/ecommerce-platform',
      demo: 'https://modern-ecommerce.vercel.app',
      features: [
        'Secure payment processing',
        'Inventory management',
        'Customer analytics',
        'Mobile responsive',
        'SEO optimized'
      ],
      metrics: { stars: 156, views: 4200, contributors: 4 },
      timeline: '2023-2024',
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 'mobile-fitness',
      title: 'AI Fitness Companion',
      description: 'Mobile app combining AI-powered workout planning, nutrition tracking, and health monitoring with gamification.',
      longDescription: 'Developed a comprehensive fitness application featuring AI-driven workout recommendations, nutrition analysis, progress tracking, and social features to keep users motivated.',
      image: 'https://placehold.co/800x600/0A192F/A239CA',
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'MongoDB'],
      category: 'mobile',
      status: 'Beta',
      github: 'https://github.com/lavish112000/ai-fitness',
      demo: null,
      features: [
        'AI workout planning',
        'Nutrition tracking',
        'Progress analytics',
        'Social features',
        'Gamification'
      ],
      metrics: { stars: 78, views: 2100, contributors: 2 },
      timeline: '2024',
      icon: <Zap className="h-6 w-6" />
    },
    {
      id: 'data-visualization',
      title: 'Real-Time Data Visualization Suite',
      description: 'Advanced data visualization platform with interactive charts, real-time updates, and collaborative features.',
      longDescription: 'Created a powerful data visualization platform supporting multiple chart types, real-time data streaming, collaborative editing, and export capabilities for various data formats.',
      image: 'https://placehold.co/800x600/0A192F/4287f5',
      technologies: ['D3.js', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
      category: 'data',
      status: 'Live',
      github: 'https://github.com/lavish112000/data-viz-suite',
      demo: 'https://data-viz-suite.vercel.app',
      features: [
        'Interactive charts',
        'Real-time updates',
        'Collaborative editing',
        'Multiple export formats',
        'Custom dashboards'
      ],
      metrics: { stars: 134, views: 3800, contributors: 5 },
      timeline: '2023-2024',
      icon: <Code className="h-6 w-6" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI & ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'cloud', name: 'Cloud & DevOps', count: projects.filter(p => p.category === 'cloud').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'data', name: 'Data & Analytics', count: projects.filter(p => p.category === 'data').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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
          <h1 className="text-4xl md:text-5xl font-bold gradient-text-primary mb-4 animate-hologram-flicker">
            Featured Work
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovation through code, design, and technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? 'default' : 'outline'}
              className={`btn-futuristic ${filter === category.id ? 'neon-glow' : ''}`}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="glassmorphism-hover interactive-card overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized={true}
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={project.status === 'Live' ? 'default' : project.status === 'Beta' ? 'secondary' : 'outline'}
                    className={project.status === 'Live' ? 'neon-glow' : ''}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-4 text-white/90 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{project.metrics.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{project.metrics.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{project.metrics.contributors}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl gradient-text-primary">{project.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{project.timeline}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-300">{project.description}</p>

                <div>
                  <h4 className="text-lg font-semibold gradient-text-secondary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold gradient-text-accent mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="hover-lift text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="hover-lift">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="btn-futuristic">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="glassmorphism text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text-primary mb-2">
                {projects.reduce((sum, p) => sum + p.metrics.stars, 0)}
              </div>
              <div className="text-gray-400">GitHub Stars</div>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text-accent mb-2">
                {projects.reduce((sum, p) => sum + p.metrics.views, 0).toLocaleString()}
              </div>
              <div className="text-gray-400">Total Views</div>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text-secondary mb-2">
                {projects.length}
              </div>
              <div className="text-gray-400">Projects</div>
            </CardContent>
          </Card>
          <Card className="glassmorphism text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text-primary mb-2">
                {new Set(projects.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-400">Technologies</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glassmorphism-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Code className="h-12 w-12 mx-auto mb-4 text-primary animate-floating-orbs" />
              <h3 className="text-2xl font-bold gradient-text-primary mb-4">Have a Project in Mind?</h3>
              <p className="text-gray-300 mb-6">
                Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <Button asChild className="btn-futuristic text-lg px-8 py-3">
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
