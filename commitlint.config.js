const commitlintConfigBatata = require("./packages/commitlint-plugin-batata")

module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  plugins: [],
  rules: {
    "subject-case": [0],
  },
}
