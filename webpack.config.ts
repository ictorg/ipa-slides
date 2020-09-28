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
        }, {
            test: /\.(woff(2)?|ttf|eot|svg|png|svg|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
            loader: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kick-Off Präsentation der Kandidaten',
            filename: 'candidate.html',
            template: path.resolve(__dirname, 'src', 'candidate.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Kick-Off Präsentation der verantwortlichen Fachkräfte',
            filename: 'manager.html',
            template: path.resolve(__dirname, 'src', 'manager.html')
        }),
        new CopyWebpackPlugin({ patterns: [
            {from: path.resolve(__dirname, 'src', 'index.html'), to: path.resolve(__dirname, 'dist')}
        ]})
    ]
}

export default config;
