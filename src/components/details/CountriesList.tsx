import { Countries } from '@/models/MovieDetails';

export const CountriesList = ({ value }: { value: Countries[] }) => {
  return (
    <ul className="list-disc flex gap-6 flex-wrap overflow-hidden">
      {value.map((c: Countries, i: number) => {
        return (
          <li key={c.iso_3166_1} className={i === 0 ? 'list-none' : ''}>
            {c.name}
          </li>
        );
      })}
    </ul>
  );
};
