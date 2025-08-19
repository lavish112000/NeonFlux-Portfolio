'use server';

/**
 * @fileOverview A project curation AI agent.
 *
 * - curateProjects - A function that handles the project curation process.
 * - CurateProjectsInput - The input type for the curateProjects function.
 * - CurateProjectsOutput - The return type for the curateProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurateProjectsInputSchema = z.object({
  searchQuery: z.string().describe('The search query to use for curating projects.'),
});
export type CurateProjectsInput = z.infer<typeof CurateProjectsInputSchema>;

const CurateProjectsOutputSchema = z.object({
  projectDetails: z.string().describe('The curated project details based on the search query.'),
});
export type CurateProjectsOutput = z.infer<typeof CurateProjectsOutputSchema>;

export async function curateProjects(input: CurateProjectsInput): Promise<CurateProjectsOutput> {
  return curateProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'curateProjectsPrompt',
  input: {schema: CurateProjectsInputSchema},
  output: {schema: CurateProjectsOutputSchema},
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
    const {output} = await prompt(input);
    return output!;
  }
);
