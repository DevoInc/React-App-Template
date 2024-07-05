/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import InlineChunkHtmlPlugin from 'inline-chunk-html-plugin';
import generateHtml from './BaseDevoAppHTML.js';

export const commonConfig = () => {
  const entry = path.resolve('src/index.tsx');
  const outputPath = path.resolve('dist');
  
  return {
    entry,
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
      new ESLintPlugin({
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        configType: 'flat',
        eslintPath: 'eslint/use-at-your-own-risk',
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
    optimization: {
      minimize: true
    }
  };
};