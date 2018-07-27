// 入口文件
const routes = [
    {
        path: ['/', '/home'],
        controller: require('./home/controller')
    }, {
        path: '/counter',
        controller: require('./counter/controller')
    }
]
export default routes;
