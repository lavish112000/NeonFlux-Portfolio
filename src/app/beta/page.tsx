import React from 'react';
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Code, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectBetaPage: React.FC = () => {
 const technologies = [
    { name: 'Python', icon: <Code className="h-8 w-8 text-yellow-400" /> },
    { name: 'Django', icon: <Shield className="h-8 w-8 text-green-500" /> },
    { name: 'PostgreSQL', icon: <Database className="h-8 w-8 text-blue-400" /> },
  ];

  const features = [
    "Secure Code Execution",
    "Encrypted File Storage",
    "Activity Logging Concealment"
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
        <Card className="glassmorphism overflow-hidden">
          <CardHeader>
            <CardTitle className="text-3xl font-bold glowing-text">Project Beta: Stealth Coder</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">About Project</h3>
                  <p className="text-gray-300">
                    Project Beta, the Stealth Coder, is designed to provide a discreet and efficient coding environment. It allows developers to work on sensitive projects without leaving a trace, ensuring maximum privacy.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technology Used</h3>
                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                      <div key={tech.name} className="flex flex-col items-center justify-center p-4 glassmorphism rounded-lg gap-2">
                        {tech.icon}
                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="aspect-video relative rounded-lg overflow-hidden border-2 border-primary/30 glowing-border">
                <Image
                  src="https://placehold.co/1280x720/0A192F/4287f5"
                  alt="Stealth Coder"
                  fill
                  className="object-cover"
                  data-ai-hint="secure code interface"
                />
              </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="space-y-3 list-disc list-inside">
                {features.map((feature) => (
                    <li key={feature} className="text-gray-300">{feature}</li>
                ))}
                </ul>
            </div>

             <div>
                <h3 className="text-xl font-semibold text-white mb-4">Project Details from AI</h3>
                <p className="text-gray-300">
                  AI analysis indicates that Project Beta utilizes advanced encryption techniques and obfuscation methods to ensure code security and operational stealth, making it ideal for high-security development tasks.
                </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
 );
};

export default ProjectBetaPage;