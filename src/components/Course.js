import classes from "../styles/Course.module.css"
import image from "../images/mainPoster.png"
export default function Course() {
    return (
        <a href="quiz.html">
            <div className={classes.video}>
                <img src={image} alt="Course Tittle" />
                <h3># Course SWE223  </h3>
                <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    )
}