"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const navLinks = ["Case", "Portfolio"];

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold glowing-text text-white">NOWS</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-lg text-gray-300 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Shiva
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/90 backdrop-blur-lg border-l border-slate-700/50">
                <div className="flex flex-col items-center justify-center h-full">
                  <nav className="flex flex-col items-center space-y-8 mb-8">
                    {navLinks.map((link) => (
                      <a key={link} href="#" className="text-2xl text-gray-300 hover:text-primary transition-colors">
                        {link}
                      </a>
                    ))}
                  </nav>
                  <Button className="font-bold text-white bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Shiva
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
