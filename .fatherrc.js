
export default [
  {
    cjs: 'babel',
  },
  {
    entry: 'ui/index.js',
    umd: {
      name: 'test',
      minFile: false,
    },
  },

];
