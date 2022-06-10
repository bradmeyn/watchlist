import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?${params}&append_to_response=credits`;

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setMovie(json);
      } catch (error) {}
    };
    fetchData();
  }, [movieId]);

  return (
    movie && (
      <div>
        <div
          className='text-left py-10 md:py-20 px-6 bg-cover bg-no-repeat bg-top mb-10'
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
          }}
        >
          <div className='hero-content justify-start flex-col lg:flex-row '>
            <img
              className='rounded-lg shadow-2xl md:mr-4 w-40 md:w-60 lg:w-80 mb-2 '
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt='movie poster'
            />
            <div className='justify-self-start content-start'>
              <h1 className='mb-2 text-3xl md:text-5xl font-bold text-white text-left opacity-100'>
                {movie.original_title}
              </h1>
              <p className='text-lg mb-4'>
                <span>
                  {new Date(movie.release_date).getFullYear()} &#183;{' '}
                  {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m &#183;{' '}
                </span>
                {movie.genres.map((genre) => genre.name).join(', ')}
              </p>

              <p className='text-2xl mb-4 italic'>{movie.tagline}</p>
              <div className='mb-4'>
                <h2 className='text-white text-md'>Overview</h2>
                <p className='text-md '>{movie.overview}</p>
              </div>
              <div className='flex mb-6'>
                <div className='mr-20'>
                  <h2 className='text-white text-md'>Director</h2>
                  <p className='text-md'>
                    {movie.credits.crew
                      .filter((crew) => crew.job === 'Director')
                      .map((director) => director.name)
                      .join(', ')}
                  </p>
                </div>
                <div>
                  <h2 className='text-white text-md'>Cast</h2>
                  <p className='text-md'>
                    {movie.credits.cast
                      .splice(0, 4)
                      .map((cast) => cast.name)
                      .join(', ')}
                  </p>
                </div>
              </div>
              <p className='flex items-center text-4xl'>
                <AiFillStar className='mr-2 text-yellow-400' />
                <span className='text-white'>{movie.vote_average}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieDetail;
