import SongItem from "./SongItem";

function AddNewSong({ songs, deleteSong }) {
    return (
        <div>
            {
                songs.length
                    ? songs.map(song => <SongItem song={song} key={song.id} deleteSong={deleteSong} />)
                    : <h2 style={{ textAlign: 'center' }}>Please add a new song</h2>
            }
        </div>
    );
};

export default AddNewSong;