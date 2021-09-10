import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

function SongItem({ song }) {
    return (
        <div className="song-item">
            <p className="song-id">{song.id}</p>
            <p>{song.songName}</p>
            <p>{song.authorName}</p>
            <p>{song.releaseDate}</p>
            <p>{song.albumName}</p>
            <DeleteButton />
            <LikeButton />
        </div>
    );
};

export default SongItem;