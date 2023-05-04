import styles from './../styles/CreatePlan.module.scss';
import PropTypes from 'prop-types';

// // // // // // // // // // // // // // // // // // // //

const CreatePlan = function (props) {
    const data = props.data;
    // prettier-ignore
    const iconArrow = (<svg width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg>);

    const handleDropdown = function ({ target }) {
        const block = target.closest(`.${styles.accordion__block}`);
        const arrow = block.querySelector('svg');
        let status = block.dataset.dropdown;
        const boxes = block.querySelector(`.${styles.accordion__boxes}`);

        if (status === 'close') {
            arrow.classList.add(styles.accordion__rotate);
            boxes.classList.add(styles.display);
            setTimeout(() => boxes.classList.add(styles.render), 1);

            block.dataset.dropdown = 'open';
            return;
        }

        if (status === 'open') {
            arrow.classList.remove(styles.accordion__rotate);
            boxes.classList.remove(styles.render);
            setTimeout(() => boxes.classList.remove(styles.display), 250);

            block.dataset.dropdown = 'close';
            return;
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <nav className={styles.nav}></nav>

                {/*  */}
                <div className={styles.accordion}>
                    {data.map((q, i) => {
                        return (
                            <div
                                className={styles.accordion__block}
                                key={i}
                                data-dropdown={'close'}
                            >
                                {/* prettier-ignore */}
                                <button className={`${styles.accordion__btn}`} onClick={handleDropdown}>
                                    <h2>{q.question}</h2>
                                    <span>{iconArrow}</span>
                                </button>

                                <div className={styles.accordion__boxes}>
                                    {q.answers.map((a, i) => {
                                        return (
                                            // prettier-ignore
                                            <div className={`${styles.accordion__box}`} key={i}>
                                                <h3>{a.title}</h3>
                                                <p>{a.text}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/*  */}

                <div className={styles.summary}></div>
            </div>
        </section>
    );
};

// // // // // // // // // // // // // // // // // // // //

CreatePlan.propTypes = {
    data: PropTypes.array,
};

export default CreatePlan;

// // // // // // // // // // // // // // // // // // // //
