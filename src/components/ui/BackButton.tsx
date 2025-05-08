import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from './ArrowIcon';

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className={`button p-0 bg-gradient hover:bg-gradient-hover transition-colors duration-300 text-dark-100`}>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="inline-flex py-4 px-4 gap-2 text-2xl items-center font-semibold"
      >
        <span>Go Back</span>
        <ArrowIcon />
      </button>
    </div>
  );
};
