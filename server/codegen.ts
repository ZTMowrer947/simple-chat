import type { CodegenConfig } from '@graphql-codegen/cli';

const config = {
  schema: 'schema.graphql',
  generates: {
    './resolvers-types.ts': {
      plugins: [
        {
          add: {
            content: '// deno-lint-ignore-file',
          },
        },
        'typescript',
        'typescript-resolvers'
      ]
    }
  }
} satisfies CodegenConfig;

export default config;
