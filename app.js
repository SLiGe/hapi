const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
//require('env2')('./.env')
//引入自定义的hapi-swagger插件配置
const swaggerPlugin = require('./plugins/hapi-swagger')
 const server = new Hapi.Server();

//配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host
});

const init = async() => {

   await server.register([
     //使用swagger
     ...swaggerPlugin
   ])

    server.route([
      ...routesHelloHapi,
      ...routesShops,
      ...routesOrders
    ]);
    //启动
   await server.start();
    console.log(`Server running at:${server.info.uri}`);

}
init();