module.exports = {
    devServer: {
        hot: true,
        publicPath: '/',
        proxy: {
            '/api': {
                target: 'http://localhost:5000/',
                secure: false,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    css: {
        requireModuleExtension: false
    }
}