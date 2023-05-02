import styles from './../styles/Shimmer.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Shimmer = function (props) {
    const layout = React.useRef(null);
    props.toTop();

    React.useEffect(() => {
        if (props.removeShimmer) {
            layout.current.classList.add(styles.hide);
            props.toTop();
        }
    }, [props.removeShimmer]);

    return (
        <div className={styles.shimmer} ref={layout}>
            <div className={styles.wrapper}>
                <div className={styles.nav}></div>
                {/* prettier-ignore */}
                <div className={styles.hero} style={{ height: `${props.height}px` }}></div>
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
    toTop: PropTypes.func,
    removeShimmer: PropTypes.bool,
    height: PropTypes.number,
};
