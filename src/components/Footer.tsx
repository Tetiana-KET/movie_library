import { GitHubIcon } from './ui/GitHubIcon';
import { LinkedinIcon } from './ui/LinkedinIcon';

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <ul className="flex justify-between">
          <li className="flex gap-3 items-center">
            <a href="https://github.com/Tetiana-KET" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <span className="hidden sm:inline hover:text-accent duration-500">
              <a href="https://github.com/Tetiana-KET" target="_blank" rel="noreferrer">
                Tetiana Bezkorovaina
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tatiana-ket" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
