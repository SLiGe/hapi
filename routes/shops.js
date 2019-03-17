const GROUP_NAME = 'shops';
module.exports = [
    {
            path: `/${GROUP_NAME}`,
            method: 'GET',
            handler: async (request, h) => {
                h();
            },
            config:{
                tags:['api',GROUP_NAME],
                description:'获取店铺列表'
            }
    },
    {
        path: `/${GROUP_NAME}/{shopId}/goods`,
            method: 'GET',
            handler: async (request, h) => {
                h();
            },
            config:{
                tags:['api',GROUP_NAME],
                description:'获取店铺的商品列表'
            }
    }
]