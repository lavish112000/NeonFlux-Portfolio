'use server';

/**
 * @fileOverview A project curation AI agent with caching support.
 *
 * - curateProjects - A function that handles the project curation process.
 * - CurateProjectsInput - The input type for the curateProjects function.
 * - CurateProjectsOutput - The return type for the curateProjects function.
 */

import { z } from 'genkit';
import { aiCache } from '@/lib/cache';

import { ai } from '@/ai/genkit';

const CurateProjectsInputSchema = z.object({
  searchQuery: z
    .string()
    .describe('The search query to use for curating projects.'),
});
export type CurateProjectsInput = z.infer<typeof CurateProjectsInputSchema>;

const CurateProjectsOutputSchema = z.object({
  projectDetails: z
    .string()
    .describe('The curated project details based on the search query.'),
});
export type CurateProjectsOutput = z.infer<typeof CurateProjectsOutputSchema>;

export async function curateProjects(
  input: CurateProjectsInput
): Promise<CurateProjectsOutput> {
  // Check cache first
  const cachedResult = aiCache.get(input);
  if (cachedResult) {
    console.log(`[AI Cache] Hit for query: "${input.searchQuery}"`);
    return cachedResult;
  }

  console.log(`[AI Cache] Miss for query: "${input.searchQuery}"`);

  try {
    const result = await curateProjectsFlow(input);

    // Cache the result
    aiCache.set(input, result);

    return result;
  } catch (error) {
    console.error('[AI Cache] Error during AI call:', error);
    throw error;
  }
}

// Cache management functions
export async function clearAICache(): Promise<void> {
  aiCache.clear();
  console.log('[AI Cache] Cache cleared');
}

export async function getAICacheStats(): Promise<{ size: number; totalHits: number }> {
  return aiCache.getStats();
}

const prompt = ai.definePrompt({
  name: 'curateProjectsPrompt',
  input: { schema: CurateProjectsInputSchema },
  output: { schema: CurateProjectsOutputSchema },
  prompt: `You are an AI assistant that curates project details based on a search query.

  Based on the following search query, provide the most relevant project details:
  Search Query: {{{searchQuery}}}
  `,
});

const curateProjectsFlow = ai.defineFlow(
  {
    name: 'curateProjectsFlow',
    inputSchema: CurateProjectsInputSchema,
    outputSchema: CurateProjectsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
