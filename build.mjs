import { buildSync } from 'esbuild'

export default buildSync({
  entryPoints: ['src/_index.css'],
  minify: true,
  bundle: true,
  outdir: 'dist',
})
