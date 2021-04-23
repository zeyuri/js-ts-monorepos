module.exports = {
  rules: {
    "hello-world-rule": ({ subject }) => {
      const HELLO_WORLD = "Hello World"
      return [
        subject.includes(HELLO_WORLD),
        `Your subject should contain ${HELLO_WORLD} message`,
      ]
    },
  },
}
