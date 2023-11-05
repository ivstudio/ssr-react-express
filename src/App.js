import * as React from 'react';
import routes from './routes';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import AppBar from './components/AppBar';
import './styles/main.scss';

/*
    SSR Router example:
    https://github.com/remix-run/react-router/tree/dev/examples/ssr
*/

const App = () => {
    return (
        <>
            <AppBar />
            <Routes>
                {routes.map(route => {
                    const { path, component: Page, loadData } = route;
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={<Page />}
                            loadData={loadData}
                        />
                    );
                })}
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
};

export default App;
