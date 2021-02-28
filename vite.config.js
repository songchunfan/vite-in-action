import path from 'path';
const { createMockServer } = require('vite-plugin-mock');
console.log(createMockServer);

module.exports = {
  alias: {
    '/comps/': path.resolve(__dirname, 'src/components'),
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ''),
    },
  },
  plugins: [
    createMockServer({
      supportTs: false,
    }),
  ],
};
