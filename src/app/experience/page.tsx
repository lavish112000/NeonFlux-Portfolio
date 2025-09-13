import { ArrowLeft, Award, Briefcase, Calendar, Cloud, Code, Database, MapPin, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Header from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Developer Engineer",
      company: "TechNova Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of next-generation cloud-native applications, architecting scalable microservices, and mentoring junior developers.",
      achievements: [
        "Architected and deployed 15+ microservices handling 10M+ daily requests",
        "Reduced system latency by 40% through performance optimization",
        "Led team of 8 developers across 3 major product releases",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "Kubernetes", "AWS", "Docker", "TypeScript"],
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "Software Developer Engineer",
      company: "InnovateLabs Inc.",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed full-stack web applications, implemented RESTful APIs, and collaborated on agile development teams.",
      achievements: [
        "Built 20+ responsive web applications serving 500K+ users",
        "Designed and implemented scalable database architectures",
        "Collaborated with cross-functional teams in agile environment",
        "Mentored 5 junior developers and conducted code reviews"
      ],
      technologies: ["React", "Python", "PostgreSQL", "Redis", "GraphQL", "Docker"],
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Developed MVP for fintech startup, implemented secure payment systems, and established development best practices.",
      achievements: [
        "Delivered MVP in 4 months ahead of schedule",
        "Implemented PCI-compliant payment processing system",
        "Established coding standards and development workflows",
        "Integrated with 5+ third-party financial APIs"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe API", "JWT", "WebSocket"],
      icon: <Database className="h-6 w-6" />
    }
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
    { name: "React/Next.js", level: 92, category: "Frontend" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Backend" },
    { name: "AWS/Azure", level: 90, category: "Cloud" },
    { name: "Docker/Kubernetes", level: 87, category: "DevOps" },
    { name: "PostgreSQL/MongoDB", level: 88, category: "Database" },
    { name: "GraphQL/REST", level: 90, category: "API" }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023", status: "Active" },
    { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2022", status: "Active" },
    { name: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", year: "2023", status: "Active" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB Inc.", year: "2021", status: "Active" }
  ];

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
            Professional Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A journey through innovation, leadership, and technological excellence
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold gradient-text-secondary mb-8 text-center">Career Journey</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glassmorphism-hover interactive-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 neon-glow">
                        {exp.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl gradient-text-primary">{exp.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-gray-400 mt-2">
                          <div className="flex items-center space-x-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="neon-glow-pink">{exp.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-lg">{exp.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold gradient-text-accent mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-gray-300">
                          <TrendingUp className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold gradient-text-secondary mb-4 flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="hover-lift">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="glassmorphism-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text-primary">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm text-accent">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glassmorphism-hover">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text-accent">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 glassmorphism rounded-lg hover-lift">
                  <div>
                    <h4 className="font-semibold gradient-text-secondary">{cert.name}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                  <Badge variant={cert.status === 'Active' ? 'default' : 'secondary'} className="neon-glow">
                    {cert.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glassmorphism-hover max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary animate-floating-orbs" />
              <h3 className="text-2xl font-bold gradient-text-primary mb-4">Let&apos;s Work Together</h3>
              <p className="text-gray-300 mb-6">
                Ready to bring your next work to life with cutting-edge technology and proven expertise?
              </p>
              <Button asChild className="btn-futuristic text-lg px-8 py-3">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;
