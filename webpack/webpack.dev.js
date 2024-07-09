import { commonConfig } from './webpack.common.js';
import { merge } from 'webpack-merge';
import webpack from 'webpack';

const DEV = 'development';
const STANDALONE = 'standalone';

const webpackConfig = (environment) => {
  const isWatchActive =
    environment.mode === DEV || environment.mode === STANDALONE;

  return merge(commonConfig(), {
    mode: 'development',
    devtool: 'eval',
    watch: isWatchActive,
    plugins: [
      new webpack.DefinePlugin({
        __STANDALONE__: JSON.stringify(environment.mode === STANDALONE),
      }),
    ],
  });
};

export default webpackConfig;
