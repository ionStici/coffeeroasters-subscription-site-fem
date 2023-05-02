import styles from './../styles/CreatePlan.module.scss';
import PropTypes from 'prop-types';

// prettier-ignore
const icon_arrow = (<svg width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero" /></svg>);

const Question = function (props) {
    const data = props.data;

    const toggleDropdown = function ({ target }) {
        const svg = target.querySelector('svg');
        const question = target.closest(`.${styles.question}`);
        const wrapper = question.querySelector(`.${styles.boxes_wrapper}`);

        if (question.dataset.dropdown === 'close') {
            question.dataset.dropdown = 'open';
            svg.classList.add(styles.rotate_arrow);

            wrapper.classList.add(styles.display_block);
            setTimeout(() => {
                wrapper.classList.add(styles.set_height, styles.set_opacity);
            }, 1);

            return;
        }

        if (question.dataset.dropdown === 'open') {
            question.dataset.dropdown = 'close';
            svg.classList.remove(styles.rotate_arrow);
            wrapper.classList.remove(styles.set_height, styles.set_opacity);
            setTimeout(() => {
                wrapper.classList.remove(styles.display_block);
            }, 250);

            return;
        }
    };

    return (
        <div className={styles.question} data-dropdown="close">
            <button className={styles.button} onClick={toggleDropdown}>
                <h2>{data.question}</h2>
                <div>{icon_arrow}</div>
            </button>

            <div className={styles.boxes_wrapper}>
                {data.answers.map((a, i) => {
                    return (
                        <div className={`${styles.box}`} key={i}>
                            <p className={styles.title}>{a.title}</p>
                            <p className={styles.text}>{a.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const CreatePlan = function (props) {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                {props.data.map((q, i) => {
                    return <Question data={q} key={i} />;
                })}
            </div>

            <article className={styles.summary}>summary</article>
        </section>
    );
};

CreatePlan.propTypes = {
    data: PropTypes.array,
};

Question.propTypes = {
    data: PropTypes.object,
};

export default CreatePlan;
