import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const paths = [
  "src",
  "components",
  "configs",
  "layouts",
  "pages",
  "router",
  "services",
  "styles",
  "utils",
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce((acc, cur) => ({
        ...acc,
        [cur]: `/${cur === "src" ? cur : "src/" + cur}`
      }), {})
    }
  }
});

