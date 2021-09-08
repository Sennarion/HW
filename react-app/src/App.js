import Counter from "./components/Counter";
import AddNewSong from "./components/AddNewSong";
import SongList from "./components/SongList";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <AddNewSong />
      <SongList />
      <Counter />
    </div>
  );
};

export default App;
