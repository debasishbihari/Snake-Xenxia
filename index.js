const express = require('express');
const app = express();
const port= 8080;

app.use(express.static(__dirname + '/public/')); //This is telling express that all files inside public folder are static files

app.get('/',(req,res)=> res.sendFile('index.html')); // in backend we are sending index.html file at "/" endpoint

app.listen(port,()=>console.log(`listening on ${port}`));