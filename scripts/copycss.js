var fs = require('fs-extra');
fs.copySync('src/', 'lib/', { filter: /\.css$/ });
fs.copySync('src/fonts', 'lib/fonts');
