import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@/components/Menu';

import styles from './AppBar.module.scss';

const AppBar = () => (
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

export default AppBar;
