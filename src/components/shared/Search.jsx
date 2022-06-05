import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import './Search.css';

import SearchDropdown from './SearchDropdown';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const searchInput = useRef(null);

  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?${params}&query=${query}&page=1&include_adult=false`
    );

    let { results } = await response.json();
    results = results.splice(0, 5);
    setMovies(results);
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      searchMovies(query);
    } else {
      setMovies([]);
    }
  }, [query]);

  const focusInput = () => {
    searchInput.current.focus();
  };

  // const handleFocusOut = () => {
  //   setTimeout(() => {
  //     setMovies([]);
  //   }, 100);
  // };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleFocus = () => {
    // searchMovies(query);
  };

  return (
    <div className='flex-col relative w-full mx-10 '>
      <div
        className='flex items-center flex-1 relative search'
        onClick={focusInput}
      >
        <input
          type='text'
          ref={searchInput}
          placeholder='Search movie...'
          className='input w-full pl-12 text-md text-white search__input input'
          onChange={handleChange}
          // onBlur={handleFocusOut}
          onFocus={handleFocus}
        />
        <AiOutlineSearch className='text-2xl focus:white search__icon' />
      </div>
      <SearchDropdown movies={movies} />
    </div>
  );
};

export default Search;
