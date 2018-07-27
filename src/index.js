// 入口文件
const routes = [
    {
        path: ['/', '/home'],
        controller: require('./home/controller')
    }, {
        path: '/counter',
        controller: require('./counter/controller')
    }, {
        path: '/todolist',
        controller: require('./todolist/controller')
    }
]
export default routes;
