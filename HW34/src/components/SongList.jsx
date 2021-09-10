import SongItem from "./SongItem";

function AddNewSong({ songs }) {
    return (
        <div className="songs-wrapper">
            {
                songs.map(song => <SongItem song={song} key={song.id} />)
            }
        </div>
    );
};

export default AddNewSong;