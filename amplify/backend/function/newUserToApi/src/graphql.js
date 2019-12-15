module.exports = {
  mutation: `mutation CreateUser(
        $input: CreateUserInput!
        $condition: ModelUserConditionInput
      ) {
        createUser(input: $input, condition: $condition) {
          id
          username
          email
          first_name
          last_name
        }
      }
      `
};
