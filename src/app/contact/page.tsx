import { ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactOptions = [
  {
    name: 'GitHub',
    icon: <Github className='h-16 w-16 text-white' />,
    url: 'https://github.com',
    handle: 'view my projects',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className='h-16 w-16 text-sky-500' />,
    url: 'https://www.linkedin.com/in/lalit11/',
    handle: 'connect with me',
  },
  {
    name: 'Email',
    icon: <Mail className='h-16 w-16 text-rose-500' />,
    url: 'mailto:lalitchoudhary112000@gmail.com',
    handle: 'send a message',
  },
];

const ContactPage: React.FC = () => {
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
              Get In Touch
            </CardTitle>
            <p className='text-gray-300 max-w-xl mx-auto pt-2'>
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of an amazing team. Feel free to reach
              out.
            </p>
          </CardHeader>
          <CardContent className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
              {contactOptions.map(option => (
                <Link
                  key={option.name}
                  href={option.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex flex-col items-center justify-center p-8 glassmorphism rounded-lg gap-4 hover-pop cursor-pointer h-full'>
                    {option.icon}
                    <h3 className='text-2xl font-semibold text-white'>
                      {option.name}
                    </h3>
                    <p className='text-primary capitalize'>{option.handle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ContactPage;
