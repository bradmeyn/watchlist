import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';

const User = () => {
  const [movies, setMovies] = useState([
    {
      id: '725201',
      poster_path: '/13r1DFhfL0qufFjXnrvWuh6qKqH.jpg',
      original_title: 'The Gray Man',
      release_date: new Date('2022-07-14'),
      vote_average: 3.4,
    },
    {
      adult: false,
      backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
      belongs_to_collection: {
        id: 131296,
        name: 'Thor Collection',
        poster_path: '/yw7gr7DhHHVTLlO8Se8uH17TDMA.jpg',
        backdrop_path: '/3KL8UNKFWgIKXzLHjwY0uwgjzYl.jpg',
      },
      budget: 250000000,
      genres: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 14, name: 'Fantasy' },
      ],
      homepage: 'https://www.marvel.com/movies/thor-love-and-thunder',
      id: 616037,
      imdb_id: 'tt10648342',
      original_language: 'en',
      original_title: 'Thor: Love and Thunder',
      overview:
        'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
      popularity: 6265.822,
      poster_path: '/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
      production_companies: [
        {
          id: 420,
          logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
          name: 'Marvel Studios',
          origin_country: 'US',
        },
        {
          id: 176762,
          logo_path: null,
          name: 'Kevin Feige Productions',
          origin_country: 'US',
        },
      ],
      production_countries: [
        { iso_3166_1: 'US', name: 'United States of America' },
      ],
      release_date: '2022-07-06',
      revenue: 712000000,
      runtime: 119,
      spoken_languages: [
        { english_name: 'English', iso_639_1: 'en', name: 'English' },
      ],
      status: 'Released',
      tagline: 'The one is not the only.',
      title: 'Thor: Love and Thunder',
      video: false,
      vote_average: 6.7,
      vote_count: 1276,
    },
    {
      adult: false,
      backdrop_path: '/sw7mordbZxgITU877yTpZCud90M.jpg',
      belongs_to_collection: null,
      budget: 25000000,
      genres: [
        { id: 18, name: 'Drama' },
        { id: 80, name: 'Crime' },
      ],
      homepage: 'http://www.warnerbros.com/goodfellas',
      id: 769,
      imdb_id: 'tt0099685',
      original_language: 'en',
      original_title: 'GoodFellas',
      overview:
        'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
      popularity: 41.58,
      poster_path: '/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
      production_companies: [
        {
          id: 8880,
          logo_path: '/fE7LBw7Jz8R29EABFGCvWNriZxN.png',
          name: 'Winkler Films',
          origin_country: 'US',
        },
      ],
      production_countries: [
        { iso_3166_1: 'US', name: 'United States of America' },
      ],
      release_date: '1990-09-12',
      revenue: 46835000,
      runtime: 145,
      spoken_languages: [
        { english_name: 'Italian', iso_639_1: 'it', name: 'Italiano' },
        { english_name: 'English', iso_639_1: 'en', name: 'English' },
      ],
      status: 'Released',
      tagline: 'Three Decades of Life in the Mafia.',
      title: 'GoodFellas',
      video: false,
      vote_average: 8.463,
      vote_count: 10287,
    },
    {
      adult: false,
      backdrop_path: '/pbrkL804c8yAv3zBZR4QPEafpAR.jpg',
      belongs_to_collection: null,
      budget: 165000000,
      genres: [
        { id: 12, name: 'Adventure' },
        { id: 18, name: 'Drama' },
        { id: 878, name: 'Science Fiction' },
      ],
      homepage: 'http://www.interstellarmovie.net/',
      id: 157336,
      imdb_id: 'tt0816692',
      original_language: 'en',
      original_title: 'Interstellar',
      overview:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      popularity: 188.768,
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      production_companies: [
        {
          id: 923,
          logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
          name: 'Legendary Pictures',
          origin_country: 'US',
        },
        {
          id: 9996,
          logo_path: '/3tvBqYsBhxWeHlu62SIJ1el93O7.png',
          name: 'Syncopy',
          origin_country: 'GB',
        },
        {
          id: 13769,
          logo_path: null,
          name: 'Lynda Obst Productions',
          origin_country: '',
        },
      ],
      production_countries: [
        { iso_3166_1: 'GB', name: 'United Kingdom' },
        { iso_3166_1: 'US', name: 'United States of America' },
      ],
      release_date: '2014-11-05',
      revenue: 701729206,
      runtime: 169,
      spoken_languages: [
        { english_name: 'English', iso_639_1: 'en', name: 'English' },
      ],
      status: 'Released',
      tagline: 'Mankind was born on Earth. It was never meant to die here.',
      title: 'Interstellar',
      video: false,
      vote_average: 8.372,
      vote_count: 28912,
    },
    {
      adult: false,
      backdrop_path: '/yVPcPk96E6Qffiyez2oJc7OKD2A.jpg',
      belongs_to_collection: null,
      budget: 70000000,
      genres: [
        { id: 18, name: 'Drama' },
        { id: 28, name: 'Action' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
      ],
      homepage: '',
      id: 16869,
      imdb_id: 'tt0361748',
      original_language: 'en',
      original_title: 'Inglourious Basterds',
      overview:
        'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
      popularity: 81.342,
      poster_path: '/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg',
      production_companies: [
        {
          id: 33,
          logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
          name: 'Universal Pictures',
          origin_country: 'US',
        },
        {
          id: 59,
          logo_path: '/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png',
          name: 'A Band Apart',
          origin_country: 'US',
        },
        {
          id: 308,
          logo_path: '/e8F3mQM7DkJ5SfYYDp8FYzPBOGX.png',
          name: 'The Weinstein Company',
          origin_country: 'US',
        },
        {
          id: 6817,
          logo_path: null,
          name: 'Zehnte Babelsberg Film',
          origin_country: 'DE',
        },
        {
          id: 6818,
          logo_path: null,
          name: 'Visiona Romantica',
          origin_country: 'US',
        },
      ],
      production_countries: [
        { iso_3166_1: 'DE', name: 'Germany' },
        { iso_3166_1: 'US', name: 'United States of America' },
      ],
      release_date: '2009-08-19',
      revenue: 321457747,
      runtime: 153,
      spoken_languages: [
        { english_name: 'German', iso_639_1: 'de', name: 'Deutsch' },
        { english_name: 'English', iso_639_1: 'en', name: 'English' },
        { english_name: 'French', iso_639_1: 'fr', name: 'Français' },
        { english_name: 'Italian', iso_639_1: 'it', name: 'Italiano' },
      ],
      status: 'Released',
      tagline: 'Once upon a time in Nazi occupied France...',
      title: 'Inglourious Basterds',
      video: false,
      vote_average: 8.21,
      vote_count: 18942,
    },
  ]);
  return (
    <div className='py-8 md:py-20 px-6'>
      {/* <div>List/Reviews/Seen</div> */}
      <h1 className='text-3xl md:text-5xl mb-6 font-extrabold text-white'>
        Your List
      </h1>
      <ul>
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <li className='relative flex items-center bg-slate-700 hover:bg-slate-600 border-t-2 border-slate-600'>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt='Movie Poster'
                className='w-20 md:w-24 p-1 rounded-xl'
              />
              <div className='p-4 '>
                <h4 className='text-white text-lg md:text-xl pb-1'>
                  {movie.original_title}
                </h4>
                <div className='text-sm md:text-md pb-2'>
                  {new Date(movie.release_date).getFullYear()}
                </div>
                <span className='flex items-center'>
                  <AiFillStar className='mr-2 text-yellow-400 text-xl' />
                  <span>{movie.vote_average}</span>
                </span>
              </div>
              <button className='text-2xl ml-auto p-5 hover:text-white'>
                <BiTrash />
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default User;
