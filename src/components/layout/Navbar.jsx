import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import Search from '../shared/Search';

const Navbar = () => {
  return (
    <nav className='navbar bg-base-300 px-3'>
      <div className='flex container w-full  mx-auto justify-between'>
        <Link to='/' className='text-white align-middle flex items-center'>
          <BiCameraMovie className='text-xl md:text-2xl mr-2 text-cyan-500' />
          <div className='text-lg md:text-2xl'>Watchlist</div>
        </Link>
        <Search />
        <div className='flex items-center'>
          <VscAccount className='text-xl md:text-2xl' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
