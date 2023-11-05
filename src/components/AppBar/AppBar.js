import React from 'react';
import Menu from '@/components/Menu';
import styles from './AppBar.module.scss';

const AppBar = () => (
    <header className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <Menu />
    </header>
);

export default AppBar;
