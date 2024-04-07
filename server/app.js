const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Error 404: Resource not found</h1>`);
})

app.use(cors({
    origin: "http://localhost:3000"
}));

// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
//   });


app.listen(3000, () => {
    console.log('app listening on port 3000');
})