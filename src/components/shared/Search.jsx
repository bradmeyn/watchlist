import { useRef, useState } from 'react';
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import './Search.css';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const Search = () => {
  const [movies, setMovies] = useState([]);
  const searchInput = useRef(null);

  const handleFocus = () => {
    searchInput.current.focus();
  };

  const handleFocusOut = () => {
    setMovies([]);
  };

  const searchMovies = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}&query=${query}&page=1&include_adult=false`
    );

    let { results } = await response.json();
    results = results.splice(0, 5);
    setMovies(results);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    if (value.trim().length === 0) {
      setMovies([]);
    } else {
      searchMovies(value);
    }
  };

  return (
    <div className='flex-col relative w-full mx-10 '>
      <div
        className='flex items-center flex-1 relative search'
        onClick={handleFocus}
      >
        <input
          type='text'
          ref={searchInput}
          placeholder='Search movie...'
          className='input w-full pl-12 text-md text-white search__input input'
          onInput={handleInput}
          onBlur={handleFocusOut}
        />
        <AiOutlineSearch className='text-2xl focus:white search__icon' />
      </div>

      <ul className='search__dropdown active w-full'>
        {movies.map((movie) => (
          <Link to={`movies/${movie.id}`}>
            <li className='movie'>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt=''
                class='movie__img'
              />
              <div className='movie__text'>
                <span className='movie__title'>{movie.original_title}</span>
                <span className='movie__year'>
                  {new Date(movie.release_date).getFullYear()}
                </span>
                <span className='flex items-center'>
                  <AiFillStar className='mr-2 text-yellow-400' />
                  <span>{movie.vote_average}</span>
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Search;
