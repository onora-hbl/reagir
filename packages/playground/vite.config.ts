import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      'reagir': path.resolve(__dirname, '../reagir/src')
    }
  }
});