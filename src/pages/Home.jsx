import React, { useEffect } from 'react';
import { useState } from 'react';
import Carousel from '../components/shared/Carousel';
import background from '../assets/background.webp';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const params = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-AU',
    });

    const movieUrl = `https://api.themoviedb.org/3/movie/top_rated?${params}`;

    const response = await fetch(movieUrl);

    const { results } = await response.json();
    console.log(results);
    setMovies(results);
  };

  return (
    <>
      <div
        className=' text-left py-20 px-6 bg-cover bg-no-repeat bg-top mb-10'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
        }}
      >
        <h1 className='mb-5 text-7xl font-bold text-white text-left opacity-100'>
          <div className='pb-4'>Stop browsing,</div>
          <div className=''>start watching.</div>
        </h1>
        <p className='text-2xl'>
          Watchlist allows you to keep track of movies your want to watch next.
        </p>
      </div>
      <Carousel title={'Popular Movies'} movies={movies} />
      <Carousel title={'Popular Movies'} movies={movies} />
      <Carousel title={'Popular Movies'} movies={movies} />
    </>
  );
};

export default Home;
