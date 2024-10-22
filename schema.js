const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        completedLessons: [ID!]
    }

    type Lesson {
        id: ID!
        title: String!
        description: String
        audioURL: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        lessons: [Lesson!]!
        lesson(id: ID!): Lesson
    }

    type Mutation {
        createUser(name: String!, email: String!, password: String!, completedLessons: [ID!]): User
        createLesson(title: String!, description: String, audioURL: String!): Lesson
    }


`);

module.exports = schema;
