import { CircularProgress } from '@mui/material';
import { LazyExoticComponent, lazy, Suspense, Fragment } from 'react';
//import DashboardLayout from '@/layouts/DashboardLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from '@/pages/Home';
//import Login from '@/pages/Login';

interface GuardProps {
  children: ReactNode;
}

interface RouteObject {
  path: string;
  element: LazyExoticComponent<() => JSX.Element>;
  children?: RouteObject[];
  guard?: LazyExoticComponent<(props: GuardProps) => JSX.Element> | undefined;
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazy(async () => await import('@/layouts/DashboardLayout')),
    /*element: <DashboardLayout />,*/
    children: [
      {
        path: '',
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: '/products',
        element: lazy(async () => await import('@/pages/Products'))
      }
    ],
    guard: lazy(async () => await import('@/guards/AuthGuard'))
  },
  {
    path: '/login',
    element: lazy(async () => await import('@/pages/Login'))
  }
];

const renderRoutes = (routes: RouteObject[]) => {
  return routes.map((route) => {
    const Element = route.element || Fragment;
    const Guard = route.guard || Fragment;
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<CircularProgress />}>
            <Guard>
              <Element />
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
