import React from 'react';
import Header from './../components/Header';
import Hero from './../components/Hero';
import Commitment from '../components/Commitment';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';
import Quality from '../components/Quality';
import Headquarters from '../components/Headquarters';

const About = function () {
    const [removeShimmer, setRemoveShimmer] = React.useState(false);
    const toTop = () => window.scroll(0, 0);

    const componentsWithImages = 3;
    let loadedComponents = 0;

    const checkImagesLoad = function () {
        loadedComponents++;

        if (componentsWithImages === loadedComponents) {
            setTimeout(() => setRemoveShimmer(true), 250);
        }
    };

    return (
        <>
            <Shimmer toTop={toTop} removeShimmer={removeShimmer} height={400} />
            <Header />
            <main>
                <Hero
                    page="about"
                    title="About Us"
                    text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
                    button={false}
                    checkImagesLoad={checkImagesLoad}
                />
                <Commitment checkImagesLoad={checkImagesLoad} />
                <Quality checkImagesLoad={checkImagesLoad} />
                <Headquarters />
            </main>
            <Footer />
        </>
    );
};

export default About;
