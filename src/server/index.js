import express from 'express';

import activeRoute from './middlewares/activeRoute';
import initializeStore from './middlewares/initializeStore';
import renderer from './middlewares/renderer';

const app = express();
app.use(express.static('public'));
app.use(activeRoute);
app.use(initializeStore);

app.get('*', (req, res, next) => {
    res.app.promise.then(() => res.send(renderer(req, res))).catch(next);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
