import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: webpack.Configuration = {
    entry: {
        presentation: './src/presentation.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/i,
            loaders: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'candidate.html',
            template: path.resolve(__dirname, 'src', 'candidate.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'manager.html',
            template: path.resolve(__dirname, 'src', 'manager.html')
        }),
        new CopyWebpackPlugin({ patterns: [
            {from: path.resolve(__dirname, 'src', 'index.html'), to: path.resolve(__dirname, 'dist')}
        ]})
    ]
}

export default config;
