import React from 'react';
import Header from './../components/Header';
import Hero from './../components/Hero';
import Collection from '../components/Collection';
import Features from '../components/Features';
import How from '../components/How';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';

const Home = function () {
    const [removeShimmer, setRemoveShimmer] = React.useState(false);
    const toTop = () => window.scroll(0, 0);

    const componentsWithImages = 2;
    let loadedComponents = 0;

    const checkImagesLoad = function () {
        loadedComponents++;

        if (componentsWithImages === loadedComponents) {
            setTimeout(() => setRemoveShimmer(true), 250);
        }
    };

    return (
        <>
            <Shimmer toTop={toTop} removeShimmer={removeShimmer} height={500} />
            <Header />
            <main>
                <Hero
                    page="home"
                    title="Great coffee made simple."
                    text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
                    button="Create your plan"
                    checkImagesLoad={checkImagesLoad}
                />
                <Collection checkImagesLoad={checkImagesLoad} />
                <Features />
                <How btn={true} />
            </main>
            <Footer />
        </>
    );
};

export default Home;
