import styles from './../styles/Features.module.scss';
import bean from './../assets/home/desktop/icon-coffee-bean.svg';
import gift from './../assets/home/desktop/icon-gift.svg';
import truck from './../assets/home/desktop/icon-truck.svg';

const Features = function () {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.upper_box}>
                    <h1 className={styles.title}>Why choose us?</h1>
                    <p className={styles.text}>
                        A large part of our role is choosing which particular
                        coffees will be featured in our range. This means
                        working closely with the best coffee growers to give you
                        a more impactful experience on every level.
                    </p>
                </div>

                <div className={styles.lower_box}>
                    <div className={styles.box}>
                        <img className={styles.icon} src={bean} alt="Bean" />
                        <div>
                            <h2>Best quality</h2>
                            <p>
                                Discover an endless variety of the world’s best
                                artisan coffee from each of our roasters.
                            </p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <img className={styles.icon} src={gift} alt="Gift" />
                        <div>
                            <h2>Exclusive benefits</h2>
                            <p>
                                Special offers and swag when you subscribe,
                                including 30% off your first shipment.
                            </p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <img className={styles.icon} src={truck} alt="Truck" />
                        <div>
                            <h2>Free shipping</h2>
                            <p>
                                We cover the cost and coffee is delivered fast.
                                Peak freshness: guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
