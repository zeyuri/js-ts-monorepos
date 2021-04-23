module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  plugins: [
    {
      rules: {
        "footer-jira-key": (...rest) => {
          console.log(rest)
          return [true, "batata"]
        },
      },
    },
  ],
  rules: {
    "subject-case": [0],
  },
}
