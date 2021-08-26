import * as http from 'http';
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer();

server.on('request', (request: IncomingMessage, response: ServerResponse) => {
  console.log('request.method');
  console.log(request.method);
  console.log('request.url');
  console.log(request.url);
  console.log('request.headers');
  console.log(request.headers);

  const array = [];
  request.on('data', (chunk) => {
    array.push(chunk);
  });

  request.on('end', () => {
    const body = Buffer.concat(array).toString();
    console.log('body');
    console.log(body);
    response.end('hi');
  });
});

// 开始监听 8888 端口
server.listen(8888);
