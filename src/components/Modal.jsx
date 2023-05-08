import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './../styles/Modal.module.scss';
import buttonStyles from './../styles/Hero.module.scss';
import React from 'react';

const Modal = function (props) {
    const mediaMatch = window.matchMedia('(min-width: 768px)');
    const [match, setMatch] = React.useState(mediaMatch.matches);

    React.useEffect(() => {
        const handler = e => setMatch(e.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
    });

    if (!props.text) return '';

    const closeModal = function () {};

    return (
        <>
            <div className={styles.bg_layout} onClick={closeModal}></div>
            <section className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.top}>
                        <h2 className={styles.title}>Order Summary</h2>
                    </div>

                    <div className={styles.order_wrapper}>{props.text}</div>

                    <p className={styles.text}>
                        Is this correct? You can proceed to checkout or go back
                        to plan selection if something is off. Subscription
                        discount codes can also be redeemed at the checkout.{' '}
                    </p>

                    {!match ? (
                        <Link className={`${buttonStyles.link}`} to="/plan">
                            Checkout - $14.00 / mo
                        </Link>
                    ) : (
                        ''
                    )}
                    {match ? (
                        <div className={styles.btn_wrapper}>
                            <p>$14.00 / mo</p>
                            <Link className={`${buttonStyles.link}`} to="/plan">
                                Checkout
                            </Link>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </section>
        </>
    );
};

Modal.propTypes = {
    text: PropTypes.any,
};

export default Modal;
