module.exports = {
  root: true,
  env: { es2021: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // optional for stricter rules
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn", // warning instead of error for flexibility
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
