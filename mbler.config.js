/**@ts-check */
import { defineConfig } from "mbler"
export default defineConfig({
  name: '@ruanhor/example',
  displayName: "Example Package",
  description: 'demo for mcx',
  mcVersion: '1.21.120',
  version: '0.0.2',
  script: {
    main: 'index.ts',
    ui: true,
    lang: 'mcx',
    UseBeta: true
  },
  build: {
    bundle: true,
    cache: "file",
    rollupPlugins: [
      {
        name: "debug",
        resolveId(id, importer) {
          if (process.env.MODEL == "debug") console.log(id, importer)
        }
      }
    ]
  },
  outdir: {
    resources: './dist/res',
    behavior: './dist/dep',
    dist: './dist.mcaddon',
  }
});
