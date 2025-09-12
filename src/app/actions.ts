'use server';

import {
  curateProjects,
  type CurateProjectsInput,
} from '@/ai/flows/project-curation';

export async function handleSearch(formData: FormData) {
  const searchQuery = formData.get('searchQuery');

  if (typeof searchQuery !== 'string' || !searchQuery) {
    return { error: 'Invalid search query' };
  }

  try {
    const input: CurateProjectsInput = { searchQuery };
    const result = await curateProjects(input);
    return result;
  } catch (error) {
    console.error('AI curation failed:', error);
    return { error: 'Failed to curate projects.' };
  }
}
