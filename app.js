const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');

const server = new Hapi.Server();

//配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host
});

const init = async() => {
    server.route([
      ...routesHelloHapi
    ]);
    //启动
   await server.start();
    console.log(`Server running at:${server.info.uri}`);

}
init();