module.exports = {
  plugins: ["eslint-plugin-hexagonal-architecture"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: ["@typescript-eslint", "hexagonal-architecture"],
  rules: {
    semi: ["error", "always"],
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
    overrides: [
      {
        files: ["contexts/{backend,frontend}/*/src/**/*.ts"],
        rules: {
          "hexagonal-architecture/enforce": ["error"],
        },
      },
    ]
  },
};
