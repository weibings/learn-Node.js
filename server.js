const express = require('express');

const hbs = require('hbs');

const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper("getCurrentYear", () => new Date().getFullYear());

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) =>{
	res.render('welcome.hbs', {
		pageTitle: 'Home Page',
		aboutPage: 'About Page',
		welcome: 'Welcome to my website!',
	});

});

app.get('/about', (req, res) => {
	res.render('about.hbs');
});

app.listen(port, () => {
	console.log("Server is up on port 3000")
});