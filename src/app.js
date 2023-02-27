const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const morgan = require('morgan');
const app = express();
const port = 3000;
//static file
app.use(express.static(path.join(__dirname, 'resources/public')));

//http logger
app.use(morgan('combined'));
//template engine
app.engine(
	'hbs',
	engine({
		extname: '.hbs'
	})
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(express.json());
//routes init
route(app);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
