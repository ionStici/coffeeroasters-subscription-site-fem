import React from 'react';
import styles from './../styles/Header.module.scss';
import { Link } from 'react-router-dom';

import logo from './../assets/shared/desktop/logo.svg';
import icon_hamburger from './../assets/shared/mobile/icon-hamburger.svg';
import icon_close from './../assets/shared/mobile/icon-close.svg';

const Header = function () {
    const nav = React.useRef(null);

    const toggleNav = ({ target }) => {
        if (target.dataset.nav === 'close') {
            target.dataset.nav = 'open';
            target.querySelector('img').src = icon_close;
            nav.current.classList.add(styles.open);
            return;
        }

        if (target.dataset.nav === 'open') {
            target.dataset.nav = 'close';
            target.querySelector('img').src = icon_hamburger;
            nav.current.classList.remove(styles.open);
            return;
        }
    };

    return (
        <header className={styles.header}>
            <Link className={styles.logo_link} to="/">
                <img
                    className={styles.logo}
                    width="237"
                    height="27"
                    src={logo}
                    alt=""
                />
            </Link>

            <button
                className={styles.nav_btn}
                onClick={toggleNav}
                data-nav="close"
                aria-label="Toggle Navigation Bar"
            >
                <img src={icon_hamburger} alt="" />
            </button>

            <nav className={styles.nav} ref={nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link className={styles.link} to="/home">
                            Home
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.link} to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.link} to="/plan">
                            Create Your Plan
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
