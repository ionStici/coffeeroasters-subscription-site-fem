import styles from './../styles/Header.module.scss';
import bean from './../assets/shared/desktop/logo.svg';

const Header = function () {
    return (
        <header>
            <img
                className={styles.logo}
                width="237"
                height="27"
                src={bean}
                alt=""
            />

            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
