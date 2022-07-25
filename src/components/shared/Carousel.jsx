import { memo } from 'react';
import Card from './Card';
import useFetch from '../../Hooks/useFetch';
const posterPath = 'https://image.tmdb.org/t/p/w200';

const Carousel = ({ title, url }) => {
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <div className='mb-8'>
      <h2 className='pl-2 pb-2 text-white text-xl md:text-2xl'>{title}</h2>

      <div className='flex-1 rounded-none  carousel carousel-end rounded-box'>
        {data.map((movie) => (
          <div className='carousel-item'>
            <Card
              key={movie.id}
              id={movie.id}
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
