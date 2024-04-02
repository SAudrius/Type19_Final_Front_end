import { useEffect } from 'react';

import { getUsers } from '@/utils/api';

import { cn } from '../../lib/utils';

export const HomePage = () => {
  useEffect(() => {
    // Define an async function inside the effect
    const fetchData = async () => {
      try {
        const users = await getUsers();
        console.log('users ===', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after mount

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
