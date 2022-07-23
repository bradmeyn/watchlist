import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch, AiFillStar, AiOutlineClose } from 'react-icons/ai';
import './Search.css';
import useOutsideClick from '../../Hooks/useOutsideClick';
import SearchDropdown from './SearchDropdown';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const Search = () => {
  const [active, setActive] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const search = useRef(null);
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
    setQuery('');
    if (query.trim().length > 0) {
      searchMovies(query);
    } else {
      setMovies([]);
    }
  }, [query]);

  useOutsideClick(search, () => {
    if (active) {
      closeSearch();
    }
  });

  const focusInput = () => {
    searchInput.current.focus();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const closeSearch = () => {
    setActive(false);
  };

  const handleFocus = () => {
    searchMovies(query);
  };

  const activateSearch = (e) => {
    e.stopPropagation();
    setActive(true);
  };

  const render = active ? (
    <div className='fixed p-0 top-0 left-0 h-full w-full z-50  backdrop-blur-md  bg-slate-900/30 '>
      <div ref={search} className='m-10 '>
        <div
          className='flex items-center flex-1 relative search '
          onClick={focusInput}
        >
          <input
            autoFocus
            type='search'
            ref={searchInput}
            placeholder='Search movie'
            className='w-full pl-12 py-3 text-md md:text-lg text-white search__input  bg-slate-700'
            onChange={handleChange}
            onFocus={handleFocus}
          />
          <AiOutlineSearch className='text-lg md:text-2xl  search__icon' />
          <AiOutlineClose
            className='text-xl md:text-2xl text-white search__cancel'
            onClick={closeSearch}
          />
        </div>
        <SearchDropdown movies={movies} closeSearch={closeSearch} />
      </div>
    </div>
  ) : (
    <AiOutlineSearch
      className='ml-auto mr-5 text-xl md:text-2xl hover:text-white cursor-pointer focus:white '
      onClick={activateSearch}
    />
  );

  return <> {render}</>;
};

export default Search;
