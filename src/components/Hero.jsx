import styles from './../styles/Hero.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hero = function (props) {
    return (
        <section className={styles.section}>
            <div
                // prettier-ignore
                className={`${styles.wrapper} ${props.page === 'home' ? styles.home : ''} ${props.page === 'about' ? styles.about : ''} ${props.page === 'plan' ? styles.plan : ''}`}
            >
                <div className={styles.content_wrapper}>
                    <h1 className={styles.title}>{props.title}</h1>
                    <p className={styles.text}>{props.text}</p>

                    {props.button ? (
                        <Link className={styles.link} to="/plan">
                            {props.button}
                        </Link>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;

Hero.propTypes = {
    page: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.any,
};
