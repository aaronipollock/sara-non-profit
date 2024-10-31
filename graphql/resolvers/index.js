const userResolvers = require('./user');
const lessonResolvers = require('./lesson');

const resolvers = {
    ...userResolvers,
    ...lessonResolvers,
};

module.exports = resolvers;
