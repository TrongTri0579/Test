const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.use(express.urlencoded({
    extended: true
}));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});
app.post('/', (req, res) => {
    console.log(req.body.mytextarea);
    res.send(req.body.mytextarea);
});

app.listen(5000);