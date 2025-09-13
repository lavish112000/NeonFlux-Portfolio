'use server';

import {
    curateProjects,
    type CurateProjectsInput,
} from '@/ai/flows/project-curation';
import { logger } from '@/lib/logger';

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
    logger.error('AI curation failed:', error);
    return { error: 'Failed to curate projects.' };
  }
}
