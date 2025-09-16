import type { CodegenConfig } from '@graphql-codegen/cli';
import './envConfig.ts';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.SCHEMA_URL,
  documents: "src/graphql/**/*.ts",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        withRefetchFn: true
      },
    },
  },
  ignoreNoDocuments: false,
};

export default config;
