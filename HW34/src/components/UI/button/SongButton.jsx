import classes from './SongButton.module.css';

function SongButton({ children, ...props }) {
    return (
        <button {...props} className={classes.SongButton}>{children}</button>
    );
}

export default SongButton;