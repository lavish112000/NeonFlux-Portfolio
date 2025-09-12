import React from 'react';
import {
  ArrowLeft,
  Code,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Cog,
} from 'lucide-react';
import Link from 'next/link';

import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    title: 'Full-Stack Web Development',
    icon: <Code className='h-10 w-10 text-primary' />,
    description:
      'Crafting robust and scalable web applications from front-end to back-end. I handle everything from UI/UX implementation to server-side logic and database management, ensuring a seamless user experience.',
    details: [
      'Front-End Development with React & Next.js',
      'Back-End Development with Node.js & Express',
      'RESTful API Design and Integration',
      'Database Architecture (SQL & NoSQL)',
    ],
  },
  {
    title: 'Android App Development',
    icon: <Smartphone className='h-10 w-10 text-green-400' />,
    description:
      'Building native Android applications that are performant, user-friendly, and optimized for a wide range of devices. I focus on clean code, modern architecture, and a great user experience.',
    details: [
      'Native Android Development with Kotlin & Java',
      'Modern UI with Jetpack Compose',
      'MVVM and MVI Architecture Patterns',
      'Integration with Firebase Services',
    ],
  },
  {
    title: 'UI/UX Design & Implementation',
    icon: <Palette className='h-10 w-10 text-accent' />,
    description:
      'Creating intuitive and visually appealing user interfaces. I bridge the gap between design and development, turning wireframes and mockups into pixel-perfect, responsive, and interactive digital experiences.',
    details: [
      'Responsive and Mobile-First Design',
      'Component-Based UI with ShadCN',
      'Interactive Prototyping and User-Flows',
      'Tailwind CSS for Utility-First Styling',
    ],
  },
  {
    title: 'API & Database Services',
    icon: <Database className='h-10 w-10 text-sky-400' />,
    description:
      'Designing and managing efficient databases and developing secure, well-documented APIs to power your applications. I ensure your data is structured for performance and your services are reliable.',
    details: [
      'Database Schema Design and Optimization',
      'API Development (REST, GraphQL)',
      'Third-party API Integration',
      'Data Migration and Management',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className='h-10 w-10 text-amber-400' />,
    description:
      'Deploying and managing applications on cloud platforms like Firebase and Vercel. I implement CI/CD pipelines to automate the development lifecycle, ensuring continuous delivery and high availability.',
    details: [
      'Cloud Deployment (Firebase, Vercel)',
      'Continuous Integration & Deployment (CI/CD)',
      'Serverless Architecture and Functions',
      'Application Monitoring and Logging',
    ],
  },
  {
    title: 'AI Integration',
    icon: <Cog className='h-10 w-10 text-pink-400' />,
    description:
      'Integrating cutting-edge AI capabilities into your applications using technologies like Genkit. From chatbots to data analysis, I can help you leverage AI to create smarter, more powerful software.',
    details: [
      'Generative AI with Genkit',
      'Natural Language Processing (NLP)',
      'AI-Powered Automation and Workflows',
      'Custom AI Model Integration',
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <Button asChild variant='outline'>
            <Link href='/'>
              <ArrowLeft className='mr-2 h-4 w-4' /> Back to Portfolio
            </Link>
          </Button>
        </div>
        <Card className='glassmorphism overflow-hidden'>
          <CardHeader className='text-center'>
            <CardTitle className='text-4xl font-bold glowing-text'>
              My Services
            </CardTitle>
            <p className='text-gray-300 max-w-2xl mx-auto pt-2'>
              Offering a wide range of development services to bring your ideas
              to life. From concept to deployment, I provide end-to-end
              solutions tailored to your needs.
            </p>
          </CardHeader>
          <CardContent className='p-6 space-y-8'>
            <Accordion type='single' collapsible className='w-full'>
              {services.map((service, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={service.title}
                  className='glassmorphism rounded-lg mb-4 px-4 hover-pop'
                >
                  <AccordionTrigger className='text-xl font-semibold text-white hover:no-underline'>
                    <div className='flex items-center gap-4'>
                      {service.icon}
                      <span>{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className='pt-4 text-gray-300'>
                    <p className='mb-4'>{service.description}</p>
                    <ul className='list-disc list-inside space-y-2'>
                      {service.details.map(detail => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ServicesPage;
