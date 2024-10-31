const Query =
    type Query {
        users: [User!]!
        user(id: ID!): User
        lessons: [Lesson!]!
        lesson(id: ID!): Lesson
    }
;

module.exports = Query;
