const express = require('express');
const routerApi = require('./routers');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.send('server Express');
});

app.listen(port, () => {
  console.log('Mi port es:' + port);
});

routerApi(app);
