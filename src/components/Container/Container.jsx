import classNames from 'classnames';
import React from 'react';

import styles from './Container.module.scss';

function Container({ children, paper = false, className }) {
    return (
        <div
            className={classNames(styles.container, className, {
                [styles['paper-container']]: paper,
            })}
        >
            {paper ? (
                <div className={classNames({ [styles.paper]: paper })}>
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </div>
    );
}

export default Container;
