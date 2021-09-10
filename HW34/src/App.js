import Counter from "./components/Counter";
// import AddNewSong from "./components/AddNewSong";
import SongList from "./components/SongList";
import songsArr from "./songsArr";
import "./style/App.css";
import { useState } from "react";

function App() {
  const [songs, setSongs] = useState(songsArr);

  function generateNewId() {
    if(!songs.length) {
      return 1;
    }
    return songs[songs.length - 1].id + 1;
  }

  const [song, setSong] = useState({
    id: '1',
    songName: '',
    authorName: '',
    releaseDate: '',
    albumName: ''
  });

  function addNewSong(event) {
    event.preventDefault();
    setSongs([...songs, {
      ...song,
      id: generateNewId()
    }]);
  }

  return (
    <div className="App">
      <form>
        <input type="text" 
               name="name" 
               value={song.songName} 
               placeholder="Name..." 
               onChange={(event) => setSong({...song, songName: event.target.value})} />
        <input type="text" 
               name="singer" 
               value={song.authorName} 
               placeholder="Singer..."
               onChange={(event) => setSong({...song, authorName: event.target.value})} />
        <input type="text" 
               name="release" 
               value={song.releaseDate} 
               placeholder="Release..."
               onChange={(event) => setSong({...song, releaseDate: event.target.value})} />
        <input type="text" 
               name="album" 
               value={song.albumName} 
               placeholder="Album..."
               onChange={(event) => setSong({...song, albumName: event.target.value})} />
        <button type="submit" onClick={addNewSong}>Add new song</button>
      </form>
      <SongList songs={songs} />
      <Counter />
    </div>
  );
};

export default App;
