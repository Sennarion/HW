import classes from './LikeButton.module.css';

function LikeButton() {
    function changeColor(event) {
        if (event.target.style.background === 'red') {
            event.target.style.background = 'rgb(255, 162, 162)';
        } else {
            event.target.style.background = 'red';
        }
    };

    return (
        <button className={classes.LikeButton} onClick={(e) => changeColor(e)}>Like</button>
    );
};

export default LikeButton;