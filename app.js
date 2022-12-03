const express = require('express')

const app = express();


app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(responseBody)
})




const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World! Hello There</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;



const port = 5000;

app.listen(port, () => console.log(`Port listening on ${port}`))