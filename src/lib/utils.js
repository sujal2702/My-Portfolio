/**
 * Utility function to merge Tailwind CSS class names
 * Combines multiple class names and handles conditional classes
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
