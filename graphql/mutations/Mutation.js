const Mutation = `
    type Mutation {
        createUser(name: String!, email: String!, password: String!, completedLessons: [ID!]): User
        createLesson(title: String!, description: String, audioURL: String!): Lesson
    }
`;

module.exports = Mutation;
