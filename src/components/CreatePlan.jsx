import styles from './../styles/CreatePlan.module.scss';
import PropTypes from 'prop-types';

// // // // // // // // // // // // // // // // // // // //

const CreatePlan = function (props) {
    const data = props.data;

    const handleDropdown = function ({ target }) {
        const block = target.closest(`.${styles.accordion__block}`);
        const boxes = block.querySelector(`.${styles.accordion__boxes}`);
        const arrow = block.querySelector('svg');

        if (block.dataset.dropdown === 'close') {
            arrow.classList.add(styles.accordion__rotate);
            boxes.classList.add(styles.display_boxes);
            setTimeout(() => boxes.classList.add(styles.render_boxes), 1);

            block.dataset.dropdown = 'open';
            return;
        }

        if (block.dataset.dropdown === 'open') {
            arrow.classList.remove(styles.accordion__rotate);
            boxes.classList.remove(styles.render_boxes);
            setTimeout(() => boxes.classList.remove(styles.display_boxes), 250);

            block.dataset.dropdown = 'close';
            return;
        }
    };

    const setBoxActive = function ({ target }) {
        const wrapper = target.closest(`.${styles.wrapper}`);
        const nav = wrapper.querySelector(`.${styles.nav}`);
        const acc = wrapper.querySelector(`.${styles.accordion}`);
        const btns = [...nav.querySelectorAll('button')];
        const blocks = [...acc.querySelectorAll(`.${styles.accordion__block}`)];
        const block = target.closest(`.${styles.accordion__block}`);

        if (target.classList.contains(styles.accordion__box__active)) {
            target.classList.remove(styles.accordion__box__active);
            block.dataset.complete = 'false';

            btns.forEach((btn, i) => {
                if (blocks[i] === block) {
                    btn.classList.remove(styles.nav__active);
                }
            });

            return;
        }

        const boxes = [
            ...target
                .closest(`.${styles.accordion__boxes}`)
                .querySelectorAll(`.${styles.accordion__box}`),
        ];

        boxes.forEach(box => {
            box.classList.remove(styles.accordion__box__active);
        });

        target.classList.add(styles.accordion__box__active);
        block.dataset.complete = 'true';

        btns.forEach((btn, i) => {
            if (blocks[i].dataset.complete === 'true') {
                btn.classList.add(styles.nav__active);
            }
        });
    };

    const handleSidebarClick = function ({ target }) {
        const wrapper = target.closest(`.${styles.wrapper}`);
        const nav = wrapper.querySelector(`.${styles.nav}`);
        const acc = wrapper.querySelector(`.${styles.accordion}`);

        const btns = [...nav.querySelectorAll('button')];
        const blocks = [...acc.querySelectorAll(`.${styles.accordion__block}`)];

        // add color indicator

        btns.forEach((btn, i) => {
            if (btn === target && blocks[i].dataset.complete === 'false') {
                blocks[i].scrollIntoView({ behavior: 'smooth' });

                blocks[i].classList.add(styles.accordion__block__pulse);
                setTimeout(() => {
                    blocks[i].classList.remove(styles.accordion__block__pulse);
                }, 750);
            }
        });
    };

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            {/* prettier-ignore */}
                            <button onClick={handleSidebarClick}>
                                <span>01</span>
                                <span>Preferences</span>
                            </button>
                        </li>

                        <li>
                            <button onClick={handleSidebarClick}>
                                <span>02</span>
                                <span>Bean Type</span>
                            </button>
                        </li>

                        <li>
                            <button onClick={handleSidebarClick}>
                                <span>03</span>
                                <span>Quantity</span>
                            </button>
                        </li>

                        <li>
                            <button onClick={handleSidebarClick}>
                                <span>04</span>
                                <span>Grind Option</span>
                            </button>
                        </li>

                        <li>
                            <button onClick={handleSidebarClick}>
                                <span>05</span>
                                <span>Deliveries</span>
                            </button>
                        </li>
                    </ul>
                </nav>

                {/*  */}
                <div className={styles.accordion}>
                    {data.map((q, i) => {
                        return (
                            // prettier-ignore
                            <div className={`${styles.accordion__block}`} key={i} data-dropdown={q.id === 1 ? 'open' : 'close'} data-complete={false}>
                                {/* prettier-ignore */}
                                <button className={`${styles.accordion__btn}`} onClick={handleDropdown}>
                                    <h2>{q.question}</h2>
                                    {/* prettier-ignore */}
                                    <span>{<svg className={q.id === 1 ? styles.accordion__rotate : ''} width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg>}</span>
                                </button>
                                {/* prettier-ignore */}
                                <div className={`${styles.accordion__boxes} ${q.id === 1 ? styles.display_boxes : ''} ${q.id === 1 ? styles.render_boxes : ''}`}>
                                    {q.answers.map((a, i) => {
                                        return (
                                            // prettier-ignore
                                            <div className={`${styles.accordion__box}`} key={i} onClick={setBoxActive}>
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

                <div className={styles.summary}>
                    <p className={styles.summary__title}></p>
                    <p className={styles.summary__text}></p>
                </div>
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
