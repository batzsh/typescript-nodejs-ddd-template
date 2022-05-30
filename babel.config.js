module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@config": "./src/config",
          "@docs": "./src/docs",
          "@application": "./src/application",
          "@domains": "./src/domains",
          "@infra": "./src/infra"
        }
      }
    ]
  ],
  ignore: ["**/*.spec.ts", "**/*.test.ts"]
};
