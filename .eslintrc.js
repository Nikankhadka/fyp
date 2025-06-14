module.exports = {
  root: true,
  env: { es2021: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // optional for stricter rules
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Integrates Prettier
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn", // warning instead of error for flexibility
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["app/**/*.{ts,tsx,js,jsx}"],
      env: { browser: true },
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["server/**/*.{ts,js}"],
      env: { node: true },
    },
  ],
};
