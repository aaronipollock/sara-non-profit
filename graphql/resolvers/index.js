const userResolvers = require('./user');
const lessonResolvers = require('./lesson');

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...lessonResolvers.Query,
    },
    Mutation: {
        ...lessonResolvers.Mutation,
        ...userResolvers.Mutation,
    }
};

module.exports = resolvers;
