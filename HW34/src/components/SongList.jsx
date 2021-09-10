import SongItem from "./SongItem";
import classes from "./style/SongList.module.css";

function AddNewSong({ songs, deleteSong }) {
    return (
        <div className={classes.SongList}>
            {
                songs.length
                    ? songs.map(song => <SongItem song={song} key={song.id} deleteSong={deleteSong} />)
                    : <h2 style={{ textAlign: 'center' }}>Please add a new song</h2>
            }
        </div>
    );
};

export default AddNewSong;