class NewController {
	index(req, res) {
		res.render('news');
	}
	show(reg, res) {
		res.send('New Detail');
	}
}
module.exports = new NewController();
