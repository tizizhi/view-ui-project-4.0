const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/map',
        component: (resolve) => require(['./views/map.vue'], resolve)

    }
];
export default routers;