import React from 'react';
import { Suspense, lazy } from 'react';

import { ssrBlog } from './pages/Blog';
import { ssrBlogDetails } from './pages/Blog/BlogDetails';
import { ssrHome } from './pages/Home';

const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetails = lazy(() => import('./pages/Blog/BlogDetails'));

const routes = [
    {
        element: (
            <Suspense fallback={<p>This is a callback</p>}>
                <Home />
            </Suspense>
        ),
        path: '/',
        exact: true,
        loadData: ssrHome.fetchPhotos,
    },
    {
        element: (
            <Suspense fallback={<p>This is a callback</p>}>
                <About />
            </Suspense>
        ),
        path: '/about',
        exact: true,
    },
    {
        element: (
            <Suspense fallback={<p>This is a callback</p>}>
                <Blog />
            </Suspense>
        ),
        path: '/blog',
        loadData: ssrBlog.fetchBlogPosts,
    },
    {
        element: (
            <Suspense fallback={<p>This is a callback</p>}>
                <BlogDetails />
            </Suspense>
        ),
        path: '/blog/:postId',
        loadData: ssrBlogDetails.fetchBlogDetails,
    },
];

export default routes;
