const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('./controllers/config'));

app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
