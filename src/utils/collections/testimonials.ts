import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

import type { ProgramCode } from '../../const';

export async function getLatestTestimonials({
  where,
  limit = 2,
  sortOrder = 'desc'
}: {
  where?: Partial<CollectionEntry<'testimonials'>['data']>;
  limit?: number;
  sortOrder?: 'asc' | 'desc';
}) {
  console.log('where', where);

  const testimonials = await getCollection('testimonials', ({ data }) => {
    if (!where) {
      return true;
    }

    return Object.entries(where).every(([key, value]) =>
      data[key as keyof typeof data] === value
    );
  });

  return testimonials
    .sort((a, b) => {
      const yearComparison = a.data.year - b.data.year;

      // If the year is different, sort by year
      if (yearComparison !== 0) {
        return sortOrder === 'desc' ? -yearComparison : yearComparison;
      }

      // If the year is the same, sort by month
      const monthComparison = a.data.month - b.data.month;
      return sortOrder === 'desc' ? -monthComparison : monthComparison;
    })
    .slice(0, limit);
}

export async function getLatestTestimonialsForProgram(
  programCode: ProgramCode,
  options?: {
    limit?: number;
    sortOrder?: 'asc' | 'desc';
  }
) {
  const { limit = 2, sortOrder = 'desc' } = options || {};

  return getLatestTestimonials({
    where: {
      programCode
    },
    limit,
    sortOrder
  });
}
