import CustomInput from "./components/CustomInput";
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
    <div>
      <CustomInput addSong={addSong} generateNewId={generateNewId} songs={songs} />
      <SongList songs={songs} deleteSong={deleteSong} />
    </div>
  );
};

export default App;
