import Header from './../components/Header';
import Hero from './../components/Hero';

const Home = function () {
    return (
        <>
            <Header />
            <Hero
                page="home"
                title="Great coffee made simple."
                text="Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
                button="Create your plan"
            />
        </>
    );
};

export default Home;
