import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

import CommunicationPage from './pages/CommunicationPage';
import Communication from './pages/Communication';
import ViewPage from './pages/ViewPage';
import EnquiryPage from './pages/EnquiryPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import HomebannerPage from './pages/HomebannerPage';
import CoursesPage from './pages/CoursesPage';
import ShopPage from './pages/ShopPage';
import TestimonialPage from './pages/TestimonialPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'homebanner', element: <HomebannerPage /> },
        { path: 'courses', element: <CoursesPage /> },
        { path: 'shop', element: <ShopPage /> },
        { path: 'testimonial', element: <TestimonialPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'view', element: <ViewPage /> },
        { path: 'users', element: <UsersPage /> },
        { path: 'com', element: <Communication /> },
        { path: 'communication', element: <CommunicationPage /> },
        { path: 'enquiry', element: <EnquiryPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
