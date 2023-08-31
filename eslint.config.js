export default [
  {
    env: {
      browser: true,
      es2021: true,
    },
    plugins: ["eslint-plugin-hexagonal-architecture"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    parserOptions: { project: ["./tsconfig.json"] },
    plugins: ["@typescript-eslint"],
    rules: {
      semi: ["error", "always"],
      "@typescript-eslint/strict-boolean-expressions": [
        2,
        {
          allowString: false,
          allowNumber: false,
        },
      ],
    },
    files: ["src/**/*.ts"],
    ignores: ["!node_modules", "node_modules/*"],
  },
];
