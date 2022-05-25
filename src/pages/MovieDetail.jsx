import background from '../assets/background.webp';
import useFetch from '../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const url = `https://api.themoviedb.org/3/movie/${movieId}?${params}`;
  console.log(url);
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <div>
      <div
        className=' text-left py-10 px-6 bg-cover bg-no-repeat bg-top mb-10'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
        }}
      >
        <div class='hero-content flex-col lg:flex-row'>
          <img
            src='https://api.lorem.space/image/movie?w=260&h=400'
            class='max-w-sm rounded-lg shadow-2xl'
          />
          <div className=''>
            <h1 className='mb-5 text-7xl font-bold text-white text-left opacity-100'>
              Movie Title
            </h1>
            <p className='text-2xl'>
              Watchlist allows you to keep track of movies your want to watch
              next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
