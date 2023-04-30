import Header from './../components/Header';
import Hero from './../components/Hero';
import Commitment from '../components/Commitment';
import Footer from '../components/Footer';

const About = function () {
    return (
        <>
            <Header />
            <main>
                <Hero
                    page="about"
                    title="About Us"
                    text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
                    button={false}
                />
                <Commitment />
            </main>
            <Footer />
        </>
    );
};

export default About;
