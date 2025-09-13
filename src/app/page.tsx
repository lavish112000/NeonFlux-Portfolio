import { ArrowRight, Globe, Sparkles, Star, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const stats = [
    { icon: <Globe className="h-6 w-6" />, value: '50+', label: 'Work Completed' },
    { icon: <Users className="h-6 w-6" />, value: '100+', label: 'Happy Clients' },
    { icon: <Star className="h-6 w-6" />, value: '4.9', label: 'Average Rating' },
    { icon: <TrendingUp className="h-6 w-6" />, value: '99%', label: 'Success Rate' }
  ];

  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Cutting-Edge Design',
      description: 'Futuristic UI/UX with glassmorphism, ambient lighting, and award-winning animations'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance First',
      description: 'Optimized for speed with modern technologies and best practices'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Full-Stack Expertise',
      description: 'End-to-end development from concept to deployment across all platforms'
    }
  ];

  return (
    <div className='flex flex-col min-h-screen particle-bg'>
      <Header />
      <main className='flex-1'>
        <HeroSection />

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glassmorphism-hover text-center interactive-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 animate-floating-orbs">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-3xl font-bold gradient-text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4 animate-cyber-glitch">
                Why Choose Me?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Delivering exceptional results through innovation, expertise, and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="glassmorphism-hover interactive-card" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold gradient-text-secondary mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="glassmorphism-hover max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6 animate-floating-orbs">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text-primary mb-4">
                    Ready to Bring Your Vision to Life?
                  </h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Let&apos;s collaborate on your next work and create something extraordinary together
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="btn-futuristic text-lg px-8 py-3">
                    <Link href="/contact">
                      Start Your Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="hover-lift text-lg px-8 py-3">
                    <Link href="/projects">
                      View My Work
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
