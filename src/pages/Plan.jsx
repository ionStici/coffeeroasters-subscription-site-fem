import Header from './../components/Header';
import Hero from './../components/Hero';
import How from '../components/How';
import Footer from '../components/Footer';
import Shimmer from '../components/Shimmer';

const Plan = function () {
    const toTop = () => window.scroll(0, 0);

    return (
        <>
            {/* <Shimmer toTop={toTop} /> */}
            <Header />
            <main>
                <Hero
                    page="plan"
                    title="Create plan"
                    text="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
                    button={false}
                />
                <How btn={false} />
            </main>
            <Footer />
        </>
    );
};

export default Plan;
