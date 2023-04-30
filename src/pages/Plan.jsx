import Header from './../components/Header';
import Hero from './../components/Hero';
import How from '../components/How';

const Plan = function () {
    return (
        <>
            <Header />
            <Hero
                page="plan"
                title="Create plan"
                text="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
                button={false}
            />
            <How btn={false} />
        </>
    );
};

export default Plan;
