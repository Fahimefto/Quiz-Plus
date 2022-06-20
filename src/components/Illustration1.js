import SigninImg from "../images/Exams-rafiki.svg"
import classes from '../styles/Illustration.module.css'
export default function Illustration() {
    return (

        <div className={classes.illustration}>
            <img src={SigninImg} alt="Signup" />
        </div>
    );
}