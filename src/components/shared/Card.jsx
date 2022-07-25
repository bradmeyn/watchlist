import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBookmarkFill, BsCheckLg } from 'react-icons/bs';

const Card = ({ id, title, poster }) => {
  return (
    <Link to={`movies/${id}`}>
      <div className='card rounded  w-28 md:w-40 truncate mx-2 '>
        <button className='right-0 px-2 text-slate-300 absolute hover:text-cyan-300 text-3xl md:text-4xl'>
          <BsFillBookmarkFill />
        </button>
        <img
          className='object-cover rounded-xl shadow-md shadow-black'
          src={poster}
          alt='Shoes'
        />
      </div>
    </Link>
  );
};

export default Card;
