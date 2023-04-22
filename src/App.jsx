import Header from './components/Header';
import Hero from './components/Hero';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
            <main>
                <Hero
                    page="about"
                    title="About Us"
                    text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
                    button={false}
                />
            </main>
        </>
    );
};

const Plan = function () {
    return (
        <>
            <Header />
            <Hero
                page="plan"
                title="Create plan"
                text="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."
                button={false}
            />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/plan',
        element: <Plan />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
