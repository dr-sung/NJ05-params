const express = require('express');
const app = express();

// req.params
app.get('/user/:id/:name', (req, res) => {
    let id = req.params.id;
    let name = req.params.name;
    res.send(`
        <html>
            <head><title>params</title></head>
            <body>
                <h1>id = ${id}, name = ${name}</h1>
            </body>
        </html>
    `)
});

// req.query  localhost:port/user?name=John&id=hs001
app.get('/user', (req, res) => {
    let name = req.query.name;
    let id = req.query.id;
    res.send({
        name,
        id
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('The server is running at port', port);
});