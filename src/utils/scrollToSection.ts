export const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
  sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
