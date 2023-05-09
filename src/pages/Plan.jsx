import React from 'react';
import Header from './../components/Header';
import Hero from './../components/Hero';
import How from '../components/How';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';
import CreatePlan from '../components/CreatePlan';
import Modal from '../components/Modal';

const Plan = function () {
    const [removeShimmer, setRemoveShimmer] = React.useState(false);
    const toTop = () => window.scroll(0, 0);

    const componentsWithImages = 1;
    let loadedComponents = 0;

    const checkImagesLoad = function () {
        loadedComponents++;
        if (componentsWithImages === loadedComponents) setRemoveShimmer(true);
    };

    const [modal, setModal] = React.useState(false);
    const renderModal = text => setModal(text);
    const closeModal = () => setModal(false);

    return (
        <>
            <Modal text={modal} closeModal={closeModal} />
            <Shimmer toTop={toTop} removeShimmer={removeShimmer} height={400} />

            <Header />
            <main>
                <Hero
                    page="plan"
                    title="Create plan"
                    text="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
                    button={false}
                    checkImagesLoad={checkImagesLoad}
                />
                <How btn={false} />
                <CreatePlan
                    renderModal={renderModal}
                    closeModal={closeModal}
                    data={[
                        {
                            id: 1,
                            question: 'How do you drink your coffee?',
                            answers: [
                                {
                                    title: 'Capsule',
                                    text: 'Compatible with Nespresso systems and similar brewers',
                                },
                                {
                                    title: 'Filter',
                                    text: 'For pour over or drip methods like Aeropress, Chemex, and V60',
                                },
                                {
                                    title: 'Espresso',
                                    text: 'Dense and finely ground beans for an intense, flavorful experience',
                                },
                            ],
                        },

                        {
                            id: 2,
                            question: 'What type of coffee?',
                            answers: [
                                {
                                    title: 'Single Origin',
                                    text: 'Distinct, high quality coffee from a specific family-owned farm',
                                },
                                {
                                    title: 'Decaf',
                                    text: 'Just like regular coffee, except the caffeine has been removed',
                                },
                                {
                                    title: 'Blended',
                                    text: 'Combination of two or three dark roasted beans of organic coffees',
                                },
                            ],
                        },

                        {
                            id: 3,
                            question: 'How much would you like?',
                            answers: [
                                {
                                    title: '250g',
                                    text: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
                                },
                                {
                                    title: '500g',
                                    text: 'Perfect option for a couple. Yields about 40 delectable cups.',
                                },
                                {
                                    title: '1000g',
                                    text: 'Perfect for offices and events. Yields about 90 delightful cups.',
                                },
                            ],
                        },

                        {
                            id: 4,
                            question: 'Want us to grind them?',
                            answers: [
                                {
                                    title: 'Wholebean',
                                    text: 'Best choice if you cherish the full sensory experience',
                                },
                                {
                                    title: 'Filter',
                                    text: 'For drip or pour-over coffee methods such as V60 or Aeropress',
                                },
                                {
                                    title: 'Cafetiére',
                                    text: 'Course ground beans specially suited for french press coffee',
                                },
                            ],
                        },

                        {
                            id: 5,
                            question: 'How often should we deliver?',
                            answers: [
                                {
                                    title: 'Every week',
                                    text: '$7.20 per shipment. Includes free first-class shipping.',
                                },
                                {
                                    title: 'Every 2 weeks',
                                    text: '$9.60 per shipment. Includes free priority shipping.',
                                },
                                {
                                    title: 'Every month',
                                    text: '$12.00 per shipment. Includes free priority shipping.',
                                },
                            ],
                        },
                    ]}
                />
            </main>
            <Footer />
        </>
    );
};

export default Plan;
