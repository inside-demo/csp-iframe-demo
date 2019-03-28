const express = require('express');
// const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const morgan = require('morgan');
const csp = require('express-csp');
const port = 8888;

csp.extend(app, {
    policy: {
        directives: {
            'default-src': ['self'],
            'style-src': ['self', 'unsafe-inline'],
            'script-src': ['self', 'unsafe-inline', 'unsafe-eval'],
            'iframe-src': ['https:'],
            'child-src': ['https:']
        }
    }
});

app.use(express.static('public'));
app.use(morgan('dev'));

// https.createServer({
//   key: fs.readFileSync('./server.key'),
//   cert: fs.readFileSync('./server.crt')
// }, app);

app.listen(port, () => console.log(`App listening on port ${port}!`))
