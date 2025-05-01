export const formatInfoTitle = (title: string) =>
  title ? title.replace(/_/g, ' ').replace(/^./, (c) => c.toUpperCase()) : '';
