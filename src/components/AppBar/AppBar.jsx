import React from 'react';

import { Link } from 'react-router-dom';

import styles from './AppBar.module.scss';
import Menu from '../Menu';

function AppBar() {
    return (
        <header className={styles.container}>
            <Link
                className={styles.logo}
                to="/"
                title="ssr react express boilerplate"
            >
                SSR React Express
            </Link>
            <Menu />
        </header>
    );
}

export default AppBar;
