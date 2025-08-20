import React from 'react';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, Zap, Wind, BrainCircuit, Flame, Server } from 'lucide-react';
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio</Link>
          </Button>
        </div>
        <Card className="glassmorphism overflow-hidden hover-pop">
          <CardHeader>
            <CardTitle className="text-3xl font-bold glowing-text">About Me</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Developer</h3>
                  <p className="text-gray-300">
                    I am a passionate and results-driven Full-Stack Developer with a knack for creating dynamic, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life, from concept to deployment. My goal is to build software that is not only functional but also provides a delightful user experience.
                  </p>
                </div>
                 <div>
                  <p className="text-gray-300">
                    I thrive in collaborative environments and am always eager to learn new technologies to stay at the forefront of web development. This portfolio showcases my journey and the projects I've poured my heart and code into.
                  </p>
                </div>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden border-2 border-primary/30 glowing-border">
                <Image
                  src="https://placehold.co/800x800/0A192F/A239CA"
                  alt="Developer Portrait"
                  fill
                  className="object-cover"
                  data-ai-hint="developer portrait"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">My Skillset</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                  {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center justify-center p-4 glassmorphism rounded-lg gap-2 hover-pop">
                      {skill.icon}
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AboutPage;