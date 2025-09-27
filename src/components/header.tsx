'use client';

import { Menu, X, Home, User, Briefcase, Code, FolderOpen, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useHydrated } from '@/hooks/use-hydration';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hydrated = useHydrated();

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'About', href: '/about', icon: <User className="h-4 w-4" /> },
    { name: 'Experience', href: '/experience', icon: <Briefcase className="h-4 w-4" /> },
    { name: 'Skills', href: '/skills', icon: <Code className="h-4 w-4" /> },
    { name: 'My Work', href: '/projects', icon: <FolderOpen className="h-4 w-4" /> },
    { name: 'Services', href: '/services', icon: <Sparkles className="h-4 w-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'glassmorphism-hover py-3'
        : 'glassmorphism py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold glowing-text text-white hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="animate-neon-pulse">LC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-300 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 group flex items-center space-x-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="group-hover:animate-bounce">{link.icon}</span>
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-futuristic">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            {hydrated ? (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-primary/20">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-background/95 backdrop-blur-xl border-l border-slate-700/50 w-80"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-8">
                      <Link
                        href="/"
                        className="text-xl font-bold glowing-text flex items-center space-x-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <span>NOWS</span>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:bg-primary/20"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1">
                      <div className="space-y-2">
                        {navLinks.map((link, index) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center space-x-4 px-4 py-3 text-gray-300 hover:text-primary hover:bg-primary/10 transition-all duration-300 rounded-lg group"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:animate-pulse">
                              {link.icon}
                            </div>
                            <span className="font-medium">{link.name}</span>
                          </Link>
                        ))}
                      </div>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-8">
                      <Button asChild className="btn-futuristic w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        <Link href="/contact">Get In Touch</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            ) : (
              <Button variant="ghost" size="icon" className="text-white hover:bg-primary/20">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-data-stream"></div>
    </header>
  );
}
