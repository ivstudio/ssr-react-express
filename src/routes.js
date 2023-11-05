import Home from './pages/Home';
import About from './pages/About';
import Blog, { ssrBlog } from './pages/Blog';
import BlogDetails, { ssrBlogDetails } from './pages/Blog/BlogDetails';

const routes = [
    {
        component: Home,
        path: '/',
        exact: true,
    },
    {
        component: About,
        path: '/about',
        exact: true,
    },
    {
        component: Blog,
        path: '/blog',
        loadData: ssrBlog.fetchBlogPosts,
    },
    {
        component: BlogDetails,
        path: '/blog/:postId',
        loadData: ssrBlogDetails.fetchBlogDetails,
    },
];

export default routes;
