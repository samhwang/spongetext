import { defineConfig } from "tsup";

export default defineConfig({
  entry: ['bin/index.ts'],
  outDir: 'build',
  format: ['cjs', 'esm'],
  dts: true,
});
