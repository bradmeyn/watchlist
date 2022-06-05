import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

import { VscAccount } from 'react-icons/vsc';
import Search from '../shared/Search';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-300  '>
      <div className='container mx-auto justify-between'>
        <Link
          to='/'
          className='text-2xl text-white align-middle flex items-center'
        >
          <BiCameraMovie className='mr-2 text-3xl text-cyan-500' />
          <div>Watchlist</div>
        </Link>
        <Search />
        <div className='flex items-center'>
          <VscAccount className='text-3xl' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
