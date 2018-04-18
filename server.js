const express = require('express');
const app = new express();

const hbs = require('hbs');

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerPartials('views/partials');
app.get('/', (req, res) => {
	res.render('welcome.hbs', {pageTitle: 'Home Page'});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {pageTitle: 'About Page', name: 'bin wei'});
});

app.get('/profile', (req, res) => {
	res.render('profile.hbs', {pageTitle: 'Profile Page', name: 'Bin Wei', University: 'GT', Address: 'Indiana'});
});
app.listen(3000);