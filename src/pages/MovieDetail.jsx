import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${movieId}?${params}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setMovie(json);
      } catch (error) {}
    };
    fetchData();
  });
  const poster = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <div>
      <div
        className=' text-left py-20 px-6 bg-cover bg-no-repeat bg-top mb-10'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      >
        <div className='hero-content justify-start flex-col md:flex-row border-solid border-2 border-sky-500'>
          <img
            className=' rounded-lg shadow-2xl'
            src={poster}
            alt='movie poster'
          />
          <div className='justify-self-start content-start border-solid border-2 border-sky-500'>
            <h1 className='mb-2 text-5xl font-bold text-white text-left opacity-100'>
              {movie.original_title}
            </h1>
            <p className='text-lg mb-2'>
              <span>
                {new Date(movie.release_date).getFullYear()} &#183;{' '}
                {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m &#183;{' '}
              </span>
              {movie.genres.map((genre, i, arr) =>
                i !== arr.length - 1 ? (
                  <span>
                    {genre.name}
                    {', '}
                  </span>
                ) : (
                  <span>{genre.name}</span>
                )
              )}
            </p>

            <p className='text-2xl mb-2'>{movie.tagline}</p>
            <div>
              <h2 className='text-white mb-1 text-xl'>Overview</h2>
              <p className='text-md'>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
