import { ArrowIcon } from './ArrowIcon';

interface ButtonWithArrowProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const ButtonWithArrow = ({ onClick, disabled = false, className }: ButtonWithArrowProps) => {
  return (
    <button className={className} type="button" onClick={onClick} disabled={disabled}>
      <ArrowIcon />
    </button>
  );
};
