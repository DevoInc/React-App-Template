import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InlineChunkHtmlPlugin from 'inline-chunk-html-plugin';
import generateHtml from './BaseDevoAppHTML.js';
import webpack from 'webpack';

const DEV = 'development';
const STANDALONE = 'standalone';

const webpackConfig = (environment) => {
  const entry = path.resolve('src/index.tsx');
  const outputPath = path.resolve('dist');

  const isWatchActive = environment.mode === DEV 
    || environment.mode === STANDALONE;

  return {
    entry,
    mode: environment.mode,
    watch: isWatchActive,
    output: {
      path: outputPath,
      filename: 'build.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|json|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|gif|ico)$/,
          loader: 'url-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/i,
          use: ['style-loader', 'css-loader', 'less-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
      new webpack.DefinePlugin({
        __STANDALONE__: JSON.stringify(environment.mode === STANDALONE),
      }),
      new ESLintPlugin({
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      }),
      new HtmlWebpackPlugin({
        inlineSource: '.(js|css|json)$',
        inject: 'body',
        templateContent: generateHtml({
          devoApp: { title: 'my dapp' },
        }),
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, ['.(js|css|json)$']),
    ],
  };
};

export default webpackConfig;
