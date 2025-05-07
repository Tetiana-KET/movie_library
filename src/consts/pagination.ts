export const PAGES_TO_SHOW = 7;
// Should be an odd number (e.g. 5 or 7) to evenly show pages around the current page.
// Set to 7 for responsive pagination support down to 320px screen width.

export const ADJACENT_COUNT = (PAGES_TO_SHOW - 3) / 2;
/**
 * 1 - first page - it is always shown
 * 2 - current page
 * 3 - last page - it is always shown
 */
