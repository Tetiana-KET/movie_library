export const formatRuntime = (minutes: number): string | null => {
  if (isNaN(minutes)) return null;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours)}h ${String(mins)}m`;
};
