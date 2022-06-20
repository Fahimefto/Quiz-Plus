import Account from './Account';
import classes from '../styles/Nav.module.css';
import logo from '../images/logo2.png'

export default function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
                        <img src={logo} alt="QuizPlus Logo" />
                        <h3>QuizPlus</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
} 