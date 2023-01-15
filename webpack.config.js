const path = require("path");
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    entry : {
        'host': './entries/host.js',
        'child': './entries/child.js',
    },
    experiments: {
        outputModule: true,
        topLevelAwait: true,
    },
    output : {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: '[name].js',
        library: {
            type: 'module'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            '__VUE_OPTIONS_API__': true,
            '__VUE_PROD_DEVTOOLS__': false,
        }),
        new ModuleFederationPlugin({
            shared: {
                vue: {
                    singleton: true
                }
            }
        }),
    ]
}