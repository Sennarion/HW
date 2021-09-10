import LikeButton from "./UI/button/LikeButton";
import SongButton from "./UI/button/SongButton";
import classes from "./style/SongItem.module.css";

function SongItem({ song, deleteSong }) {
    return (
        <div className={classes.SongItem}>
            <p>ID: <span>{song.id}</span></p>
            <p>Song Name: <span>{song.songName}</span></p>
            <p>Author Name: <span>{song.authorName}</span></p>
            <p>Release Date: <span>{song.releaseDate}</span></p>
            <p>Album Name: <span>{song.albumName}</span></p>
            <SongButton onClick={() => deleteSong(song.id)}>Delete</SongButton>
            <LikeButton />
        </div>
    );
};

export default SongItem;