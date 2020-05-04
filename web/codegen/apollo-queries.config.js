/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");

module.exports = {
  client: {
    includes: [join(__dirname, "../src/api/queries/**")],
    service: {
      name: "gql-queries",
      url: "http://0.0.0.0:4000/graphql",
    },
  },
};
