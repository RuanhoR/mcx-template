// @ts-check
import { defineConfig } from "mbler"
export default defineConfig({
  name: '@ruanhor/example',
  displayName: "Example Package",
  description: 'demo for mcx',
  mcVersion: '1.21.120',
  version: '0.0.2',
  minify: "oxc",
  script: {
    main: 'index.ts',
    ui: true,
    lang: 'mcx',
    UseBeta: true
  },
  build: {
    bundle: true,
    cache: "none"
  },
  outdir: {
    resources: './dist/res',
    behavior: './dist/dep',
    dist: './dist.mcaddon',
  }
});
