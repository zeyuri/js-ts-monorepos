module.exports = {
  rules: {
    batata: function (parsed, when, value) {
      console.log(parsed, when, value)
      return [
        false,
        `Commit must contains Jira task identifier. Example: (${JIRA_PROJECT_NAME}-777)`,
      ]
    },
  },
}
