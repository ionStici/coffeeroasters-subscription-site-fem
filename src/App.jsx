import Header from './components/Header';
import Hero from './components/Hero';

import heroMobile from './assets/home/mobile/image-hero-coffeepress.jpg';
import heroTablet from './assets/home/tablet/image-hero-coffeepress.jpg';
import heroDesktop from './assets/home/desktop/image-hero-coffeepress.jpg';

import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

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

const About = function () {
    return (
        <>
            <Header />
        </>
    );
};

const Plan = function () {
    return (
        <>
            <Header />
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plan" element={<Plan />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
