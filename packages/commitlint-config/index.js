module.exports = {
  rules: {
    "hello-world-rule": (parsed) => {
      const HELLO_WORLD = "Hello World"
      console.log(parsed)
      return [false, `Your subject should contain ${HELLO_WORLD} message`]
    },
  },
}
