/**@ts-check */
import { defineConfig } from "mbler"
export default defineConfig({
  name: '@ruanhor/example',
  description: 'demo for mcx',
  mcVersion: '1.21.120',
  version: '0.0.2',
  minify: false,
  script: {
    main: 'index.ts',
    ui: true,
    lang: 'mcx',
    UseBeta: true
  },
  build: {
    bundle: true
  },
  outdir: {
    resources: './dist/res',
    behavior: './dist/dep',
    dist: './dist.mcaddon',
  }
});
