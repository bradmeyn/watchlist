import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, poster }) => {
  return (
    <Link to={`movies/${id}`}>
      <div className='card rounded  w-28 md:w-40 truncate mx-2 '>
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
