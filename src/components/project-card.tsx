import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  hint: string;
  projectUrl: string;
}

export default function ProjectCard({
  title,
  imageUrl,
  hint,
  projectUrl,
}: ProjectCardProps) {
  return (
    <Link href={projectUrl} passHref>
      <Card className='glassmorphism overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:glowing-border hover:scale-105 cursor-pointer'>
        <CardHeader className='p-0'>
          <div className='aspect-video relative'>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className='object-cover'
              unoptimized={true}
              data-ai-hint={hint}
            />
          </div>
        </CardHeader>
        <CardContent className='p-6'>
          <CardTitle className='text-xl font-bold text-white'>
            {title}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
