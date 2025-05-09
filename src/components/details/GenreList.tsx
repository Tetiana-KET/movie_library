import { Genre } from '@/models/MovieDetails';

export const GenreList = ({ value }: { value: Genre[] }) => {
  return (
    <ul className="flex flex-wrap gap-3 font-semibold text-white">
      {value.map((g: Genre) => {
        return (
          <li key={g.id} className="button py-2 px-5">
            {g.name}
          </li>
        );
      })}
    </ul>
  );
};
