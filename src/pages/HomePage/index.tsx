import { cn } from '../../lib/utils';

export const HomePage = () => {
  return (
    <div>
      <h2
        className={cn('text-4xl mt-4 text-bold text-center', {
          'text-blue-900': true,
        })}
      >
        HomePage
      </h2>
    </div>
  );
};
