import { useEffect, useRef, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import './Search.css';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../Hooks/useOutsideClick';

const SearchDropdown = ({ movies, query }) => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    setDropDownActive(true);
  }, [movies]);

  useOutsideClick(dropdown, () => {
    setDropDownActive(false);
  });

  const handleClick = (e) => {
    setDropDownActive(false);
  };

  return (
    <ul
      ref={dropdown}
      className={
        dropdownActive
          ? 'search__dropdown search__dropdown--active w-full'
          : 'search__dropdown  w-full'
      }
    >
      {movies.map((movie) => (
        <Link onClick={handleClick} to={`movies/${movie.id}`}>
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
  );
};

export default SearchDropdown;
