import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Login from "./pages/Login";
import Onboarding from "./pages/Onboarding";
import Layout from "./Layout";
import Header from "./components/Header"

import './index.css'
import WorldId from './components/WorldId';
import Location from './components/Location';
import Tracking from './components/Tracking';
import SelectRates from './components/SelectRates';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/homepage',
    element: <Layout><Outlet/></Layout>,
    children: [
      {
        index: true,
        element: <Onboarding/>
      },
      {
        path: '/homepage/location',
        element: <Location/>
      },
      {
        path: '/homepage/tracking',
        element: <Tracking/>
      },
      {
        path: '/homepage/selectrates',
        element: <SelectRates/>
      }
        ]
      }
    ]
);

function LayoutComponent() {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
