'use client';

import { useState, useTransition } from 'react';
import { Search } from 'lucide-react';

import ProjectDetailView from './project-detail-view';
import ProjectGrid from './project-grid';
import { Skeleton } from './ui/skeleton';
import ProjectDetails from './project-details';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { handleSearch } from '@/app/actions';
import type { CurateProjectsOutput } from '@/ai/flows/project-curation';
import { useToast } from '@/hooks/use-toast';

export default function ProjectsSection() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<CurateProjectsOutput | null>(null);
  const { toast } = useToast();

  const onSearch = (formData: FormData) => {
    const query = formData.get('searchQuery') as string;
    if (!query) {
      return;
    }

    startTransition(async () => {
      const searchResult = await handleSearch(formData);
      if (searchResult && 'projectDetails' in searchResult) {
        setResult(searchResult);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not curate projects. Please try again.',
        });
        setResult(null);
      }
    });
  };

  return (
    <section id='work' className='py-16 md:py-24 space-y-12'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
        <h2 className='text-4xl md:text-5xl font-bold tracking-tight'>
          My Work
        </h2>
        <form action={onSearch} className='w-full md:w-1/3'>
          <div className='relative'>
            <Input
              type='search'
              name='searchQuery'
              placeholder='Search for projects...'
              className='pl-10 h-12 text-base glassmorphism'
              disabled={isPending}
            />
            <Button
              type='submit'
              size='icon'
              variant='ghost'
              className='absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9'
              aria-label='Search'
              disabled={isPending}
            >
              <Search className='h-5 w-5' />
            </Button>
          </div>
        </form>
      </div>

      <ProjectDetails />

      <div className='p-4 md:p-8 rounded-2xl glassmorphism'>
        {isPending ? (
          <div className='space-y-4 p-4'>
            <Skeleton className='h-8 w-1/4 mb-4' />
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
              <div className='lg:col-span-3 space-y-4'>
                <Skeleton className='h-64 w-full' />
                <Skeleton className='h-6 w-1/3' />
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-4 w-4/5' />
              </div>
              <div className='lg:col-span-2 space-y-8'>
                <Skeleton className='h-40 w-full' />
                <Skeleton className='h-40 w-full' />
              </div>
            </div>
          </div>
        ) : (
          <ProjectDetailView projectData={result} />
        )}
      </div>

      <ProjectGrid />
    </section>
  );
}
