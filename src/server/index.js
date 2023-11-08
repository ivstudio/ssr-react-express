import express from 'express';
import path from 'path';

import activeRoute from './middlewares/activeRoute';
import initializeStore from './middlewares/initializeStore';
import renderer from './renderer';

const app = express();
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(activeRoute);
app.use(initializeStore);

app.get('*', (req, res, next) => {
    req.app.promise.then(() => res.send(renderer(req))).catch(next);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
