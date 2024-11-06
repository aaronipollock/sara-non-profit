const User = `
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        completedLessons: [ID!]
    }
`;

module.exports = User;
