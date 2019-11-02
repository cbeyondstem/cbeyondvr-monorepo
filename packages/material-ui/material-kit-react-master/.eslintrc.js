module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          [("components", "./src/components/")],
          [("assets", "./src/assets/")],
          [("views", "./src/views/")]
        ],
        extensions: [".js"]
      },
      node: {
        moduleDirectory: ["node_modules", "src/"]
      }
    },
    "import/extensions": ["warn", "never", { ".js": "always" }]
  }
};
