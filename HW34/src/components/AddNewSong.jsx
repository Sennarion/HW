import { useState } from "react";
import songs from "../songs";

function AddNewSong() {
    const [song, setSong] = useState({
        title: '',
        singer: '',
        release: '',
        album: ''
    });

    function addNewSong(event) {
        event.preventDefault();
        setSongs([ ...songs, {
            ...song,
            id: 'asdas'
        }]);
    }

    return (
        <form>
            <h2>Playlist</h2>
            <input className="input-title" 
                value={song.title}
                name="title" 
                type="text" 
                placeholder="Song..." 
                onChange={(event) => setTitle({ ...song, title: event.target.value})}
            />
            <input className="input-singer" 
                value={song.singer}
                name="singer" 
                type="text" 
                placeholder="Singer..." 
                onChange={(event) => setSinger({ ...song, singer: event.target.value})}
            />
            <input className="input-release" 
                value={song.release}
                name="release" 
                type="text" 
                placeholder="Release..." 
                onChange={(event) => setRelease({ ...song, release: event.target.value})}
            />
            <input className="input-album" 
                value={song.album}
                name="album" 
                type="text" 
                placeholder="Album..." 
                onChange={(event) => setAlbum({ ...song, album: event.target.value})}
            />
            <button type="submit" onClick={addNewSong}>Add new song</button>
        </form>
    );
};

export default AddNewSong;