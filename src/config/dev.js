'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev'  // feel free to remove the appEnv property here
};

config.module.loaders.push({
  test: /\.josn$/,
  loader: 'json-loader'
});
export default Object.freeze(Object.assign({}, baseConfig, config));
