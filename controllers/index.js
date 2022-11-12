const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const hbs = exphbs.create({helpers});

router.use('/', homeRoutes);

app.use(session(sess));
app.use(require('./controllers/'));


module.exports = router