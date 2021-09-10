import Counter from "./components/Counter";
import AddNewSong from "./components/AddNewSong";
import SongList from "./components/SongList";
import initialSongs from "./songs";
import { useState } from "react";

function App() {
  const [songs, setSongs] = useState(initialSongs);

  function generateNewId() {
    if(!songs.length) {
      return 1;
    }
    return songs[songs.length - 1].id + 1;
  }

  function addSong(song) {
    setSongs([...songs, song]);
  }

  function deleteSong(id) {
    setSongs(songs.filter(song => song.id !== id));
  }

  return (
    <div className="App">
      <AddNewSong addSong={addSong} generateNewId={generateNewId}/>
      <SongList songs={songs} deleteSong={deleteSong} />
      <Counter />
    </div>
  );
};

export default App;
