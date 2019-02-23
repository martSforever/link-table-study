const path = require('path')
const resolve = (dir) => path.join(__dirname, '.', dir)

module.exports = {
    lintOnSave: false,
    devServer: {
        port: '8888',
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'src': resolve('src'),
            }
        },
    },
}