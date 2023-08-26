import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/app/core/graphql/schema.graphql',
  documents: './src/app/core/graphql/**/*.graphql',
  generates: {
    './src/app/core/graphql/code-generated/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-apollo-angular']
    }
  }
}
export default config
