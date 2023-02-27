const newsRouter = require('./news');
function route(app) {
	app.get('/', (req, res) => {
		res.render('home');
	});
	app.get('/search', (req, res) => {
		res.render('search');
	});
	app.post('/search', (req, res) => {
		console.log(req.body);
		res.send('Da nhan du lieu');
	});
	app.use('/news', newsRouter);
	app.use('/new/:slug', newsRouter);
}
module.exports = route;
