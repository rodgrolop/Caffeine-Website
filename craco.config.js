const { CracoAliasPlugin } = require('react-app-alias')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const options = {}

module.exports = {
    module: {
        rules: [
            {
                test: /\.(jpe?g|png)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: options,
        },
    ],
    webpack: {
        configure: {
            cache: true,
            devtool: 'nosources-source-map',
            plugins: [
                new CompressionPlugin({
                    filename: '[path][base].gz',
                    algorithm: 'gzip',
                    test: /\.js(\?.*)?$/i,
                    minRatio: Infinity,
                }),
                new CompressionPlugin({
                    filename: '[path][base].br',
                    algorithm: 'brotliCompress',
                    test: /\.(js|css|html|svg)$/,
                    compressionOptions: {
                        level: 11,
                    },
                    minRatio: Infinity,
                }),
            ],
            output: {
                path: path.resolve(__dirname, 'build'),
                filename: '[name].[chunkhash].bundle.js',
            },
            optimization: {
                usedExports: true,
                minimize: true,
                minimizer: [
                    new TerserPlugin({
                        parallel: true,
                        terserOptions: {
                            sourceMap: false,
                            ecma: 8,
                            compress: {
                                unused: true,
                                dead_code: true,
                                conditionals: true,
                                evaluate: true,
                            },
                        },
                    }),
                    new ImageMinimizerPlugin({
                        minimizer: {
                            implementation: ImageMinimizerPlugin.sharpMinify,
                            options: {
                                encodeOptions: {},
                            },
                        },
                    }),
                ],
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all',
                        },
                    },
                },
            },
        },
    },
}
