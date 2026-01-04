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
        "typescript-react-apollo",
      ],
      config: {
        withRefetchFn: true
      },
    },
  },
  ignoreNoDocuments: false,
};

export default config;
