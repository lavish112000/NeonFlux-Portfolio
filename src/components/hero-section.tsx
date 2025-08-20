"use client";

import AnimatedLogo from "@/components/animated-logo";
import GlowingLine from "@/components/glowing-line";
import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [activeLink, setActiveLink] = useState("Work");
  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "/about" }, 
    { name: "Services", href: "/services" }, 
    { name: "Contact", href: "/contact" }
  ];

  return (
    <section className="relative text-center py-20 md:py-32">
      <GlowingLine />
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 z-10 relative glowing-text bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        Portfolio
      </h1>
      <nav className="flex justify-center items-center space-x-4 md:space-x-8 mb-16 z-10 relative">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.name)}
            className={`text-lg md:text-xl font-medium relative transition-colors ${
              activeLink === link.name ? "text-primary" : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
            {activeLink === link.name && (
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full glowing-border"></span>
            )}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center z-10 relative">
        <AnimatedLogo />
      </div>
    </section>
  );
}
