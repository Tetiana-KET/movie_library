import { Link } from 'react-router-dom';
import { ArrowIcon } from '../ui/ArrowIcon';

export const HomeButton = () => {
  return (
    <div className={`button p-0 bg-gradient hover:bg-gradient-hover transition-colors duration-300 text-dark-100`}>
      <Link to="/" className="inline-flex py-4 px-6 gap-2 text-2xl items-center font-semibold">
        <span>Visit Home Page</span>
        <ArrowIcon />
      </Link>
    </div>
  );
};
