import { useState } from "react";
import SongButton from "./UI/button/SongButton";

function AddNewSong({ addSong, generateNewId }) {
    const [song, setSong] = useState({
        id: '1',
        songName: '',
        authorName: '',
        releaseDate: '',
        albumName: ''
    });

    function addNewSong(event) {
        event.preventDefault();

        const newSong = {
            ...song,
            id: generateNewId()
        };

        addSong(newSong);
    }

    return (
        <form>
            <input type="text"
                name="name"
                value={song.songName}
                placeholder="Name..."
                onChange={(event) => setSong({ ...song, songName: event.target.value })} />
            <input type="text"
                name="singer"
                value={song.authorName}
                placeholder="Singer..."
                onChange={(event) => setSong({ ...song, authorName: event.target.value })} />
            <input type="text"
                name="release"
                value={song.releaseDate}
                placeholder="Release..."
                onChange={(event) => setSong({ ...song, releaseDate: event.target.value })} />
            <input type="text"
                name="album"
                value={song.albumName}
                placeholder="Album..."
                onChange={(event) => setSong({ ...song, albumName: event.target.value })} />
            <SongButton type="submit" onClick={addNewSong}>Add new song</SongButton>
        </form>
    );
};

export default AddNewSong;