import PropTypes from 'prop-types';
import styles from './../styles/Commitment.module.scss';
import baristaMobile from './../assets/about/mobile/image-commitment.jpg';
import baristaTab from './../assets/about/tablet/image-commitment.jpg';
import baristaDesktop from './../assets/about/desktop/image-commitment.jpg';

const Commitment = function (props) {
    let imagesLoaded = 0;
    const imgs = 1;

    const handleImageLoad = function () {
        imagesLoaded++;
        if (imagesLoaded === imgs) props.checkImagesLoad();
    };

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <picture>
                    <source srcSet={baristaMobile} media="(max-width: 767px)" />
                    <source srcSet={baristaTab} media="(max-width: 1109px)" />
                    <img
                        className={styles.barista}
                        src={baristaDesktop}
                        onLoad={handleImageLoad}
                        alt="Barista brewing coffee"
                    />
                </picture>
                <div className={styles.content_wrapper}>
                    <h1 className={styles.title}>Our commitment</h1>
                    <p className={styles.text}>
                        We’re built on a simple mission and a commitment to
                        doing good along the way. We want to make it easy for
                        you to discover and brew the world’s best coffee at
                        home. It all starts at the source. To locate the
                        specific lots we want to purchase, we travel nearly 60
                        days a year trying to understand the challenges and
                        opportunities in each of these places. We collaborate
                        with exceptional coffee growers and empower a global
                        community of farmers through with well above fair-trade
                        benchmarks. We also offer training, support farm
                        community initiatives, and invest in coffee plant
                        science. Curating only the finest blends, we roast each
                        lot to highlight tasting profiles distinctive to their
                        native growing region.
                    </p>
                </div>
            </div>
        </section>
    );
};

Commitment.propTypes = {
    checkImagesLoad: PropTypes.func,
};

export default Commitment;
