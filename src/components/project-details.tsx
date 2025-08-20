import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Code, Wind, BrainCircuit, Flame, Server } from "lucide-react";
import Image from "next/image";
import CircularProgressBar from "./charts/circular-progress-bar";

const technologies = [
  { name: "Next.js", icon: <Code className="h-8 w-8 text-white" /> },
  { name: "React", icon: <Zap className="h-8 w-8 text-sky-400" /> },
  { name: "Tailwind CSS", icon: <Wind className="h-8 w-8 text-teal-400" /> },
  { name: "Genkit", icon: <BrainCircuit className="h-8 w-8 text-pink-400" /> },
  { name: "Firebase", icon: <Flame className="h-8 w-8 text-amber-400" /> },
  { name: "ShadCN UI", icon: <Server className="h-8 w-8 text-gray-400" /> },
];

const features = [
  "AI-Powered Project Curation",
  "Interactive UI with Glassmorphism",
  "Dynamic Charts and Progress Bars",
  "Responsive Design for All Devices",
  "Genkit for Generative AI flows",
];

export default function ProjectDetails() {
  return (
    <Card className="glassmorphism overflow-hidden hover-pop">
      <CardHeader>
        <CardTitle className="text-3xl font-bold glowing-text">Firebase Studio Project</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">About the Project</h3>
              <p className="text-gray-300">
                This portfolio is a showcase of a modern web application built with cutting-edge technologies. 
                It leverages AI to dynamically curate and display project information, providing an interactive and engaging user experience.
                The design is inspired by glassmorphism, with a neon and dark theme.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center p-4 glassmorphism rounded-lg gap-2 hover-pop">
                    {tech.icon}
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden border-2 border-primary/30 glowing-border">
            <Image
              src="https://placehold.co/1280x720/0A192F/A239CA"
              alt="Firebase Studio Project"
              fill
              className="object-cover"
              data-ai-hint="futuristic dashboard"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="space-y-3">
                {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <CircularProgressBar percentage={98} label="Lighthouse Score" />
                <CircularProgressBar percentage={100} label="Code Quality" />
            </div>
        </div>

      </CardContent>
    </Card>
  );
}