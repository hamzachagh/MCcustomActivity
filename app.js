const express = require('express')

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/salesforceRest', (req , res) => {
  
    res.send('hellooooo hamzlla chagh !!');
    
  });
  app.get('/', (req , res) => {
  
    res.send('hellooooo hamzlla chagh !!');
    
  });
console.log("hamza chagh")