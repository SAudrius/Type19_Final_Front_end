import { Link } from 'react-router-dom';

import { AccountIcon } from './AccountIcon';
import { CreateIcon } from './CreateIcon';
import { Hamburger } from './Hamburger';

export const Header = () => {
  return (
    <div className='container flex items-center justify-between py-4 md:gap-24 lg:gap-60 xl:gap-80'>
      <p className='text-3xl text-primary'>
        <Link to='/'>
          Ad<span className='text-4xl text-secondary'>4</span>u
        </Link>
      </p>
      <nav className='lg:w-full'>
        <div className='flex items-center gap-6 lg:w-full lg:justify-between'>
          <ul className='items-center hidden gap-6 md:flex'>
            <li className='text-lg'>
              <Link to='towns'>Adds</Link>
            </li>
            <li className='text-lg'>
              <Link to='towns'>Towns</Link>
            </li>
            <li className='text-lg'>
              <Link to='register'>Register</Link>
            </li>
            <li className='text-lg'>
              <Link to='login'>Login</Link>
            </li>
          </ul>
          {/* TODO: if login display User & add trip. If not logged in then display login and register */}
          <ul className='flex items-center gap-3 sm:gap-6'>
            <li className='text-lg'>
              <Link to='user'>
                <AccountIcon />
              </Link>
            </li>
            <li className='text-lg'>
              <Link to='user'>
                <CreateIcon />
              </Link>
            </li>
            <li className='md:hidden'>
              <Hamburger />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
