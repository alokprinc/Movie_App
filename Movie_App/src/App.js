import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favorite from './components/Favorite';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Movies/>
      <Favorite/>
    </>
  );
}

export default App;
