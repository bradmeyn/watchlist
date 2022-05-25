import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, poster }) => {
  return (
    <Link to={`movies/${id}`}>
      <div className='card rounded  w-40 truncate mx-2 '>
        <img
          className='object-cover rounded-xl shadow-md shadow-black'
          src={poster}
          alt='Shoes'
        />
        <div className='w-full p-2'>
          <span className='whitespace-normal text-white'>{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
