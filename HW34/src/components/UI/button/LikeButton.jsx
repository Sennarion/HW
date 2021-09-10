import classes from './LikeButton.module.css';

function LikeButton() {
    function changeColor(event) {
        if (event.target.style.background === 'red') {
            event.target.style.background = 'rgb(255, 162, 162)';
            event.target.innerHTML = 'Like';
        } else {
            event.target.style.background = 'red';
            event.target.innerHTML = 'Dislike';
        }
    };

    return (
        <button className={classes.LikeButton} onClick={(e) => changeColor(e)}>Like</button>
    );
};

export default LikeButton;