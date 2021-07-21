const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3333;



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// const publicPath = path.resolve(__dirname, 'public');
// app.use(express.static(publicPath));
app.use(require('./controllers/config'));

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

// It happened again.  I just rebuilt this before class and added the css file while Santi was coding and now.  It’s just the express server, two handlebars and a css file.  How is the css file not linking?
