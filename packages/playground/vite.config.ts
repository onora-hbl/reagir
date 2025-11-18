import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      react: path.resolve(__dirname, "../reagir/src"),
      "react/jsx-runtime": path.resolve(__dirname, "../reagir/src/jsx-runtime.ts"),
      "react/jsx-dev-runtime": path.resolve(__dirname, "../reagir/src/jsx-dev-runtime.ts"),
      "react-dom": path.resolve(__dirname, "../reagir/src"),
      "reagir": path.resolve(__dirname, "../reagir/src"),
    },
  },
});