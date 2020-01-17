const express = require('express');

const app = express();

const path = require('path');

const fs = require('fs');

PACKAGE_NAME = 'network-detection';

app.use(express.static(`${__dirname}/dist/${PACKAGE_NAME}`));

app.listen(process.env.PORT || 4200);

// redirect traffic to index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(`${__dirname}/dist/${PACKAGE_NAME}/index.html`));
});
