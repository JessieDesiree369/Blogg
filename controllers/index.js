const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);

app.use(session(sess));
app.use(require('./controllers/'));
const hbs = exphbs.create({helpers});

module.exports = router