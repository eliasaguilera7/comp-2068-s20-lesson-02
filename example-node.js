const express = require('express');
const app = express();
const https = require('https');

app.get('/',(request, response)=> {
   https.get('https://insult.mattbas.org/api/insult', resp =>{
       resp.on('data', chunk => {
           response.send(`
           <http>
           <head><title>Insult app</title>
           <body>
           <h1>Welcome to the insult app!</h1>
           <p style="font-size:24px; color:red">
            ${chunk.toString()}!
           </p>
           </body>
           </http>
           `)
       })
   })
});

app.listen(process.env.PORT || 3000);