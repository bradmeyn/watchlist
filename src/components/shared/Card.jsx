import React from 'react';

const Card = ({ title, poster }) => {
  return (
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
  );
};

export default Card;