import LandingPage from './LandingPage/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WeatherApp from './forms/weather';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/weather',
    element: <WeatherApp />
  },
]);
export default function App() {
  return (
    
    <RouterProvider router={router} />
           
  );
}


