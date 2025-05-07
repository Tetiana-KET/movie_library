import { getImagePath } from '@/utils/getImagePath';
import React from 'react';

interface HeroSectionProps {
  heroPosterPaths: string[];
}

const HeroSection = ({ heroPosterPaths }: HeroSectionProps) => {
  return (
    <section className="hero">
      <div className="flex justify-center items-center max-w-[512px] h-[200px] xs:h-[300px] mx-auto mb-6 relative">
        {heroPosterPaths.map((path) => (
          <div
            className=" flex-1 max-h-[250px] max-w-[170px]aspect-[2/3] rounded-lg overflow-hidden relative shadow-trending/25 hero_posters-wrap"
            key={path}
          >
            <img
              src={getImagePath(path)}
              alt="Hero Banner"
              width={170}
              height={250}
              loading="eager"
              className="block w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <h1>
        Find <span className="text-gradient">Movies</span> You’ll Love Without the Hassle
      </h1>
    </section>
  );
};

export default React.memo(HeroSection);
