import { Language } from '@/models/MovieDetails';

export const LanguageList = ({ value }: { value: Language[] }) => {
  return (
    <ul className="list-disc flex gap-6 flex-wrap overflow-hidden">
      {value.map((l: Language, i: number) => {
        return (
          <li key={l.iso_639_1} className={i === 0 ? 'list-none' : ''}>
            {l.english_name}
          </li>
        );
      })}
    </ul>
  );
};
