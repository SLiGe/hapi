module.exports = [{
        path: '/',
        method: 'GET',
        handler: (request, reply) => {
            reply(`hapi`);
        },
        config:{
            tags:['api','tests'],
            description:'测试hapi-swagger'
        }
}];