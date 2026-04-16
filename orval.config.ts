import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: './swagger.json',
    output: {
      mode: 'tags-split',
      target: './lib/api/endpoints',
      schemas: './lib/api/model',
      client: 'fetch',
      baseUrl: 'http://localhost:9000',
    },
  },
});
