import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className='flex flex-col  h-screen'>
      <Navbar />
      <main className='content-start container mx-auto px-3 pb-12 '>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/user' element={<User />} />
          <Route path='/movies/:movieId' element={<MovieDetail />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
