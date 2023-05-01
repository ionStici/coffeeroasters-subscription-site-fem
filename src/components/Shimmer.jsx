import styles from './../styles/Shimmer.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Shimmer = function (props) {
    const layout = React.useRef(null);
    props.toTop();

    React.useEffect(() => {
        if (props.hideShimmer()) {
            layout.current.classList.add(styles.hide);
            props.toTop();
        }
    }, []);

    return (
        <div className={styles.shimmer} ref={layout}>
            <div className={styles.wrapper}>
                <div className={styles.nav}></div>
                <div className={styles.hero}></div>
                <div className={styles.title}></div>

                <div className={styles.img}></div>
                <div className={styles.name}></div>
                <div className={styles.text}></div>

                <div className={styles.img}></div>
                <div className={styles.name}></div>
                <div className={styles.text}></div>

                <div className={styles.img}></div>
                <div className={styles.name}></div>
                <div className={styles.text}></div>
            </div>
        </div>
    );
};

export default Shimmer;

Shimmer.propTypes = {
    toTop: PropTypes.any,
    hideShimmer: PropTypes.func,
};
