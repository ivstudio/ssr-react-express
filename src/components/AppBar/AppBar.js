import React from 'react';
import Menu from '@/components/Menu';
import styles from './AppBar.module.scss';
import { Link } from 'react-router-dom';

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
