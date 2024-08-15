const express = require('express');
const routerApi = require('./routers');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server Express');
});

app.listen(port, () => {
  console.log('Mi port es:' + port);
});

routerApi(app);
