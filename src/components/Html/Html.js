import React from 'react';

const Html = ({ title, children }) => (
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="stylesheet" href="/main.css" />
            <title>{title}</title>
        </head>
        <body>{children}</body>
    </html>
);

export default Html;
