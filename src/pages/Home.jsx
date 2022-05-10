import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/shared/Card';

const API_KEY = process.env.REACT_APP_API_KEY;
const posterPath = 'https://image.tmdb.org/t/p/w200';

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

    const movieUrl = `https://api.themoviedb.org/3/movie/popular?${params}`;

    const response = await fetch(movieUrl);

    const { results } = await response.json();
    console.log(results);
    setMovies(results);
  };

  return (
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
  );
};

export default Home;
