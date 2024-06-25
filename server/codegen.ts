import type { CodegenConfig } from '@graphql-codegen/cli';

const config = {
  schema: 'schema.graphql',
  generates: {
    './resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers']
    }
  }
} satisfies CodegenConfig;

export default config;
