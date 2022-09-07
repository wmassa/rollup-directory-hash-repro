import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  plugins: [resolve(), commonjs()],
  output: {
    dir: 'bundle',
    manualChunks: (a) => {
      if (a.indexOf('A') !== -1) {
        return 'Bundle';
      }
    },
    chunkFileNames: '[name]-[hash].js',
  },
};
