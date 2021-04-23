module.exports = {
  rules: {
    "hello-world-rule": (parsed, when, value) => {
      const HELLO_WORLD = "Hello World"
      console.log(parsed, when, value)
      return [false, `Your subject should contain ${HELLO_WORLD} message`]
    },
  },
}
