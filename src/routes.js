import About from './pages/About';
import Blog, { ssrBlog } from './pages/Blog';
import BlogDetails, { ssrBlogDetails } from './pages/Blog/BlogDetails';
import Home, { ssrHome } from './pages/Home';

const routes = [
    {
        component: Home,
        path: '/',
        exact: true,
        loadData: ssrHome.fetchPhotos,
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
