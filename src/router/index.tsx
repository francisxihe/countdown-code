import { createBrowserRouter } from 'react-router-dom';
import { Home } from 'views/countdown';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
        {/* <Link to="about">About Us</Link> */}
      </div>
    ),
  },
  {
    path: 'countdown',
    element: <Home />,
  },
]);

export default router;
