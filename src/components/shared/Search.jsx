import { useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Search.css';
const Search = () => {
  const searchInput = useRef(null);

  const handleFocus = () => {
    searchInput.current.focus();
  };

  const handleSubmit = (e) => {
    e.target.preventDefault();
  };

  const movies = ['avengers', 'spiderman', 'the departed', 'bad bodys'];

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
        />
        <AiOutlineSearch className='text-2xl focus:white search__icon' />
      </div>
      <ul className='search__dropdown active w-full'>
        <li className='movie'>
          <img
            src='https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg'
            alt=''
            class='movie__img'
          />
          <div className='movie__text'>
            <span className='movie__title'>movie title</span>
            <span className='movie__year'>year</span>
            <span className='movie__rating'>rating</span>
          </div>
        </li>
        <li className='movie'>
          <img
            src='https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg'
            alt=''
            class='movie__img'
          />
          <div className='movie__text'>
            <span className='movie__title'>movie title</span>
            <span className='movie__year'>year</span>
            <span className='movie__rating'>rating</span>
          </div>
        </li>
        <li className='movie'>
          <img
            src='https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg'
            alt=''
            class='movie__img'
          />
          <div className='movie__text'>
            <span className='movie__title'>movie title</span>
            <span className='movie__year'>year</span>
            <span className='movie__rating'>rating</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Search;
