import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  hint: string;
}

export default function ProjectCard({ title, imageUrl, hint }: ProjectCardProps) {
  return (
    <Card className="glassmorphism overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:glowing-border">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            data-ai-hint={hint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold text-white">{title}</CardTitle>
      </CardContent>
    </Card>
  );
}
