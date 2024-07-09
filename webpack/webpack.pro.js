import { commonConfig } from './webpack.common.js';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

const webpackConfig = (environment) =>
  merge(commonConfig(environment), {
    mode: 'production',
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
  });

export default webpackConfig;
