import React from 'react';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Zap, Wind, BrainCircuit, Flame, Server, Award, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const AboutPage: React.FC = () => {
  const skills = [
    { name: "Next.js", icon: <Code className="h-8 w-8 text-white" /> },
    { name: "React", icon: <Zap className="h-8 w-8 text-sky-400" /> },
    { name: "Tailwind CSS", icon: <Wind className="h-8 w-8 text-teal-400" /> },
    { name: "Genkit", icon: <BrainCircuit className="h-8 w-8 text-pink-400" /> },
    { name: "Firebase", icon: <Flame className="h-8 w-8 text-amber-400" /> },
    { name: "Node.js", icon: <Server className="h-8 w-8 text-green-400" /> },
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, title: "Problem Solver", description: "Expert in algorithmic thinking and system design" },
    { icon: <Users className="h-6 w-6" />, title: "Team Player", description: "Collaborative development and cross-functional expertise" },
    { icon: <Lightbulb className="h-6 w-6" />, title: "Innovator", description: "Driving technological advancements and best practices" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
        </div>
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold glowing-text mb-4">About Me</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate Software Developer Engineer crafting innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Profile Card */}
          <div className="lg:col-span-2">
            <Card className="glassmorphism overflow-hidden hover-pop h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold glowing-text">Professional Profile</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Software Developer Engineer</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      As a dedicated Software Developer Engineer, I specialize in architecting and implementing robust, scalable software solutions that drive business value. With expertise spanning the full software development lifecycle, I excel in transforming complex requirements into elegant, efficient code.
                    </p>
                    <p>
                      My approach combines deep technical knowledge with strategic thinking, ensuring that every solution is not only technically sound but also aligned with business objectives and user needs. I thrive in dynamic environments where innovation and continuous improvement are paramount.
                    </p>
                    <p>
                      Through collaborative development practices and adherence to industry best practices, I contribute to building high-performance systems that scale seamlessly and deliver exceptional user experiences.
                    </p>
                  </div>
                </div>
                
                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Strengths</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 glassmorphism rounded-lg">
                        <div className="text-primary mt-1">{achievement.icon}</div>
                        <div>
                          <h5 className="font-medium text-white text-sm">{achievement.title}</h5>
                          <p className="text-gray-400 text-xs">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portrait Card */}
          <div className="lg:col-span-1">
            <Card className="glassmorphism overflow-hidden hover-pop">
              <CardContent className="p-6">
                <div className="aspect-square relative rounded-lg overflow-hidden border-2 border-primary/30 glowing-border max-w-xs mx-auto">
                  <Image
                    src="https://placehold.co/400x400/0A192F/A239CA"
                    alt="Software Developer Engineer Portrait"
                    fill
                    className="object-cover"
                    unoptimized={true}
                    data-ai-hint="software developer engineer portrait"
                  />
                </div>
                <div className="text-center mt-4">
                  <Badge variant="secondary" className="text-sm">
                    Software Developer Engineer
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <Card className="glassmorphism overflow-hidden hover-pop">
          <CardHeader>
            <CardTitle className="text-2xl font-bold glowing-text">Technical Expertise</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div>
              <p className="text-gray-300 mb-6">
                Leveraging cutting-edge technologies to build modern, efficient, and maintainable software solutions.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-4 glassmorphism rounded-lg gap-2 hover-pop transition-all duration-300">
                    {skill.icon}
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AboutPage;