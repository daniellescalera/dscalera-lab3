const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: './' })
})
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

app.get('/page1', function (req, res) {
    res.sendFile('page1.html', {root: './' })
})
