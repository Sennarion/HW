import Counter from "./components/Counter";
import AddNewSong from "./components/AddNewSong";
import SongList from "./components/SongList";
import initialSongs from "./songs";
import "./style/App.css";
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

  return (
    <div className="App">
      <AddNewSong addSong={addSong} generateNewId={generateNewId}/>
      <SongList songs={songs} />
      <Counter />
    </div>
  );
};

export default App;
