import LikeButton from "./UI/button/LikeButton";
import SongButton from "./UI/button/SongButton";

function SongItem({ song, deleteSong }) {
    return (
        <div>
            <p>ID: {song.id}</p>
            <p>Song Name: {song.songName}</p>
            <p>Author Name: {song.authorName}</p>
            <p>Release Date: {song.releaseDate}</p>
            <p>Album Name: {song.albumName}</p>
            <SongButton onClick={() => deleteSong(song.id)}>Delete</SongButton>
            <LikeButton />
        </div>
    );
};

export default SongItem;