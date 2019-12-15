/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiTwitterAppsyncGraphQLAPIIdOutput = process.env.API_TWITTERAPPSYNC_GRAPHQLAPIIDOUTPUT
var apiTwitterAppsyncGraphQLAPIEndpointOutput = process.env.API_TWITTERAPPSYNC_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const graphqlMutation = require("./graphql.js").mutation;
const gql = require("graphql-tag");
const AWSAppSyncClient = require("aws-appsync").default;
require("es6-promise").polyfill();
require("isomorphic-fetch");

exports.handler = async function(event, context) { //eslint-disable-line

  const url = process.env.API_TWITTERAPPSYNC_GRAPHQLAPIENDPOINTOUTPUT;
  const region = process.env.REGION;

  AWS.config.update({
    region,
    credentials: new AWS.Credentials(
      process.env.AWS_ACCESS_KEY_ID,
      process.env.AWS_SECRET_ACCESS_KEY,
      process.env.AWS_SESSION_TOKEN
    )
  });

  const credentials = AWS.config.credentials;

  console.log(url, region, credentials);

  const appsyncClient = new AWSAppSyncClient(
    {
      url,
      region,
      auth: {
        type: "AWS_IAM",
        credentials
      },
      disableOffline: true
    },
    {
      defaultOptions: {
        query: {
          fetchPolicy: "network-only",
          errorPolicy: "all"
        }
      }
    }
  );

  const mutation = gql(graphqlMutation);

  const client = await appsyncClient.hydrated();

  const response = await client.mutate({
    mutation: mutation,
    fetchPolicy: "no-cache",
    variables: {
      input: { id: "5ddc4e1e-78c9-4c5a-b7ed-bcfafef94cd5", email: "me@you.us" }
    }
  });

  console.log(response);
  context.done(null, "response"); // SUCCESS with message
};
