import styles from './../styles/Collection.module.scss';
import danche from './../assets/home/desktop/image-danche.png';
import piccollo from './../assets/home/desktop/image-piccollo.png';
import planalto from './../assets/home/desktop/image-planalto.png';
import gran from './../assets/home/desktop/image-gran-espresso.png';

const Collection = function () {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2 className={styles.h2}>our collection</h2>
                </div>

                <div className={styles.card}>
                    <img
                        className={styles.img}
                        src={gran}
                        alt="Gran Espresso"
                    />
                    <div className={styles.box}>
                        <h3 className={styles.h3}>Gran Espresso</h3>
                        <p className={styles.text}>
                            Light and flavorful blend with cocoa and black
                            pepper for an intense experience
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img className={styles.img} src={planalto} alt="Planalto" />
                    <div className={styles.box}>
                        <h3 className={styles.h3}>Planalto</h3>
                        <p className={styles.text}>
                            Brazilian dark roast with rich and velvety body, and
                            hints of fruits and nuts
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img className={styles.img} src={piccollo} alt="Piccollo" />
                    <div className={styles.box}>
                        <h3 className={styles.h3}>Piccollo</h3>
                        <p className={styles.text}>
                            Mild and smooth blend featuring notes of toasted
                            almond and dried cherry
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img className={styles.img} src={danche} alt="Danche" />
                    <div className={styles.box}>
                        <h3 className={styles.h3}>Danche</h3>
                        <p className={styles.text}>
                            Ethiopian hand-harvested blend densely packed with
                            vibrant fruit notes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
