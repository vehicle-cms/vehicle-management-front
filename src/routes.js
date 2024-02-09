import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import DashboardApp from './pages/DashboardApp';
import NotFound from './pages/Page404';
import Admin from './pages/Managers';
import Memer from './pages/Vehicles';
import Campaign from './pages/Orders';
import Platform from './pages/Maintenance';
import Tags from './pages/Customers';
import Memedd from './pages/Drivers';
import ResetPassword from './pages/ResetPassword';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'managers', element: <Admin /> },
        { path: 'vehicles', element: <Memer /> },
        { path: 'drivers', element: <Memedd /> },
        { path: 'orders', element: <Campaign /> },
        { path: 'maintenance', element: <Platform /> },
        { path: 'customers', element: <Tags /> },
        { path: 'reset-password', element: <ResetPassword /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
