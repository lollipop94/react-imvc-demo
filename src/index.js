// 入口文件
const routes = [
    {
        path: ['/', '/home'],
        controller: require('./home/controller')
    }, {
        path: '/count',
        controller: require('./count/controller')
    }
]
export default routes;
