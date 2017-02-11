module.exports = {
  stripPrefix: './',
  staticFileGlobs: [
    '/',
    'index.html',
    'public/manifest.json',
    'public/**.css',
    'public/**.css.gz',
    'public/**.woff2',
    'public/**.svg',
    'public/**.ttf',
    'public/**.eot',
    'public/**.woff',
    'public/img/**.*',
    'public/**.js',
    'public/**.js.gz'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./
};
