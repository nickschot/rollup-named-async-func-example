let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  dest: 'dist/index.js',
  entry: 'lib/index.js',
  format: 'cjs',
  plugins: [],
  external: external
};
