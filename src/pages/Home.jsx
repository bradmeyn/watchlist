import React, { useEffect } from 'react';
import { useState } from 'react';
import Carousel from '../components/shared/Carousel';
import background from '../assets/background.webp';
import useFetch from '../Hooks/useFetch';

const API_KEY = process.env.REACT_APP_API_KEY;

const params = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-AU',
});

const Home = () => {
  const collections = [
    {
      title: 'Popular Now',
      url: `https://api.themoviedb.org/3/trending/movie/week?${params}`,
    },
    {
      title: 'Top Rated',
      url: `https://api.themoviedb.org/3/movie/top_rated?${params}`,
    },
    {
      title: 'Popular Movies',
      url: `https://api.themoviedb.org/3/discover/movie?${params}&primary_release_year=2018&sort_by=top_rated`,
    },
  ];

  return (
    <>
      <div
        className=' text-left py-20 px-6 bg-cover bg-no-repeat bg-top mb-10'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
        }}
      >
        <h1 className='mb-5 text-7xl font-bold text-white text-left opacity-100'>
          <div className='pb-4'>Stop browsing,</div>
          <div className=''>start watching.</div>
        </h1>
        <p className='text-2xl'>
          Watchlist allows you to keep track of movies your want to watch next.
        </p>
      </div>

      {collections.map((collection) => (
        <Carousel title={collection.title} url={`${collection.url}`} />
      ))}
    </>
  );
};

export default Home;
