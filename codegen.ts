import { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: `https://cdn.builder.io/api/v1/graphql/${process.env.BUILDER_API_KEY}/`,
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/__generated__/types.ts': { plugins: ['typescript'] },
    './src/graphql/__generated__/': {
      preset: 'near-operation-file',
      presetConfig: {
        folder: '__generated__',
        extension: '.types.tsx',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
    },
  },
}

export default config;
