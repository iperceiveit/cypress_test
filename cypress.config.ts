import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl : 'https://127.0.0.1:8000'
      proxyUrl: 'https://127.0.0.1:8000'
      types: ["cypress", "@4tw/cypress-drag-drop"]
    },
  },
});
