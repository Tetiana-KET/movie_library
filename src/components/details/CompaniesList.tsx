import { Companies } from '@/models/MovieDetails';

export const CompaniesList = ({ value }: { value: Companies[] }) => {
  return (
    <ul className="list-disc flex gap-x-6 gap-y-2 flex-wrap overflow-hidden">
      {value.map((c: Companies, i: number) => {
        return (
          <li key={c.id} className={i === 0 ? 'list-none' : ''}>
            {c.name}
          </li>
        );
      })}
    </ul>
  );
};
