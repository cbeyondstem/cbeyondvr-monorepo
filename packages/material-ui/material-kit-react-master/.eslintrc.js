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
      node: {
        moduleDirectory: ["node_modules", "src/"]
      }
    },
    "import/extensions": ["warn", "never", { ".js": "always" }]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "import/extensions": "off",
        "react/jsx-filename-extension": "off"
      }
    }
    // {
    //   files: ["*-test.js", "*.spec.js"],
    //   rules: {
    //     "no-unused-expressions": "off"
    //   }
    // }
  ]
};
