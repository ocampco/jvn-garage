const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());
app.use(express.static(`${__dirname}/public`));

app.set('port', (process.env.PORT || 5000));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Running on port', app.get('port'));
});
