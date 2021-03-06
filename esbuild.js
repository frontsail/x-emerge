require('esbuild')
  .build({
    entryPoints: ['./src/cdn.js'],
    platform: 'browser',
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: 'dist/x-emerge.min.js',
  })
  .catch(() => process.exit(1))
