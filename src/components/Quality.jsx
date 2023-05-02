import styles from './../styles/Quality.module.scss';
import imgMobile from './../assets/about/mobile/image-quality.jpg';
import imgTablet from './../assets/about/tablet/image-quality.jpg';
import imgDesktop from './../assets/about/desktop/image-quality.jpg';

const Quality = function () {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <picture className={styles.picture}>
                    <source srcSet={imgMobile} media="(max-width: 767px)" />
                    <source srcSet={imgTablet} media="(max-width: 1109px)" />
                    <img
                        className={styles.img}
                        src={imgDesktop}
                        alt="Cappuccino"
                    />
                </picture>

                <div className={styles.content_wrapper}>
                    <h1 className={styles.title}>Uncompromising quality</h1>
                    <p className={styles.text}>
                        Although we work with growers who pay close attention to
                        all stages of harvest and processing, we employ, on our
                        end, a rigorous quality control program to avoid
                        over-roasting or baking the coffee dry. Every bag of
                        coffee is tagged with a roast date and batch number. Our
                        goal is to roast consistent, user-friendly coffee, so
                        that brewing is easy and enjoyable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Quality;
