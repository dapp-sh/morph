import { buildSync } from 'esbuild'

export default buildSync({
  entryPoints: ['src/_index.css', 'src/resets/*'],
  bundle: true,
  outdir: 'dist',
})
