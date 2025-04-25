import { HeroSection } from '@/components/HeroSection';
import { Search } from '@/components/Search';
import { useState } from 'react';

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="wrapper">
      <HeroSection />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};
