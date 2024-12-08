const http = require('http');

const port = 8080;

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

function startServer() {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use. Retrying in 1 second...`);
      setTimeout(startServer, 1000);
    } else {
      console.error(err);
    }
  });
}

startServer();