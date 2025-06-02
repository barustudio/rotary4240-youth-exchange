import { defineCollection, z } from 'astro:content';
import { ProgramCode } from '../const'; // Adjusted path assuming config.ts is in src/content/

const testimonialsCollection = defineCollection({
  type: 'content', // 'content' for Markdown, 'data' for JSON/YAML
  schema: ({ image }) => z.object({
    studentName: z.string(),
    homeCountry: z.string(),
    homeClub: z.string().optional(),
    programCode: z.nativeEnum(ProgramCode), // Use z.nativeEnum for TypeScript enums
    country: z.string(),
    city: z.string().optional(),
    club: z.string().optional(),
    year: z.number(),
    month: z.number().min(1).max(12),
    // testimonial: z.string(), // This will be the body of the MDX, so it's not part of frontmatter schema
    quote: z.string(),
    program: z.string().optional(), // Assuming ProgramTitle might sometimes be a custom string
    image: image().optional(), // Using image() helper from schema arg for Astro assets
  }),
});

export const collections = {
  'testimonios': testimonialsCollection,
};
