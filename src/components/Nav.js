import Account from './Account';
import classes from '../styles/Nav.module.css';
import logo from '../images/logo2.png'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to="/" className={classes.brand}>
                        <img src={logo} alt="QuizPlus Logo" />
                        <h3>QuizPlus</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
} 