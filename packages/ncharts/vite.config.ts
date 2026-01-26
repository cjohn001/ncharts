/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.spec.ts'],
    exclude: ['node_modules', 'angular', 'react', 'solid', 'svelte', 'vue'],
    reporters: ['default'],
    outputFile: undefined,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['common.ts', 'types.ts', 'charts/**/*.ts'],
      exclude: ['**/*.spec.ts'],
    },
  },
});
