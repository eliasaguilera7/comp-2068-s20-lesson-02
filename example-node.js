const express = require('express');
const app = express();
const https = require('https');

app.get('/',(request, response)=> {
   https.get('https://insult.mattbas.org/api/insult', resp =>{
       resp.on('data', chunk => {
           response.send(`
           <http>
           <head><title>Oh Snap</title>
           <h1>OH SNAP!</h1>
           <p style="font-size:24px; color:red">
            ${chunk.toString()}!
           </p>
           <body></body>
           </http>
           `)
       })
   })
});

app.listen(3000);