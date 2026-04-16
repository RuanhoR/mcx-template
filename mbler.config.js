const mbler = require("mbler");
module.exports = mbler.defineConfig({
  name: 'mcx template project',
  description: 'demo for mcx',
  mcVersion: '1.21.120',
  version: '0.0.1',
  minify: false,
  script: {
    main: 'index.ts',
    ui: true,
    lang: 'mcx',
  },
  outdir: {
    resources: './dist/res',
    behavior: './dist/dep',
    dist: './dist.mcaddon',
  },
});
