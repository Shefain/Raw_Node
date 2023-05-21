const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(`
       <html>
         <head></head>
         <body>
         <form method="post" action="/process">
           <input name="text"  />
           </form>
         </body>
       </html>
     `);
    res.end();
  } else if (req.url === '/process' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });

    res.write('thans for submit');
    res.end();
  } else {
    res.write(' not found');
  }
});

server.listen(3000);
