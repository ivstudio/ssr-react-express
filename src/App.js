import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppBar from './components/AppBar';
import NoMatch from './pages/NoMatch';
import routes from './routes';
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
                {routes.map(({ path, element }) => {
                    return <Route key={path} path={path} element={element} />;
                })}
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
};

export default App;
