import { lazy, Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../common/components/ui/loader/Loader';

const RootLayout = lazy(() => import('../pages/RootLayout'));
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'));

const AppSuspense: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<Loader text="Loading..." />}>
    {children}
  </Suspense>
);

const routes = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Navigate to="/Dashboard" replace />
      },
      {
        path: 'Dashboard',
        element: (
          <AppSuspense>
            <RootLayout />
          </AppSuspense>
        ),
        children: [
          {
            index: true,
            // `Dashboard` is lazy; it will be covered by the same Suspense above
            element: <Dashboard />
          }
        ]
      }
    ]
  }
];

export default routes;