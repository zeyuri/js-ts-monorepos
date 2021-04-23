module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  plugins: [
    {
      rules: {
        "hello-world-rule": (dsadsa) => {
          const HELLO_WORLD = "Hello World"
          return [
            dsadsa.includes(HELLO_WORLD),
            `Your subject should contain ${HELLO_WORLD} message`,
          ]
        },
      },
    },
  ],
  rules: {
    "subject-case": [0],
  },
}
