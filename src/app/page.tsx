import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1 container mx-auto px-4 py-8'>
        <HeroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
