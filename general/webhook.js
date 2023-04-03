const http = require('http'); 
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const payload = parse(body);
      // do something with the payload
      console.log(payload);
      // res.end('Received webhook');
      res.end(JSON.stringify(payload)); // shows the sent payload
    });
  } else {
    res.end('Not a POST request');
  }
});

server.listen(3000, () => {
  console.log('Webhook server is listening on port 3000');
});
