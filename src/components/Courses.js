import classes from "../styles/Courses.module.css"
import Course from "./Course";
import { Link } from 'react-router-dom';

export default function Courses() {
    return (
        <div className={classes.videos}>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>
            <Link to='/Quiz'><Course /></Link>


        </div>
    )
}