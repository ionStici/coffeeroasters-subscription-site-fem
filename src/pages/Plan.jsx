import Header from './../components/Header';
import Hero from './../components/Hero';

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
        </>
    );
};

export default Plan;
