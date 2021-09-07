import SongItem from "./SongItem";
import songs from "../songs";

function AddNewSong() {
    return (
        <div className="songs-wrapper">
            {
                songs.map(song => <SongItem song={song} key={song.id} />)
            }
        </div>
    );
};

export default AddNewSong;