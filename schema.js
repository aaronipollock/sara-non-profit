const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Lesson {
        id: ID!
        title: String!
        description: String
        audioURL: String!
    }

    type Query {
        lessons: [Lesson!]!
    }

    type Mutation {
        createLesson(title: String!, description: String, audioURL: String!): Lesson
    }


`);

module.exports = schema;
