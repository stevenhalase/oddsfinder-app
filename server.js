const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3080;

app.use(express.static(__dirname + '/www'))
app.use(express.static(__dirname + '/admin'))

app.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname + '/admin/admin.html'));
});

app.listen(port, () => {
    console.log('Server started at localhost:' + port);
})
