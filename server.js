
const express = require('express');

const app = express();
const port = 3003;

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars');

// failed suggestions
//app.set('views', __dirname + '/views/layouts');



app.use(express.static('public'))

app.get('/', (req, res) => {
    
    res.render('main', {layout : 'index'});
    });


app.listen(port, () => console.log(`App listening to port ${port}`));