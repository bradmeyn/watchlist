import React from 'react';
import Card from './Card';

const posterPath = 'https://image.tmdb.org/t/p/w200';
const Carousel = ({ movies, title }) => {
  return (
    <div className='mb-8'>
      {' '}
      <h2 className='pl-2 pb-4 text-white text-3xl'>{title}</h2>
      <div className='flex-1 carousel carousel-end rounded-box'>
        {movies.map((movie) => (
          <div className='carousel-item'>
            <Card
              key={movie.id}
              title={movie.title}
              poster={`${posterPath}${movie.poster_path}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
