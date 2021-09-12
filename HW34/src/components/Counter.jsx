import classes from "./style/Counter.module.css";

function Counter({ songs }) {
    return (
        <div className={classes.Counter}>
            <p>Count of songs: <span>{songs.length}</span></p>
        </div>
    );
};

export default Counter;