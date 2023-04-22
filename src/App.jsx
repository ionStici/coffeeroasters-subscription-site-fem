import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Plan from './pages/Plan';

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
