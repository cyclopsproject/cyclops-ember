/* jshint node: true */
'use strict';

module.exports = {
  name: 'cyclops-ember',
  options: {
    nodeAssets: {
      'cyclops': {
        import: [
          {
            path: 'www/assets/scripts/cyclops.core.js',
            sourceMap: 'www/assets/scripts/cyclops.core.js.map'
          },
          {
            path: 'www/assets/css/cyclops.core.css',
            sourceMap: 'www/assets/css/cyclops.core.css.map'
          }
        ],
        public: {
          include: [
            'www/assets/img',
            'www/assets/svg'
          ],
          destDir: './'
        }
      }
    }
  }
};
