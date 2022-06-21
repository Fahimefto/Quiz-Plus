import classes from "../styles/Miniplayer.module.css"
import image from "../images/poster.png"

export default function MiniPlayer() {
    return (

        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} >

            < span className={`material-icons-outlined ${classes.open}`} > play_circle_filled </span >
            <span className={`material-icons-outlined ${classes.close}`}> close </span>
            <img src={image} alt="" />
            <p>QuizPLus </p>
        </ div >
    );
}