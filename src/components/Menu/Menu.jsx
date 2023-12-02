import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const menuItems = [
    {
        name: 'home',
        url: '/',
    },
    {
        name: 'blog',
        url: '/blog',
    },
    {
        name: 'about',
        url: '/about',
    },
];

function Menu() {
    return (
        <nav aria-label="Main menu" className={styles['top-nav']}>
            {menuItems.map(({ name, url }) => (
                <div key={name} className={styles['top-nav__menu']}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? `${styles['top-nav__menu-item--active']}`
                                : `${styles['top-nav__menu-item']}`
                        }
                        to={url}
                    >
                        {name}
                    </NavLink>
                </div>
            ))}
        </nav>
    );
}

export default Menu;
