import logo from './logo.svg';
import './App.css';
import Example from './Modal';
import MovieCard from './MovieCard';
import Add from './Addmovie';


function App() {
  return (
    <div className='view'>
      <MovieCard title="aaaaa"  posterURL="https://upload.wikimedia.org/wikipedia/en/a/a3/JohnWickSoundtrackCover.jpg"></MovieCard>
      <MovieCard title="zzzz"  posterURL="https://upload.wikimedia.org/wikipedia/en/a/a3/JohnWickSoundtrackCover.jpg"></MovieCard>
      <MovieCard title="eeee"  posterURL="https://upload.wikimedia.org/wikipedia/en/a/a3/JohnWickSoundtrackCover.jpg"></MovieCard>
    <Add></Add>


    </div>

  )
}

export default App;
