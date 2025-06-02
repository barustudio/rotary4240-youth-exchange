import type { Testimonial } from '../types'; // Assuming Testimonial type can be imported

/**
 * Converts a string to kebab-case.
 * Example: "John Doe" -> "john-doe"
 * @param str The string to convert.
 * @returns The kebab-cased string.
 */
function toKebabCase(str: string): string {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.toLowerCase())
    .join('-') || '';
}

interface TestimonialSlugData {
  year: number;
  programCode: string; // Assuming ProgramCode is a string here
  studentName: string;
}

/**
 * Generates a slug for a testimonial.
 * Format: [year]-[programCode]-[studentName]
 * Example: 2023-ngse-john-doe
 * @param testimonial The testimonial data.
 * @returns The generated slug.
 */
export function generateTestimonialSlug(testimonial: TestimonialSlugData): string {
  const year = testimonial.year;
  const programCode = testimonial.programCode.toLowerCase();
  const studentName = toKebabCase(testimonial.studentName);
  return `${year}-${programCode}-${studentName}`;
}
