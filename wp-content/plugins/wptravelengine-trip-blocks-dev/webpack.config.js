const defaultWebPackConfig = require('@wordpress/scripts/config/webpack.config')
const path = require('path')
module.exports = {
    ...defaultWebPackConfig,
    entry: {
        'editor': './src/editor',
        'view': './src/index.js',
    },
    resolve: {
        ...defaultWebPackConfig.resolve,
        alias: {
            '@components': path.resolve(__dirname, 'src/@components'),
            '@blocks': path.resolve(__dirname, 'src/@blocks'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
}
