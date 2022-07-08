const esbuild = require('esbuild');
const fs = require('fs');

(async () => {
  const res = await esbuild.build({
    entryPoints: ['./index.jsx'],
    bundle: true,
    minify: true,
    platform: 'node',
    format: 'cjs',
    treeShaking: true,
    define: { 'process.env.NODE_ENV': '"production"' },
    target: 'node16.0',
    metafile: true,
    outfile: './dist/bundle.js',
    write: true,
  });


  fs.writeFileSync('./dist/meta.json', Buffer.from(JSON.stringify(res.metafile), 'utf8'));
})();