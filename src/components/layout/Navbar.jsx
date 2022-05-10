import React from 'react';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav class='navbar bg-base-300  '>
      <div className='container mx-auto'>
        <Link
          to='/'
          className='text-2xl text-white align-middle px-2 mx-2 flex items-center'
        >
          <BiCameraMovie className='mr-2 text-3xl text-cyan-400' />
          <div>Watchlist</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
